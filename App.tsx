import React, { useState, useEffect, useMemo, useRef } from 'react';
import Papa from 'papaparse';
import { parseCSVData, aggregateEmployeeStats, calculateNPS, parseImportedFeedback, parseImportedShifts, getFiscalYearAndQuarter, parseImportedShine, aggregateDuoStats, aggregateTrioStats } from './utils';
import { Feedback, EmployeeStats, Shift, ShineData } from './types';
import { Dashboard } from './components/Dashboard';
import { EmployeeView } from './components/EmployeeView';
import { LeaderboardView } from './components/LeaderboardView';
import { DataImportModal } from './components/DataImportModal';
import { DateRangeSlider } from './components/DateRangeSlider';
import { Sparkles, UploadCloud, Filter, Users, ChevronDown, Search, Check, Trophy, Calendar, LayoutDashboard } from 'lucide-react';

type ViewMode = 'DASHBOARD' | 'LEADERBOARD';

const App: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState<Feedback[]>([]);
  const [shiftsData, setShiftsData] = useState<Shift[]>([]);
  const [shineData, setShineData] = useState<ShineData[]>([]);
  
  // Raw Data State for Persistence
  const [rawFeedback, setRawFeedback] = useState('');
  const [rawShifts, setRawShifts] = useState('');
  const [rawShine, setRawShine] = useState('');
  
  // Navigation State
  const [viewMode, setViewMode] = useState<ViewMode>('DASHBOARD');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
  
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  // Custom Filter State (Dates)
  const [customStartDate, setCustomStartDate] = useState<Date>(new Date());
  const [customEndDate, setCustomEndDate] = useState<Date>(new Date());
  const [dataDateRange, setDataDateRange] = useState<{min: Date, max: Date}>({ min: new Date(), max: new Date() });

  // Employee Filter State
  const [visibleEmployeeIds, setVisibleEmployeeIds] = useState<Set<string>>(new Set());
  const [isEmployeeFilterOpen, setIsEmployeeFilterOpen] = useState(false);
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState('');
  const employeeFilterRef = useRef<HTMLDivElement>(null);

  // Period Filter State
  const [isPeriodFilterOpen, setIsPeriodFilterOpen] = useState(false);
  const periodFilterRef = useRef<HTMLDivElement>(null);

  // Day Filter State (Dashboard)
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewMode, selectedEmployeeId]);

  useEffect(() => {
    // Load data from LocalStorage on mount
    const storedFeedback = localStorage.getItem('GAILS_FEEDBACK_CSV');
    const storedShifts = localStorage.getItem('GAILS_SHIFTS_CSV');
    const storedShine = localStorage.getItem('GAILS_SHINE_CSV');

    let hasStoredData = false;

    if (storedFeedback) {
      setRawFeedback(storedFeedback);
      setFeedbackData(parseImportedFeedback(storedFeedback));
      hasStoredData = true;
    }

    if (storedShifts) {
      setRawShifts(storedShifts);
      setShiftsData(parseImportedShifts(storedShifts));
      hasStoredData = true;
    }

    if (storedShine) {
      setRawShine(storedShine);
      setShineData(parseImportedShine(storedShine));
    }

    // If no stored data for feedback or shifts, load default demo data
    // We check !storedFeedback && !storedShifts to determine if we should fallback to demo
    if (!storedFeedback && !storedShifts) {
      const { feedback, shifts } = parseCSVData();
      setFeedbackData(feedback);
      setShiftsData(shifts);
    }
  }, []);

  // Calculate global min/max dates when data changes
  useEffect(() => {
    if (feedbackData.length > 0) {
      const timestamps = feedbackData.map(f => f.date.getTime()).filter(t => !isNaN(t));
      if (timestamps.length > 0) {
        const min = new Date(Math.min(...timestamps));
        const max = new Date(Math.max(...timestamps));
        setDataDateRange({ min, max });
        // Initialize custom filter to full range
        setCustomStartDate(min);
        setCustomEndDate(max);
      }
    }
  }, [feedbackData]);

  // Sync visible employees when data changes
  useEffect(() => {
    const allIds = new Set(shiftsData.map(s => s.employeeId));
    setVisibleEmployeeIds(allIds);
  }, [shiftsData]);

  // Handle clicking outside filters to close them
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (employeeFilterRef.current && !employeeFilterRef.current.contains(event.target as Node)) {
        setIsEmployeeFilterOpen(false);
      }
      if (periodFilterRef.current && !periodFilterRef.current.contains(event.target as Node)) {
        setIsPeriodFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleImportData = (feedbackText: string, shiftText: string, shineText: string) => {
    // Save to LocalStorage and State
    localStorage.setItem('GAILS_FEEDBACK_CSV', feedbackText);
    setRawFeedback(feedbackText);
    setFeedbackData(feedbackText ? parseImportedFeedback(feedbackText) : []);

    localStorage.setItem('GAILS_SHIFTS_CSV', shiftText);
    setRawShifts(shiftText);
    setShiftsData(shiftText ? parseImportedShifts(shiftText) : []);

    localStorage.setItem('GAILS_SHINE_CSV', shineText);
    setRawShine(shineText);
    setShineData(shineText ? parseImportedShine(shineText) : []);
    
    // Reset view and filter
    setSelectedEmployeeId(null);
    setViewMode('DASHBOARD');
    setActiveFilter('ALL');
    setSelectedDay(null);
  };

  // Generate filter options based on available data
  const filterOptions = useMemo(() => {
    const months = new Set<string>();
    const quarters = new Set<string>();

    feedbackData.forEach(f => {
       if (isNaN(f.date.getTime())) return;

       // Month Option: "2026-01|January 2026"
       const monthKey = `${f.date.getFullYear()}-${String(f.date.getMonth() + 1).padStart(2, '0')}`;
       const monthLabel = f.date.toLocaleString('default', { month: 'long', year: 'numeric' });
       months.add(`${monthKey}|${monthLabel}`);

       // Quarter Option: "FY26-Q4|Q4 FY26"
       const { fy, quarter } = getFiscalYearAndQuarter(f.date);
       quarters.add(`${fy}-${quarter}|${quarter} ${fy}`);
    });

    const sortedMonths = Array.from(months).sort().reverse().map(s => {
        const [value, label] = s.split('|');
        return { value: `MONTH:${value}`, label };
    });
    
    const sortedQuarters = Array.from(quarters).sort().reverse().map(s => {
        const [value, label] = s.split('|');
        return { value: `QUARTER:${value}`, label };
    });

    return { months: sortedMonths, quarters: sortedQuarters };
  }, [feedbackData]);

  // Helper to parse YYYY-MM-DD to Local Date (Kept for legacy strings if needed, though we moved to Date objs)
  const parseLocalYMD = (s: string) => {
    if (!s) return null;
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  };

  const formatDateLabel = (date: Date) => {
     return date ? date.toLocaleDateString('default', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
  };

  const periodButtonLabel = useMemo(() => {
    if (activeFilter === 'ALL') return 'All Time';
    if (activeFilter === 'CUSTOM') return 'Custom Range';
    const option = [...filterOptions.months, ...filterOptions.quarters].find(o => o.value === activeFilter);
    return option ? option.label : 'Select Period';
  }, [activeFilter, filterOptions]);

  // 1. Filter Data by Date Range (Time Filtered)
  const timeFilteredFeedback = useMemo(() => {
    if (activeFilter === 'ALL') return feedbackData;

    if (activeFilter === 'CUSTOM') {
        const startDate = customStartDate;
        const endDate = customEndDate;
        const adjustedEnd = new Date(endDate);
        adjustedEnd.setHours(23, 59, 59, 999);
        const adjustedStart = new Date(startDate);
        adjustedStart.setHours(0, 0, 0, 0);

        return feedbackData.filter(f => {
            if (isNaN(f.date.getTime())) return false;
            return f.date >= adjustedStart && f.date <= adjustedEnd;
        });
    }

    const [type, value] = activeFilter.split(':');

    return feedbackData.filter(f => {
      if (isNaN(f.date.getTime())) return false;

      if (type === 'MONTH') {
         const fMonth = `${f.date.getFullYear()}-${String(f.date.getMonth() + 1).padStart(2, '0')}`;
         return fMonth === value;
      }
      if (type === 'QUARTER') {
         const { fy, quarter } = getFiscalYearAndQuarter(f.date);
         const fQuarter = `${fy}-${quarter}`;
         return fQuarter === value;
      }
      return true;
    });
  }, [feedbackData, activeFilter, customStartDate, customEndDate]);

  // 2. Filter Data by Selected Day (Content Filtered)
  const finalFilteredFeedback = useMemo(() => {
    if (!selectedDay) return timeFilteredFeedback;
    
    const dayMap: Record<string, number> = { 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6, 'Sun': 0 };
    const targetDayIndex = dayMap[selectedDay];

    return timeFilteredFeedback.filter(f => {
        if (isNaN(f.date.getTime())) return false;
        return f.date.getDay() === targetDayIndex;
    });
  }, [timeFilteredFeedback, selectedDay]);

  // Filter Shine Data by Time (Shine data isn't day-filtered usually, unless visual consistency is needed, keeping it time-only for now)
  const filteredShine = useMemo(() => {
    if (activeFilter === 'ALL') return shineData;

    if (activeFilter === 'CUSTOM') {
        const startDate = customStartDate;
        const endDate = customEndDate;
        const adjustedEnd = new Date(endDate);
        adjustedEnd.setHours(23, 59, 59, 999);
        const adjustedStart = new Date(startDate);
        adjustedStart.setHours(0, 0, 0, 0);

        return shineData.filter(d => {
            if (isNaN(d.date.getTime())) return false;
            return d.date >= adjustedStart && d.date <= adjustedEnd;
        });
    }

    const [type, value] = activeFilter.split(':');

    return shineData.filter(d => {
      if (isNaN(d.date.getTime())) return false;

      if (type === 'MONTH') {
         const dMonth = `${d.date.getFullYear()}-${String(d.date.getMonth() + 1).padStart(2, '0')}`;
         return dMonth === value;
      }
      if (type === 'QUARTER') {
         const { fy, quarter } = getFiscalYearAndQuarter(d.date);
         const dQuarter = `${fy}-${quarter}`;
         return dQuarter === value;
      }
      return true;
    });
  }, [shineData, activeFilter, customStartDate, customEndDate]);


  // Calculate stats based on FINAL filtered feedback
  const employeeStats = useMemo(() => {
    const allStats = aggregateEmployeeStats(finalFilteredFeedback, shiftsData);
    return allStats.filter(stat => visibleEmployeeIds.has(stat.id));
  }, [finalFilteredFeedback, shiftsData, visibleEmployeeIds]);

  // Calculate Duo stats based on FINAL filtered feedback
  const duoStats = useMemo(() => {
    return aggregateDuoStats(finalFilteredFeedback, shiftsData);
  }, [finalFilteredFeedback, shiftsData]);

  // Calculate Trio stats based on FINAL filtered feedback
  const trioStats = useMemo(() => {
    return aggregateTrioStats(finalFilteredFeedback, shiftsData);
  }, [finalFilteredFeedback, shiftsData]);

  // Calculate monthly NPS trend (based on FINAL filtered feedback)
  const monthlyNPS = useMemo(() => {
    const groupedByMonth = new Map<string, Feedback[]>();
    
    const sortedFeedback = [...finalFilteredFeedback].sort((a, b) => a.date.getTime() - b.date.getTime());

    sortedFeedback.forEach(f => {
      if (isNaN(f.date.getTime())) return;
      const monthKey = f.date.toLocaleString('default', { month: 'short', year: '2-digit' });
      const current = groupedByMonth.get(monthKey) || [];
      groupedByMonth.set(monthKey, [...current, f]);
    });

    return Array.from(groupedByMonth.entries()).map(([month, items]) => ({
      month,
      nps: calculateNPS(items)
    }));
  }, [finalFilteredFeedback]);

  const overallNPS = useMemo(() => calculateNPS(finalFilteredFeedback), [finalFilteredFeedback]);

  // Calculate Day Stats for Dashboard (based on TIME filtered feedback, to show all days distribution)
  const dayStats = useMemo(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const buckets = days.map(d => ({ name: d, total: 0, promoters: 0, detractors: 0, score: 0 }));
    
    timeFilteredFeedback.forEach(f => {
        if (!f.date) return;
        const jsDay = f.date.getDay(); 
        const dayIndex = (jsDay + 6) % 7; // Shift 0(Sun) to 6
        
        const bucket = buckets[dayIndex];
        bucket.total++;
        if (f.nps >= 9) bucket.promoters++;
        if (f.nps <= 6) bucket.detractors++;
    });

    return buckets.map(b => ({
        ...b,
        score: b.total > 0 ? Math.round(((b.promoters - b.detractors) / b.total) * 100) : 0
    }));
  }, [timeFilteredFeedback]);

  // --- Employee Filter Logic ---
  const allEmployees = useMemo(() => {
    const employeeLastShiftMap = new Map<string, number>();
    const employeeNameMap = new Map<string, string>();

    // Analyze all shifts to find the last shift date for each employee
    shiftsData.forEach(s => {
      employeeNameMap.set(s.employeeId, s.employeeName);
      
      const shiftDate = new Date(s.date).getTime();
      const currentLast = employeeLastShiftMap.get(s.employeeId) || 0;
      if (shiftDate > currentLast) {
        employeeLastShiftMap.set(s.employeeId, shiftDate);
      }
    });

    return Array.from(employeeNameMap.entries())
      .map(([id, name]) => ({ 
        id, 
        name,
        lastShift: employeeLastShiftMap.get(id) || 0
      }))
      .sort((a, b) => {
        // Sort by last shift date descending (most recent first)
        if (b.lastShift !== a.lastShift) {
            return b.lastShift - a.lastShift;
        }
        // Then alphabetically
        return a.name.localeCompare(b.name);
      });
  }, [shiftsData]);

  const toggleEmployee = (id: string) => {
    const newSet = new Set(visibleEmployeeIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setVisibleEmployeeIds(newSet);
  };

  const toggleAllEmployees = () => {
    if (visibleEmployeeIds.size === allEmployees.length) {
      setVisibleEmployeeIds(new Set());
    } else {
      setVisibleEmployeeIds(new Set(allEmployees.map(e => e.id)));
    }
  };

  const filteredEmployeeList = allEmployees.filter(e => 
    e.name.toLowerCase().includes(employeeSearchTerm.toLowerCase())
  );

  const isLeaderboard = viewMode === 'LEADERBOARD';

  // Memoize the label calculation to reuse it across views
  const periodLabel = useMemo(() => {
    if (activeFilter === 'ALL') return 'All Time';
    if (activeFilter === 'CUSTOM') {
        const start = formatDateLabel(customStartDate);
        const end = formatDateLabel(customEndDate);
        if (start && end) return `${start} - ${end}`;
        return 'Custom Range';
    }
    const option = [...filterOptions.months, ...filterOptions.quarters].find(o => o.value === activeFilter);
    return option ? option.label : 'All Time';
  }, [activeFilter, customStartDate, customEndDate, filterOptions]);

  const getFullDayLabel = (shortDay: string) => {
    const map: Record<string, string> = {
        'Mon': 'Mondays',
        'Tue': 'Tuesdays',
        'Wed': 'Wednesdays',
        'Thu': 'Thursdays',
        'Fri': 'Fridays',
        'Sat': 'Saturdays',
        'Sun': 'Sundays'
    };
    return map[shortDay] || shortDay;
  };

  const displayPeriodLabel = useMemo(() => {
      let label = periodLabel;
      if (selectedDay) {
          label += ` (${getFullDayLabel(selectedDay)})`;
      }
      return label;
  }, [periodLabel, selectedDay]);

  // Calculate stats based on TIME filtered feedback (for drilling down with context)
  const timeFilteredStats = useMemo(() => {
    return aggregateEmployeeStats(timeFilteredFeedback, shiftsData);
  }, [timeFilteredFeedback, shiftsData]);

  const renderContent = () => {
    // 1. Employee Detail View
    if (selectedEmployeeId) {
      // Find the employee in the full time period dataset to get their ID and all feedback IDs
      const employee = timeFilteredStats.find(e => e.id === selectedEmployeeId);
      
      if (!employee) return null;

      // Filter feedback using the employee's feedback IDs from the full time period
      // This ensures the rhythm chart sees all days in the period
      const employeeFeedback = timeFilteredFeedback.filter(f => employee.feedbackIds.includes(f.id));

      return (
        <EmployeeView 
          employee={employee} 
          feedback={employeeFeedback} 
          onBack={() => setSelectedEmployeeId(null)}
          periodLabel={periodLabel} // Use base label, EmployeeView adds day label
          allEmployees={allEmployees}
          onSelectEmployee={setSelectedEmployeeId}
          initialSelectedDay={selectedDay} // Pass dashboard selection as initial state
        />
      );
    }

    // 2. Leaderboard View
    if (viewMode === 'LEADERBOARD') {
        return (
            <LeaderboardView 
                stats={employeeStats} 
                duoStats={duoStats}
                trioStats={trioStats}
                onBack={() => setViewMode('DASHBOARD')}
                currentPeriodLabel={displayPeriodLabel}
            />
        );
    }

    // 3. Default Dashboard View
    return (
      <Dashboard 
        stats={employeeStats} 
        overallNPS={overallNPS}
        totalFeedback={finalFilteredFeedback.length}
        onSelectEmployee={setSelectedEmployeeId}
        monthlyNPS={monthlyNPS}
        shineData={filteredShine}
        dayStats={dayStats}
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
      />
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <DataImportModal 
        isOpen={isImportModalOpen} 
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportData}
        defaultFeedback={rawFeedback}
        defaultShifts={rawShifts}
        defaultShine={rawShine}
      />

      {/* Navbar - Increased z-index to 40 to stay above z-10 content elements */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setSelectedEmployeeId(null); setViewMode('DASHBOARD'); }}>
            <div className="bg-red-700 p-2 rounded-lg shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-stone-800 tracking-tight leading-none">GAIL's Marlow</h1>
              <p className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">CUSTOMER EXPERIENCE DASHBOARD</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            
            {/* View Mode Buttons - Desktop */}
            <div className="hidden sm:flex items-center gap-2">
                <button 
                    onClick={() => { setSelectedEmployeeId(null); setViewMode('DASHBOARD'); }}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors h-[34px] border ${
                        viewMode === 'DASHBOARD' && !selectedEmployeeId
                        ? 'bg-stone-800 text-white border-stone-800' 
                        : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                    }`}
                >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    Dashboard
                </button>
                <button 
                    onClick={() => { setSelectedEmployeeId(null); setViewMode('LEADERBOARD'); }}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors h-[34px] border ${
                        viewMode === 'LEADERBOARD'
                        ? 'bg-stone-800 text-white border-stone-800' 
                        : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                    }`}
                >
                    <Trophy className="w-3.5 h-3.5" />
                    Leaderboard
                </button>
            </div>
             
            {/* Time Filter Dropdown (Refactored for space saving) */}
            <div className="relative hidden sm:block" ref={periodFilterRef}>
                <button
                    onClick={() => setIsPeriodFilterOpen(!isPeriodFilterOpen)}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium border rounded-lg transition-colors h-[34px] ${
                        isPeriodFilterOpen || activeFilter !== 'ALL' || selectedDay
                        ? 'bg-stone-800 text-white border-stone-800'
                        : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
                    }`}
                >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{periodButtonLabel}{selectedDay && !selectedEmployeeId ? ` (${selectedDay}s)` : ''}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${isPeriodFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {isPeriodFilterOpen && (
                    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-stone-200 z-50 p-4 animate-in fade-in zoom-in-95">
                        <div className="space-y-4">
                            {/* Period Select */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                                        Select Period
                                    </label>
                                    {activeFilter !== 'ALL' && (
                                        <button 
                                            onClick={() => { setActiveFilter('ALL'); setIsPeriodFilterOpen(false); }}
                                            className="text-[10px] font-bold text-red-600 hover:text-red-700 hover:bg-red-50 px-2 py-0.5 rounded transition-colors uppercase tracking-wider"
                                        >
                                            Reset
                                        </button>
                                    )}
                                </div>
                                <div className="relative">
                                    <select 
                                        value={activeFilter}
                                        onChange={(e) => setActiveFilter(e.target.value)}
                                        className="w-full appearance-none bg-stone-50 border border-stone-200 text-stone-700 text-sm py-2.5 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700/20 cursor-pointer hover:bg-stone-100 transition-colors"
                                    >
                                         <option value="ALL">All Time</option>
                                         <option value="CUSTOM">Custom Range</option>
                                         <div className="h-px bg-stone-200 my-1"></div>
                                         {filterOptions.quarters.length > 0 && (
                                            <optgroup label="Fiscal Quarters">
                                                {filterOptions.quarters.map(q => <option key={q.value} value={q.value}>{q.label}</option>)}
                                            </optgroup>
                                         )}
                                         {filterOptions.months.length > 0 && (
                                            <optgroup label="Months">
                                                {filterOptions.months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                                            </optgroup>
                                         )}
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            {activeFilter === 'CUSTOM' && (
                                <div className="animate-in fade-in slide-in-from-top-2">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                                            Custom Range
                                        </label>
                                        <span className="text-[10px] font-medium text-red-700 bg-red-50 px-2 py-0.5 rounded-full">
                                            {formatDateLabel(customStartDate)} - {formatDateLabel(customEndDate)}
                                        </span>
                                    </div>
                                    <DateRangeSlider 
                                        minDate={dataDateRange.min}
                                        maxDate={dataDateRange.max}
                                        initialStart={customStartDate}
                                        initialEnd={customEndDate}
                                        onChange={(start, end) => {
                                            setCustomStartDate(start);
                                            setCustomEndDate(end);
                                        }}
                                    />
                                </div>
                            )}

                            {/* Day Filter Select - Only show when NOT in employee view */}
                            {!selectedEmployeeId && (
                                <div className="pt-2 border-t border-stone-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                                            Day of Week
                                        </label>
                                        {selectedDay && (
                                            <button 
                                                onClick={() => setSelectedDay(null)}
                                                className="text-[10px] font-bold text-red-600 hover:text-red-700 hover:bg-red-50 px-2 py-0.5 rounded transition-colors uppercase tracking-wider"
                                            >
                                                Reset
                                            </button>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <select 
                                            value={selectedDay || ''}
                                            onChange={(e) => setSelectedDay(e.target.value === '' ? null : e.target.value)}
                                            className="w-full appearance-none bg-stone-50 border border-stone-200 text-stone-700 text-sm py-2.5 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700/20 cursor-pointer hover:bg-stone-100 transition-colors"
                                        >
                                            <option value="">All Days</option>
                                            <option value="Mon">Mondays</option>
                                            <option value="Tue">Tuesdays</option>
                                            <option value="Wed">Wednesdays</option>
                                            <option value="Thu">Thursdays</option>
                                            <option value="Fri">Fridays</option>
                                            <option value="Sat">Saturdays</option>
                                            <option value="Sun">Sundays</option>
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Employee Filter Dropdown */}
            <div className="relative hidden sm:block" ref={employeeFilterRef}>
              <button
                onClick={() => setIsEmployeeFilterOpen(!isEmployeeFilterOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium border rounded-lg transition-colors h-[34px] ${
                  isEmployeeFilterOpen || visibleEmployeeIds.size !== allEmployees.length
                  ? 'bg-stone-800 text-white border-stone-800' 
                  : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Staff {visibleEmployeeIds.size !== allEmployees.length && `(${visibleEmployeeIds.size})`}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isEmployeeFilterOpen ? 'rotate-180' : ''}`} />
              </button>

              {isEmployeeFilterOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-stone-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-3 border-b border-stone-100 space-y-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
                      <input 
                        type="text" 
                        placeholder="Search staff..." 
                        value={employeeSearchTerm}
                        onChange={(e) => setEmployeeSearchTerm(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-8 pr-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-red-700/10"
                        autoFocus
                      />
                    </div>
                    <button 
                      onClick={toggleAllEmployees}
                      className="w-full text-xs text-stone-500 hover:text-stone-800 hover:bg-stone-50 py-1 rounded text-center transition-colors"
                    >
                      {visibleEmployeeIds.size === allEmployees.length ? 'Deselect All' : 'Select All'}
                    </button>
                  </div>
                  
                  <div className="max-h-[300px] overflow-y-auto p-1">
                    {filteredEmployeeList.map(emp => {
                      const isSelected = visibleEmployeeIds.has(emp.id);
                      return (
                        <button
                          key={emp.id}
                          onClick={() => toggleEmployee(emp.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors ${
                            isSelected ? 'bg-red-50 text-red-900 font-medium' : 'text-stone-600 hover:bg-stone-50'
                          }`}
                        >
                          <span>{emp.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-red-600" />}
                        </button>
                      );
                    })}
                    {filteredEmployeeList.length === 0 && (
                      <div className="p-4 text-center text-xs text-stone-400">No staff found</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="w-px h-6 bg-stone-200 mx-1 hidden sm:block"></div>

            <button 
              onClick={() => setIsImportModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 border border-red-100 rounded-lg transition-colors h-[34px]"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              Import Data
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Filter (Visible only on small screens) */}
      <div className="sm:hidden px-4 py-3 bg-white border-b border-stone-200 flex flex-col gap-3 print:hidden">
         <div className="flex gap-2">
            <button 
                onClick={() => { setSelectedEmployeeId(null); setViewMode('DASHBOARD'); }}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors border ${
                    viewMode === 'DASHBOARD' && !selectedEmployeeId
                    ? 'bg-stone-800 text-white border-stone-800' 
                    : 'bg-white text-stone-600 border-stone-200'
                }`}
            >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
            </button>
            <button 
                onClick={() => { setSelectedEmployeeId(null); setViewMode('LEADERBOARD'); }}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors border ${
                    viewMode === 'LEADERBOARD'
                    ? 'bg-stone-800 text-white border-stone-800' 
                    : 'bg-white text-stone-600 border-stone-200'
                }`}
            >
                <Trophy className="w-4 h-4" />
                Leaderboard
            </button>
            <button 
                onClick={() => setIsImportModalOpen(true)}
                className="p-2 text-red-700 bg-red-50 rounded-lg border border-red-100 flex-shrink-0"
            >
                <UploadCloud className="w-4 h-4" />
            </button>
         </div>

         <div className={selectedEmployeeId ? "block" : "grid grid-cols-2 gap-2"}>
             <div className="relative">
                 <select 
                     value={activeFilter} 
                     onChange={(e) => setActiveFilter(e.target.value)}
                     className="w-full appearance-none bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium py-2 pl-3 pr-8 rounded-lg focus:outline-none"
                 >
                     <option value="ALL">All Time</option>
                     <option value="CUSTOM">Custom Range</option>
                     <optgroup label="Fiscal Quarters">
                         {filterOptions.quarters.map(q => <option key={q.value} value={q.value}>{q.label}</option>)}
                     </optgroup>
                     <optgroup label="Months">
                         {filterOptions.months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                     </optgroup>
                 </select>
                 <Filter className="w-3.5 h-3.5 text-stone-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
             </div>
             
             {!selectedEmployeeId && (
                 <div className="relative">
                     <select 
                         value={selectedDay || ''}
                         onChange={(e) => setSelectedDay(e.target.value === '' ? null : e.target.value)}
                         className="w-full appearance-none bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium py-2 pl-3 pr-8 rounded-lg focus:outline-none"
                     >
                         <option value="">All Days</option>
                         <option value="Mon">Mondays</option>
                         <option value="Tue">Tuesdays</option>
                         <option value="Wed">Wednesdays</option>
                         <option value="Thu">Thursdays</option>
                         <option value="Fri">Fridays</option>
                         <option value="Sat">Saturdays</option>
                         <option value="Sun">Sundays</option>
                     </select>
                     <ChevronDown className="w-3.5 h-3.5 text-stone-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                 </div>
             )}
         </div>
         
         {activeFilter === 'CUSTOM' && (
             <div className="mt-2 px-1 pb-2">
                 {/* Mobile Slider Version */}
                 <DateRangeSlider 
                    minDate={dataDateRange.min}
                    maxDate={dataDateRange.max}
                    initialStart={customStartDate}
                    initialEnd={customEndDate}
                    onChange={(start, end) => {
                       setCustomStartDate(start);
                       setCustomEndDate(end);
                    }}
                  />
             </div>
         )}

         {/* Mobile Employee Filter Button */}
         <button
            onClick={() => setIsEmployeeFilterOpen(!isEmployeeFilterOpen)}
            className={`flex items-center justify-between px-3 py-2 text-xs font-medium border rounded-lg transition-colors w-full ${
                isEmployeeFilterOpen || visibleEmployeeIds.size !== allEmployees.length
                ? 'bg-stone-800 text-white border-stone-800' 
                : 'bg-stone-100 text-stone-700 border-stone-200'
            }`}
          >
            <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                <span>Filter Staff {visibleEmployeeIds.size !== allEmployees.length && `(${visibleEmployeeIds.size} selected)`}</span>
            </div>
            <ChevronDown className={`w-3 h-3 transition-transform ${isEmployeeFilterOpen ? 'rotate-180' : ''}`} />
         </button>

         {/* Mobile Dropdown content inline */}
         {isEmployeeFilterOpen && (
             <div className="bg-stone-50 rounded-lg border border-stone-200 p-3 animate-in slide-in-from-top-2">
                 <div className="flex gap-2 mb-3">
                    <input 
                        type="text" 
                        placeholder="Search staff..." 
                        value={employeeSearchTerm}
                        onChange={(e) => setEmployeeSearchTerm(e.target.value)}
                        className="flex-1 bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-red-700/10"
                    />
                    <button 
                      onClick={toggleAllEmployees}
                      className="px-3 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-600"
                    >
                      {visibleEmployeeIds.size === allEmployees.length ? 'None' : 'All'}
                    </button>
                 </div>
                 <div className="max-h-[200px] overflow-y-auto grid grid-cols-2 gap-2">
                    {filteredEmployeeList.map(emp => {
                      const isSelected = visibleEmployeeIds.has(emp.id);
                      return (
                        <button
                          key={emp.id}
                          onClick={() => toggleEmployee(emp.id)}
                          className={`flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors border ${
                            isSelected ? 'bg-white border-red-200 text-red-800 shadow-sm' : 'bg-transparent border-transparent text-stone-500'
                          }`}
                        >
                          <span className="truncate mr-2">{emp.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-red-600" />}
                        </button>
                      );
                    })}
                 </div>
             </div>
         )}
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 print:p-0 print:w-full print:max-w-none">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-8 mt-auto print:hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-stone-400 text-sm">
            &copy; 2026 GAIL's Bakery. Internal Use Only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
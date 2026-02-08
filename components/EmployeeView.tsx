import React, { useMemo, useState, useRef, useEffect } from 'react';
import { EmployeeStats, Feedback } from '../types';
import { ArrowLeft, MessageCircle, Calendar, Trophy, TrendingUp, ChevronDown, Search, Check, X } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';

interface EmployeeViewProps {
  employee: EmployeeStats;
  feedback: Feedback[];
  onBack: () => void;
  periodLabel: string;
  allEmployees: { id: string; name: string }[];
  onSelectEmployee: (id: string) => void;
  initialSelectedDay?: string | null;
}

export const EmployeeView: React.FC<EmployeeViewProps> = ({ 
  employee, 
  feedback, 
  onBack, 
  periodLabel,
  allEmployees,
  onSelectEmployee,
  initialSelectedDay
}) => {
  // Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter State
  const [selectedDay, setSelectedDay] = useState<string | null>(initialSelectedDay || null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
        // Small timeout to allow render
        setTimeout(() => {
            searchInputRef.current?.focus();
        }, 50);
    } else {
        setSearchTerm(''); // Reset search on close
    }
  }, [isDropdownOpen]);

  // Reset day filter when employee changes
  useEffect(() => {
    setSelectedDay(null);
  }, [employee.id]);

  // Filter employees for dropdown
  const filteredEmployees = useMemo(() => {
    return allEmployees.filter(e => 
      e.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allEmployees, searchTerm]);

  // --- Filter Logic ---
  const filteredFeedback = useMemo(() => {
    if (!selectedDay) return feedback;
    // Map day names to getDay() index (Sun=0, Mon=1...)
    const dayMap: Record<string, number> = { 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6, 'Sun': 0 };
    const targetDayIndex = dayMap[selectedDay];
    
    return feedback.filter(f => {
        if (!f.date) return false;
        return f.date.getDay() === targetDayIndex;
    });
  }, [feedback, selectedDay]);

  // Derive stats specific to this view (using filtered data)
  const promoters = filteredFeedback.filter(f => f.nps >= 9).length;
  const passives = filteredFeedback.filter(f => f.nps >= 7 && f.nps <= 8).length;
  const detractors = filteredFeedback.filter(f => f.nps <= 6).length;

  // Standard sentiment colors consistent with Green/Yellow/Red benchmark request
  const pieData = [
    { name: 'Promoters', value: promoters, color: '#15803d' }, // Green
    { name: 'Passives', value: passives, color: '#eab308' }, // Yellow
    { name: 'Detractors', value: detractors, color: '#b91c1c' }, // Red
  ].filter(d => d.value > 0);

  const categoryScores = [
    { name: 'Service', score: filteredFeedback.reduce((acc, f) => acc + (f.service || 0), 0) / (filteredFeedback.filter(f => f.service).length || 1) },
    { name: 'Food', score: filteredFeedback.reduce((acc, f) => acc + (f.food || 0), 0) / (filteredFeedback.filter(f => f.food).length || 1) },
    { name: 'Drinks', score: filteredFeedback.reduce((acc, f) => acc + (f.drink || 0), 0) / (filteredFeedback.filter(f => f.drink).length || 1) },
    { name: 'Cleanliness', score: filteredFeedback.reduce((acc, f) => acc + (f.cleanliness || 0), 0) / (filteredFeedback.filter(f => f.cleanliness).length || 1) },
  ];

  // --- Day of Week Analysis (Always uses FULL feedback to show distribution) ---
  const dayStats = useMemo(() => {
    // Changed order to start on Monday
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    // Initialize buckets
    const buckets = days.map(d => ({ name: d, total: 0, promoters: 0, detractors: 0, score: 0 }));
    
    feedback.forEach(f => {
        if (!f.date) return;
        const jsDay = f.date.getDay(); // 0 is Sunday, 1 is Monday...
        // Adjust index so 1 (Mon) -> 0, ..., 0 (Sun) -> 6
        const dayIndex = (jsDay + 6) % 7;
        
        const bucket = buckets[dayIndex];
        bucket.total++;
        if (f.nps >= 9) bucket.promoters++;
        if (f.nps <= 6) bucket.detractors++;
    });

    // Calculate NPS for each day
    return buckets.map(b => ({
        ...b,
        score: b.total > 0 ? Math.round(((b.promoters - b.detractors) / b.total) * 100) : 0
    }));
  }, [feedback]);

  const bestDay = useMemo(() => {
    const validDays = dayStats.filter(d => d.total > 0);
    if (validDays.length === 0) return null;
    
    // Sort by Score descending, then by Total Count descending (tie-breaker)
    return [...validDays].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.total - a.total;
    })[0];
  }, [dayStats]);

  const selectedDayStats = useMemo(() => {
      if (!selectedDay) return null;
      return dayStats.find(d => d.name === selectedDay);
  }, [dayStats, selectedDay]);

  // --- Monthly Trend Analysis (Using Filtered Feedback) ---
  const monthlyTrend = useMemo(() => {
    const groupedByMonth = new Map<string, Feedback[]>();
    
    // Sort feedback by date first to ensure trend line is chronological
    const sortedFeedback = [...filteredFeedback].sort((a, b) => a.date.getTime() - b.date.getTime());

    sortedFeedback.forEach(f => {
      if (isNaN(f.date.getTime())) return;
      const monthKey = f.date.toLocaleString('default', { month: 'short', year: '2-digit' });
      const current = groupedByMonth.get(monthKey) || [];
      groupedByMonth.set(monthKey, [...current, f]);
    });

    return Array.from(groupedByMonth.entries()).map(([month, items]) => {
        let proms = 0;
        let dets = 0;
        items.forEach(f => {
            if (f.nps >= 9) proms++;
            else if (f.nps <= 6) dets++;
        });
        const nps = items.length > 0 ? Math.round(((proms - dets) / items.length) * 100) : 0;
        return { month, nps, total: items.length };
    });
  }, [filteredFeedback]);

  const npsGradientOffsets = useMemo(() => {
    if (monthlyTrend.length === 0) return { off55: 0, off50: 0 };
    
    const scores = monthlyTrend.map(d => d.nps);
    const max = Math.max(...scores);
    const min = Math.min(...scores);

    if (max === min) {
      if (max >= 55) return { off55: 1, off50: 1 };
      if (max >= 50) return { off55: 0, off50: 1 };
      return { off55: 0, off50: 0 };
    }

    const off55 = (max - 55) / (max - min);
    const off50 = (max - 50) / (max - min);

    return {
      off55: Math.max(0, Math.min(1, off55)),
      off50: Math.max(0, Math.min(1, off50))
    };
  }, [monthlyTrend]);

  const getCategoryColor = (score: number) => {
    if (score >= 4.5) return '#15803d'; // Green
    if (score >= 4.0) return '#eab308'; // Yellow
    return '#b91c1c'; // Red
  };

  const getScoreColor = (score: number) => {
    if (score >= 55) return '#15803d'; // green-700
    if (score >= 50) return '#eab308'; // yellow-500
    return '#b91c1c'; // red-700
  };

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

  const CustomCategoryTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const color = getCategoryColor(data.score);
      return (
        <div className="bg-white/95 backdrop-blur-sm p-4 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl min-w-[160px]">
          <p className="text-sm font-bold text-stone-800 mb-2">{data.name}</p>
          <div className="flex items-end gap-2">
             <span className="text-3xl font-black" style={{ color: color }}>
               {data.score.toFixed(2)}
             </span>
             <span className="text-sm text-stone-400 font-medium mb-1">/ 5.0</span>
          </div>
          <div className="mt-2 text-xs font-medium px-2 py-1 rounded bg-stone-50 text-stone-500 inline-block border border-stone-100">
             {data.score >= 4.5 ? 'Excellent' : data.score >= 4.0 ? 'Good' : 'Below Target'}
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomDayTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      if (data.total === 0) return null;
      
      const color = getScoreColor(data.score);
      return (
        <div className="bg-white/95 backdrop-blur-sm p-3 border border-stone-100 shadow-lg rounded-xl">
           <p className="text-sm font-bold text-stone-800 mb-1">{data.name}</p>
           <div className="flex items-center gap-2">
               <span className="text-xs font-medium text-stone-500">NPS:</span>
               <span className="font-bold" style={{ color }}>{data.score}</span>
           </div>
           <div className="text-xs text-stone-400 mt-1">
               {data.total} survey{data.total !== 1 ? 's' : ''}
           </div>
           <div className="text-[10px] text-red-500 mt-2 font-medium">Click to filter view</div>
        </div>
      );
    }
    return null;
  };

  const CustomTrendDot = (props: any) => {
    const { cx, cy, value } = props;
    let fill = '#b91c1c'; // Red < 50
    if (value >= 55) fill = '#15803d'; // Green >= 55
    else if (value >= 50) fill = '#eab308'; // Yellow 50-54

    return (
      <circle cx={cx} cy={cy} r={5} fill={fill} stroke="white" strokeWidth={2} />
    );
  };

  const CustomTrendTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white/95 backdrop-blur-sm p-3 border border-stone-100 shadow-lg rounded-xl">
          <p className="text-xs font-medium text-stone-500 mb-1">{label}</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getScoreColor(data.nps) }}></div>
            <p className="text-sm font-bold text-stone-800">
              NPS: {data.nps}
            </p>
          </div>
          <p className="text-xs text-stone-400 mt-1">{data.total} surveys</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center text-stone-500 hover:text-stone-800 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-3xl font-bold text-stone-800 hover:text-stone-600 transition-colors group text-left"
            >
              {employee.name}
              <ChevronDown className={`w-6 h-6 text-stone-400 group-hover:text-stone-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''} mt-1`} />
            </button>
            <span className="text-stone-400 text-3xl font-normal hidden sm:inline">
                : {periodLabel}{selectedDay ? ` (${getFullDayLabel(selectedDay)})` : ''}
            </span>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-stone-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 origin-top-left">
                <div className="p-3 border-b border-stone-100">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input 
                      ref={searchInputRef}
                      type="text" 
                      placeholder="Switch employee..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-700/10 text-stone-800"
                    />
                  </div>
                </div>
                <div className="max-h-[300px] overflow-y-auto p-1">
                  {filteredEmployees.map(emp => (
                    <button
                      key={emp.id}
                      onClick={() => {
                        onSelectEmployee(emp.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors ${
                        emp.id === employee.id 
                          ? 'bg-red-50 text-red-900 font-medium' 
                          : 'text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <span className="truncate mr-2">{emp.name}</span>
                      {emp.id === employee.id && <Check className="w-4 h-4 text-red-600 flex-shrink-0" />}
                    </button>
                  ))}
                  {filteredEmployees.length === 0 && (
                    <div className="p-4 text-center text-sm text-stone-400 italic">No matching staff found</div>
                  )}
                </div>
              </div>
            )}
          </div>
          <p className="text-stone-500 mt-1 flex items-center gap-2">
             <span className="sm:hidden text-stone-400 font-medium">
                {periodLabel}{selectedDay ? ` (${getFullDayLabel(selectedDay)})` : ''} • 
             </span>
             Shift Analysis & Feedback Report
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-stone-100 px-4 py-2 rounded-lg border border-stone-200">
          <span className="text-sm font-medium text-stone-600">
            {selectedDay ? `${selectedDay} Feedback:` : 'Associated Feedback:'}
          </span>
          <span className="font-bold text-stone-900">{filteredFeedback.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* NPS Breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col">
          <h3 className="text-lg font-bold text-stone-800 mb-4">NPS Composition</h3>
          <div className="flex-1 min-h-[200px] flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={pieData}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={80}
                   paddingAngle={5}
                   dataKey="value"
                 >
                   {pieData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
               </PieChart>
             </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            {pieData.map((entry) => (
              <div key={entry.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-xs text-stone-600 font-medium">{entry.name} ({entry.value})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Best Day / Selected Day Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col">
           <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
             <Calendar className="w-4 h-4 text-stone-400" />
             Weekly Rhythm
           </h3>
           
           {selectedDay && selectedDayStats ? (
             <div className="mb-6 bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg p-4 border border-stone-100">
                <div className="flex items-start justify-between">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Selected Day</span>
                        <div className="text-2xl font-black text-stone-800 mt-1">{selectedDayStats.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-bold text-stone-700">
                                NPS {selectedDayStats.score}
                            </span>
                            <span className="text-xs text-stone-400">• {selectedDayStats.total} surveys</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => setSelectedDay(null)}
                        className="bg-white p-2 rounded-full shadow-sm hover:bg-red-50 hover:text-red-600 text-stone-400 transition-colors"
                        title="Clear filter"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
             </div>
           ) : bestDay ? (
             <div className="mb-6 bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg p-4 border border-stone-100">
                <div className="flex items-start justify-between">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Best Performing Day</span>
                        <div className="text-2xl font-black text-stone-800 mt-1">{bestDay.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-bold text-stone-700">
                                NPS {bestDay.score}
                            </span>
                            <span className="text-xs text-stone-400">• {bestDay.total} surveys</span>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-full shadow-sm">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                    </div>
                </div>
             </div>
           ) : (
             <div className="mb-6 bg-stone-50 rounded-lg p-4 text-center">
                <span className="text-sm text-stone-400 italic">Not enough data for day analysis</span>
             </div>
           )}

           <div className="flex-1 min-h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={dayStats} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#a8a29e'}} interval={0} />
                    <RechartsTooltip cursor={{fill: '#fafaf9'}} content={<CustomDayTooltip />} />
                    <Bar 
                        dataKey="score" 
                        radius={[4, 4, 0, 0]} 
                        onClick={(data) => setSelectedDay(selectedDay === data.name ? null : data.name)}
                        style={{ cursor: 'pointer' }}
                    >
                        {dayStats.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={entry.total > 0 ? getScoreColor(entry.score) : '#f5f5f4'} 
                                fillOpacity={selectedDay ? (selectedDay === entry.name ? 1 : 0.3) : (entry.name === bestDay?.name ? 1 : 0.6)}
                            />
                        ))}
                    </Bar>
                 </BarChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Category Scores */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col">
          <h3 className="text-lg font-bold text-stone-800 mb-4">Category Ratings</h3>
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryScores} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e7e5e4" />
                <XAxis type="number" domain={[0, 5]} stroke="#78716c" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#78716c" fontSize={12} />
                <RechartsTooltip cursor={{fill: 'transparent'}} content={<CustomCategoryTooltip />} />
                <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={20}>
                    {categoryScores.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getCategoryColor(entry.score)} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* NPS Trend Over Time (Full Width) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col col-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-stone-400" />
            NPS Trend Over Time
          </h3>
          <div className="h-64 w-full">
            {monthlyTrend.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrend} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                    <linearGradient id="npsEmployeeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#15803d" />
                        <stop offset={`${npsGradientOffsets.off55 * 100}%`} stopColor="#15803d" />
                        <stop offset={`${npsGradientOffsets.off55 * 100}%`} stopColor="#eab308" />
                        <stop offset={`${npsGradientOffsets.off50 * 100}%`} stopColor="#eab308" />
                        <stop offset={`${npsGradientOffsets.off50 * 100}%`} stopColor="#b91c1c" />
                        <stop offset="100%" stopColor="#b91c1c" />
                    </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                    <XAxis dataKey="month" stroke="#78716c" fontSize={12} />
                    <YAxis domain={[-100, 100]} stroke="#78716c" fontSize={12} />
                    <RechartsTooltip content={<CustomTrendTooltip />} />
                    <Line 
                    type="monotone" 
                    dataKey="nps" 
                    stroke="url(#npsEmployeeGradient)" 
                    strokeWidth={3} 
                    dot={<CustomTrendDot />}
                    activeDot={{ r: 7, strokeWidth: 0, fill: '#44403c' }} 
                    />
                </LineChart>
                </ResponsiveContainer>
            ) : (
                <div className="h-full flex items-center justify-center text-stone-400 text-sm italic">
                    Not enough data to show trend over time
                </div>
            )}
          </div>
        </div>
      </div>

      {/* Raw Feedback List */}
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-6 border-b border-stone-200 flex justify-between items-center">
          <h3 className="text-lg font-bold text-stone-800">
            {selectedDay ? `${selectedDay} Comments` : 'Customer Comments'}
          </h3>
          {selectedDay && (
              <span className="text-xs font-medium text-stone-400 bg-stone-100 px-2 py-1 rounded-full">
                  Filtered by Day
              </span>
          )}
        </div>
        <div className="divide-y divide-stone-100">
          {filteredFeedback.map((item) => (
            <div key={item.id} className="p-6 hover:bg-stone-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                   <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                      item.nps >= 9 ? 'bg-green-100 text-green-700' :
                      item.nps >= 7 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-700'
                   }`}>
                     {item.nps}
                   </span>
                   <span className="text-sm text-stone-500">
                     {item.date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} at {item.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                   </span>
                </div>
                {item.comment ? <MessageCircle className="w-4 h-4 text-stone-400" /> : null}
              </div>
              
              {item.comment ? (
                <p className="text-stone-700 text-sm leading-relaxed mt-2 italic">"{item.comment}"</p>
              ) : (
                <p className="text-stone-400 text-xs italic mt-2">No written comment provided.</p>
              )}
              
              <div className="mt-3 flex gap-4 text-xs text-stone-400">
                 <span>Service: <span className="text-stone-700 font-medium">{item.service || '-'}</span></span>
                 <span>Food: <span className="text-stone-700 font-medium">{item.food || '-'}</span></span>
                 <span>Cleanliness: <span className="text-stone-700 font-medium">{item.cleanliness || '-'}</span></span>
              </div>
            </div>
          ))}
          {filteredFeedback.length === 0 && (
             <div className="p-8 text-center text-stone-500">
               No feedback found {selectedDay ? `for ${selectedDay}s` : 'during this employee\'s shifts'}.
             </div>
          )}
        </div>
      </div>

    </div>
  );
};
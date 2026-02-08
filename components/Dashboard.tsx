import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { Users, Star, TrendingUp, MessageSquare, ChevronRight, Calendar, Trophy, X } from 'lucide-react';
import { EmployeeStats, Feedback, ShineData } from '../types';

interface DashboardProps {
  stats: EmployeeStats[];
  overallNPS: number;
  totalFeedback: number;
  onSelectEmployee: (id: string) => void;
  monthlyNPS: { month: string; nps: number }[];
  shineData?: ShineData[];
  dayStats: { name: string; total: number; score: number; promoters: number; detractors: number; }[];
  selectedDay: string | null;
  onSelectDay: (day: string | null) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  stats, 
  overallNPS, 
  totalFeedback, 
  onSelectEmployee, 
  monthlyNPS, 
  shineData = [],
  dayStats,
  selectedDay,
  onSelectDay
}) => {
  
  const getScoreColor = (score: number) => {
    if (score >= 55) return '#15803d'; // green-700
    if (score >= 50) return '#eab308'; // yellow-500
    return '#b91c1c'; // red-700
  };

  const getScoreTextColor = (score: number) => {
    if (score >= 55) return 'text-green-700';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-700';
  };

  const getBadgeStyle = (score: number) => {
    if (score >= 55) return 'bg-green-100 text-green-800';
    if (score >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  // Shine Benchmarks: >=90 Green, 80-89 Yellow, <=79 Red
  const getShineColor = (score: number) => {
    if (score >= 90) return '#15803d'; // green-700
    if (score >= 80) return '#eab308'; // yellow-500
    return '#b91c1c'; // red-700
  };

  const getShineTextColor = (score: number) => {
    if (score >= 90) return 'text-green-700';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-700';
  };

  // Calculate best day for the dashboard card
  const bestDay = useMemo(() => {
    const validDays = dayStats.filter(d => d.total > 0);
    if (validDays.length === 0) return null;
    
    return [...validDays].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.total - a.total;
    })[0];
  }, [dayStats]);

  const selectedDayStats = useMemo(() => {
      if (!selectedDay) return null;
      return dayStats.find(d => d.name === selectedDay);
  }, [dayStats, selectedDay]);

  // Process SHINE Data
  const averageShine = useMemo(() => {
    if (shineData.length === 0) return null;
    
    const sums = {
      overall: 0, friendliness: 0, recommendation: 0, drink: 0, food: 0, efficiency: 0, cleanliness: 0
    };
    
    shineData.forEach(d => {
      sums.overall += d.overall;
      sums.friendliness += d.friendliness;
      sums.recommendation += d.recommendation;
      sums.drink += d.drink;
      sums.food += d.food;
      sums.efficiency += d.efficiency;
      sums.cleanliness += d.cleanliness;
    });

    const count = shineData.length;
    return {
      overall: (sums.overall / count).toFixed(1),
      friendliness: (sums.friendliness / count).toFixed(1),
      recommendation: (sums.recommendation / count).toFixed(1),
      drink: (sums.drink / count).toFixed(1),
      food: (sums.food / count).toFixed(1),
      efficiency: (sums.efficiency / count).toFixed(1),
      cleanliness: (sums.cleanliness / count).toFixed(1),
    };
  }, [shineData]);

  const shineChartData = averageShine ? [
    { name: 'Friendliness', score: parseFloat(averageShine.friendliness) / 20 },
    { name: 'Recommendations', score: parseFloat(averageShine.recommendation) / 20 },
    { name: 'Drink', score: parseFloat(averageShine.drink) / 20 },
    { name: 'Food', score: parseFloat(averageShine.food) / 20 },
    { name: 'Efficiency', score: parseFloat(averageShine.efficiency) / 20 },
    { name: 'Cleanliness', score: parseFloat(averageShine.cleanliness) / 20 },
  ] : [];

  const shineTrendData = useMemo(() => {
      return [...shineData]
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map(d => ({
          date: d.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: '2-digit' }),
          score: parseFloat(d.overall.toFixed(1))
        }));
  }, [shineData]);

  const shineGradientOffsets = useMemo(() => {
    if (shineTrendData.length === 0) return { off90: 0, off80: 0 };
    
    const scores = shineTrendData.map(d => d.score);
    const max = Math.max(...scores);
    const min = Math.min(...scores);

    if (max === min) {
      if (max >= 90) return { off90: 1, off80: 1 };
      if (max >= 80) return { off90: 0, off80: 1 };
      return { off90: 0, off80: 0 };
    }

    const off90 = (max - 90) / (max - min);
    const off80 = (max - 80) / (max - min);

    return {
      off90: Math.max(0, Math.min(1, off90)),
      off80: Math.max(0, Math.min(1, off80))
    };
  }, [shineTrendData]);

  const npsGradientOffsets = useMemo(() => {
    if (monthlyNPS.length === 0) return { off55: 0, off50: 0 };
    
    const scores = monthlyNPS.map(d => d.nps);
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
  }, [monthlyNPS]);

  const CustomDot = (props: any) => {
    const { cx, cy, value } = props;
    let fill = '#b91c1c'; // Red < 50
    if (value >= 55) fill = '#15803d'; // Green >= 55
    else if (value >= 50) fill = '#eab308'; // Yellow 50-54

    return (
      <circle cx={cx} cy={cy} r={5} fill={fill} stroke="white" strokeWidth={2} />
    );
  };

  const CustomShineDot = (props: any) => {
    const { cx, cy, value } = props;
    let fill = '#b91c1c'; // Red < 80
    if (value >= 90) fill = '#15803d'; // Green >= 90
    else if (value >= 80) fill = '#eab308'; // Yellow 80-89

    return (
      <circle cx={cx} cy={cy} r={5} fill={fill} stroke="white" strokeWidth={2} />
    );
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-stone-100 shadow-lg rounded-lg">
          <p className="text-xs font-medium text-stone-500 mb-1">{label}</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getScoreColor(payload[0].value) }}></div>
            <p className="text-sm font-bold text-stone-800">
              NPS Score: {payload[0].value}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomShineTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const score = Number(data.value);
      const originalScore = score * 20; // Convert 0-5 back to 0-100 for logic
      const color = getShineColor(originalScore);
      const labelText = data.payload.name || label;
      
      let statusText = 'Focus Area';
      let statusBg = 'bg-red-50 text-red-700 border-red-100';
      if (originalScore >= 90) {
        statusText = 'Outstanding';
        statusBg = 'bg-green-50 text-green-700 border-green-100';
      } else if (originalScore >= 80) {
        statusText = 'Good';
        statusBg = 'bg-yellow-50 text-yellow-700 border-yellow-100';
      }

      return (
        <div className="bg-white/95 backdrop-blur-sm p-4 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl">
          <div className="mb-2 pb-2 border-b border-stone-100">
            <span className="font-bold text-stone-800 text-sm whitespace-nowrap">{labelText}</span>
          </div>
          
          <div className="flex items-end justify-between gap-6">
             <div>
                <p className="text-xs text-stone-400 font-medium mb-1">Score</p>
                <div className="text-2xl font-black leading-none" style={{ color: color }}>
                   {score.toFixed(1)} <span className="text-sm text-stone-400 font-medium">/ 5</span>
                </div>
             </div>
             
             <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border whitespace-nowrap ${statusBg}`}>
                {statusText}
             </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomBarTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white/95 backdrop-blur-sm p-4 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl min-w-[200px]">
          <div className="flex justify-between items-start mb-3 pb-2 border-b border-stone-100">
            <span className="font-bold text-stone-800 text-sm">{data.name}</span>
          </div>
          
          <div className="space-y-2.5">
            <div className="flex justify-between items-center gap-6">
               <span className="text-xs font-medium text-stone-500">NPS Score</span>
               <span className={`text-sm font-bold px-2 py-0.5 rounded-md shadow-sm ${getBadgeStyle(data.npsScore)}`}>
                  {data.npsScore}
               </span>
            </div>
            
            <div className="flex justify-between items-center gap-6">
               <span className="text-xs font-medium text-stone-500">Total Surveys</span>
               <div className="flex items-center gap-1.5 bg-stone-50 px-2 py-0.5 rounded-md border border-stone-100">
                  <MessageSquare className="w-3 h-3 text-stone-400" />
                  <span className="text-xs font-bold text-stone-700">{data.totalSurveys}</span>
               </div>
            </div>

            <div className="flex justify-between items-center gap-6">
               <span className="text-xs font-medium text-stone-500">Avg Service</span>
               <div className="flex items-center gap-1.5 bg-stone-50 px-2 py-0.5 rounded-md border border-stone-100">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-stone-700">{data.avgService}</span>
               </div>
            </div>
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
           <div className="text-[10px] text-red-500 mt-2 font-medium">Click to filter dashboard</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-500">Overall NPS</p>
              <h3 className={`text-3xl font-bold mt-2 ${getScoreTextColor(overallNPS)}`}>
                {overallNPS}
              </h3>
            </div>
            <div className="p-2 bg-stone-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-stone-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-500">Total Responses</p>
              <h3 className="text-3xl font-bold mt-2 text-stone-800">{totalFeedback}</h3>
            </div>
            <div className="p-2 bg-orange-50 rounded-lg">
              <MessageSquare className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-500">Active Staff</p>
              <h3 className="text-3xl font-bold mt-2 text-stone-800">{stats.length}</h3>
            </div>
            <div className="p-2 bg-stone-100 rounded-lg">
              <Users className="w-6 h-6 text-stone-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
           <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-500">Avg Service</p>
              <h3 className="text-3xl font-bold mt-2 text-stone-800">
                {(stats.reduce((acc, curr) => acc + curr.avgService, 0) / (stats.length || 1)).toFixed(1)}
                <span className="text-sm text-stone-400 font-normal ml-1">/ 5.0</span>
              </h3>
            </div>
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Employee Performance Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h3 className="text-lg font-bold text-stone-800 mb-4">Employee NPS Performance</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e7e5e4" />
                <XAxis type="number" domain={[-100, 100]} stroke="#78716c" fontSize={12} />
                <YAxis dataKey="name" type="category" width={80} stroke="#78716c" fontSize={12} />
                <RechartsTooltip 
                  cursor={{fill: 'transparent'}}
                  content={<CustomBarTooltip />}
                />
                <Bar dataKey="npsScore" radius={[0, 4, 4, 0]} barSize={20} cursor="pointer" onClick={(data) => onSelectEmployee(data.id)}>
                  {stats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getScoreColor(entry.npsScore)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-stone-400 mt-2 text-center">Click a bar to view employee details</p>
        </div>

        {/* Weekly Rhythm Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col">
           <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
             <Calendar className="w-4 h-4 text-stone-400" />
             Weekly Rhythm
           </h3>
           
           {selectedDay && selectedDayStats ? (
             <div className="mb-6 bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg p-4 border border-stone-100 animate-in fade-in zoom-in-95">
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
                        onClick={() => onSelectDay(null)}
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
                        onClick={(data) => onSelectDay(selectedDay === data.name ? null : data.name)}
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

        {/* NPS Trend */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 lg:col-span-2">
          <h3 className="text-lg font-bold text-stone-800 mb-4">NPS Trend Over Time</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyNPS} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="npsGradient" x1="0" y1="0" x2="0" y2="1">
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
                <RechartsTooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="nps" 
                  stroke="url(#npsGradient)" 
                  strokeWidth={3} 
                  dot={<CustomDot />}
                  activeDot={{ r: 7, strokeWidth: 0, fill: '#44403c' }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Shine Data Section */}
      {averageShine && (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col justify-center">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-stone-800">SHINE Performance</h3>
                  <div className="flex items-baseline gap-1">
                      <span className={`text-lg font-bold ${getShineTextColor(parseFloat(averageShine.overall))}`}>{averageShine.overall}%</span>
                      <span className="text-xs text-stone-500 font-medium">Avg Overall</span>
                  </div>
               </div>
               
               <div className="h-80 w-full flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={shineChartData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e7e5e4" />
                      <XAxis 
                        type="number" 
                        domain={[0, 5]} 
                        ticks={[0, 1, 2, 3, 4, 5]} 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 10, fill: '#78716c'}} 
                      />
                      <YAxis dataKey="name" type="category" width={120} stroke="#78716c" fontSize={11} />
                      <RechartsTooltip cursor={{fill: 'transparent'}} content={<CustomShineTooltip />} />
                      <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={32}>
                         {shineChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getShineColor(entry.score * 20)} fillOpacity={0.9} />
                         ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
               <div className="flex items-center justify-between mb-4">
                   <h3 className="text-lg font-bold text-stone-800">SHINE Score Trend</h3>
               </div>
               <div className="h-80">
                   <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={shineTrendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="shineGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#15803d" />
                            <stop offset={`${shineGradientOffsets.off90 * 100}%`} stopColor="#15803d" />
                            <stop offset={`${shineGradientOffsets.off90 * 100}%`} stopColor="#eab308" />
                            <stop offset={`${shineGradientOffsets.off80 * 100}%`} stopColor="#eab308" />
                            <stop offset={`${shineGradientOffsets.off80 * 100}%`} stopColor="#b91c1c" />
                            <stop offset="100%" stopColor="#b91c1c" />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="date" stroke="#9ca3af" fontSize={10} tickMargin={10} />
                        <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#78716c'}} width={30} />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <RechartsTooltip content={<CustomShineTooltip />} />
                        <Line 
                          type="monotone" 
                          dataKey="score" 
                          stroke="url(#shineGradient)" 
                          strokeWidth={3} 
                          dot={<CustomShineDot />}
                          activeDot={{ r: 7, strokeWidth: 0, fill: '#44403c' }} 
                        />
                      </LineChart>
                   </ResponsiveContainer>
               </div>
            </div>
         </div>
      )}

      {/* Employee Table */}
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-6 border-b border-stone-200">
          <h3 className="text-lg font-bold text-stone-800">Shift Performance Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-stone-600">
            <thead className="bg-stone-50 text-xs uppercase font-medium text-stone-500">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Associated Feedback</th>
                <th className="px-6 py-4">NPS</th>
                <th className="px-6 py-4">Avg Service</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {stats.map((stat) => (
                <tr key={stat.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-stone-900">{stat.name}</td>
                  <td className="px-6 py-4">{stat.totalSurveys}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${getBadgeStyle(stat.npsScore)}`}>
                      {stat.npsScore}
                    </span>
                  </td>
                  <td className="px-6 py-4">{stat.avgService}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => onSelectEmployee(stat.id)}
                      className="text-stone-600 hover:text-stone-900 font-medium hover:underline"
                    >
                      View Analysis
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
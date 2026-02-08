import React, { useState } from 'react';
import { ArrowLeft, Printer, Trophy, Medal, Coffee, Utensils, Star, Sparkles, Zap, Heart, User, Users, Calendar, UsersRound } from 'lucide-react';
import { EmployeeStats } from '../types';

interface LeaderboardViewProps {
  stats: EmployeeStats[];
  duoStats?: EmployeeStats[];
  trioStats?: EmployeeStats[];
  onBack: () => void;
  currentPeriodLabel: string;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({ stats, duoStats = [], trioStats = [], onBack, currentPeriodLabel }) => {
  const [leaderboardType, setLeaderboardType] = useState<'INDIVIDUAL' | 'DUO' | 'TRIO'>('INDIVIDUAL');
  
  const handlePrint = () => {
    window.print();
  };

  const currentStats = 
    leaderboardType === 'INDIVIDUAL' ? stats : 
    leaderboardType === 'DUO' ? duoStats : 
    trioStats;

  const getInitials = (name: string) => {
    // For duo/trio/team names which contain " & ", we split by " & "
    if (name.includes('&')) {
       const parts = name.split(' & ');
       // If more than 3 people, show +Count instead of all initials to prevent overflow if names are long, 
       // but typically we can fit 4 initials like "A+B+C+D"
       return parts.map(p => p.split(' ').map(n => n[0]).join('').substring(0,1).toUpperCase()).join('+');
    }
    return name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
  };

  const getLeaderboardTitle = () => {
      switch (leaderboardType) {
          case 'DUO': return 'Duo Performance Leaderboard';
          case 'TRIO': return 'Trio Performance Leaderboard';
          default: return 'Customer Experience Leaderboard';
      }
  };

  const getActiveLabel = () => {
      switch (leaderboardType) {
          case 'DUO': return 'Active Pairs';
          case 'TRIO': return 'Active Trios';
          default: return 'Active Staff';
      }
  };

  const getColumnHeader = () => {
      switch (leaderboardType) {
          case 'DUO': return 'Duo';
          case 'TRIO': return 'Trio';
          default: return 'Employee';
      }
  };

  // Helper component for consistent stat rendering
  const StatItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: number }) => (
    <div className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-stone-50 transition-colors">
        <span className="text-[9px] uppercase text-stone-400 font-bold mb-1.5 flex items-center gap-1.5 tracking-wider whitespace-nowrap">
            <Icon className="w-3 h-3 text-stone-300" /> {label}
        </span>
        <span className="font-bold text-stone-700 text-lg tabular-nums">
            {value > 0 ? value.toFixed(1) : '-'}
        </span>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[90rem] mx-auto">
      {/* Header / Navigation - Hidden when printing */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 print:hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            <button 
            onClick={onBack}
            className="flex items-center text-stone-500 hover:text-stone-800 transition-colors group"
            >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
            </button>
            
            {/* Type Toggle */}
            <div className="flex bg-stone-100 p-1 rounded-lg border border-stone-200 overflow-x-auto w-full sm:w-auto">
                <button
                    onClick={() => setLeaderboardType('INDIVIDUAL')}
                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                        leaderboardType === 'INDIVIDUAL' 
                        ? 'bg-white text-stone-900 shadow-sm' 
                        : 'text-stone-500 hover:text-stone-700'
                    }`}
                >
                    <User className="w-3.5 h-3.5" />
                    Individual
                </button>
                <button
                    onClick={() => setLeaderboardType('DUO')}
                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                        leaderboardType === 'DUO' 
                        ? 'bg-white text-stone-900 shadow-sm' 
                        : 'text-stone-500 hover:text-stone-700'
                    }`}
                >
                    <Users className="w-3.5 h-3.5" />
                    Duos
                </button>
                <button
                    onClick={() => setLeaderboardType('TRIO')}
                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                        leaderboardType === 'TRIO' 
                        ? 'bg-white text-stone-900 shadow-sm' 
                        : 'text-stone-500 hover:text-stone-700'
                    }`}
                >
                    <UsersRound className="w-3.5 h-3.5" />
                    Trios
                </button>
            </div>
        </div>
        
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors shadow-sm ml-auto sm:ml-0"
        >
          <Printer className="w-4 h-4" />
          <span className="hidden sm:inline">Print Leaderboard</span>
          <span className="sm:hidden">Print</span>
        </button>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden print:shadow-none print:border-none">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 p-8 text-white relative overflow-hidden print:bg-stone-100 print:text-black print:border-b print:border-stone-300">
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
             <div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm print:hidden">
                       <Trophy className="w-8 h-8 text-yellow-400" />
                    </div>
                    <Trophy className="hidden print:block w-8 h-8 text-black" />
                    <h1 className="text-3xl font-bold tracking-tight">
                        {getLeaderboardTitle()}
                    </h1>
                </div>
                <div className="flex items-center gap-2 text-stone-400 print:text-stone-600">
                   <Calendar className="w-4 h-4" />
                   <span className="text-sm font-medium">{currentPeriodLabel}</span>
                </div>
             </div>
             <div className="text-left sm:text-right bg-white/5 p-4 rounded-xl backdrop-blur-sm print:bg-transparent print:p-0">
                <div className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">
                    {getActiveLabel()}
                </div>
                <div className="text-3xl font-bold font-mono">{currentStats.length}</div>
             </div>
          </div>
          {/* Decorative background element */}
          <Sparkles className="absolute -top-4 -right-4 w-64 h-64 text-white opacity-5 pointer-events-none print:hidden" />
        </div>

        {/* List */}
        <div className="p-6 sm:p-8 space-y-4">
            {/* Header Row for large screens */}
            <div className="hidden lg:flex items-center text-[10px] uppercase tracking-wider font-bold text-stone-400 px-6 pb-2 gap-6">
                <div className="w-1/4">{getColumnHeader()}</div>
                <div className="flex-1 grid grid-cols-6 text-center">
                    <div>Service</div>
                    <div>Food</div>
                    <div>Drinks</div>
                    <div>Cleanliness</div>
                    <div>Speed</div>
                    <div>Rec.</div>
                </div>
                <div className="w-[100px] text-center">NPS</div>
            </div>

            {currentStats.length === 0 && (
                <div className="text-center py-12 text-stone-500">
                    <div className="bg-stone-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                         <Users className="w-6 h-6 text-stone-400" />
                    </div>
                    <p>No data available for this period.</p>
                </div>
            )}

            {currentStats.map((stat, index) => {
                let rankStyle = 'bg-white border-stone-100 hover:border-stone-300';
                let rankBadge = <span className="text-stone-300 font-bold text-lg w-8 text-center">#{index + 1}</span>;
                let containerClass = 'border-b last:border-0 pb-4 mb-4 lg:mb-2 lg:pb-0 lg:border-none lg:rounded-xl lg:border lg:border-stone-100 lg:px-6 lg:py-3 hover:shadow-md transition-shadow';
                let profileSize = 'h-12 w-12 text-sm';
                
                // Top 3 Styling only if they have data
                if (index === 0 && stat.totalSurveys > 0) {
                    rankStyle = 'bg-gradient-to-r from-yellow-50/40 to-white border-yellow-200 shadow-sm print:bg-white print:border-stone-200';
                    rankBadge = <div className="w-8 flex justify-center"><Trophy className="w-6 h-6 text-yellow-600 fill-yellow-100" /></div>;
                    containerClass = `px-6 py-6 rounded-xl border ${rankStyle} mb-6 transform scale-[1.01] print:scale-100`;
                    profileSize = 'h-14 w-14 text-base';
                } else if (index === 1 && stat.totalSurveys > 0) {
                    rankStyle = 'bg-gradient-to-r from-stone-100/50 to-white border-stone-300';
                    rankBadge = <div className="w-8 flex justify-center"><Medal className="w-5 h-5 text-stone-500 fill-stone-200" /></div>;
                    containerClass = `px-6 py-4 rounded-xl border ${rankStyle} mb-3`;
                } else if (index === 2 && stat.totalSurveys > 0) {
                    rankStyle = 'bg-gradient-to-r from-orange-50/40 to-white border-orange-200';
                    rankBadge = <div className="w-8 flex justify-center"><Medal className="w-5 h-5 text-orange-500 fill-orange-100" /></div>;
                    containerClass = `px-6 py-4 rounded-xl border ${rankStyle} mb-3`;
                }

                return (
                    <div 
                        key={stat.id} 
                        className={`flex flex-col lg:flex-row items-center gap-6 ${containerClass}`}
                    >
                        {/* Rank & Profile (Left) */}
                        <div className="flex items-center gap-4 w-full lg:w-1/4">
                            <div className="flex-shrink-0 flex items-center justify-center">{rankBadge}</div>
                            {leaderboardType === 'INDIVIDUAL' && (
                                <div className={`${profileSize} rounded-full bg-white flex items-center justify-center text-stone-700 font-bold border-2 border-stone-100 shadow-sm print:border-stone-300 shrink-0`}>
                                    {getInitials(stat.name)}
                                </div>
                            )}
                            <div className="min-w-0 flex-1">
                                <h4 className={`font-bold text-stone-800 leading-snug ${leaderboardType === 'INDIVIDUAL' ? 'truncate' : 'text-sm'}`} title={stat.name}>
                                    {stat.name}
                                </h4>
                                <p className="text-xs text-stone-500 font-medium mt-0.5">{stat.totalSurveys} surveys</p>
                            </div>
                        </div>

                        {/* Stats Grid (Middle - 6 metrics) */}
                        <div className="w-full lg:flex-1">
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4">
                                <StatItem icon={Star} label="Service" value={stat.avgService} />
                                <StatItem icon={Utensils} label="Food" value={stat.avgFood} />
                                <StatItem icon={Coffee} label="Drink" value={stat.avgDrink} />
                                <StatItem icon={Sparkles} label="Cleanliness" value={stat.avgCleanliness} />
                                <StatItem icon={Zap} label="Speed" value={stat.avgEfficiency} />
                                <StatItem icon={Heart} label="Recs" value={stat.avgRecommendation} />
                            </div>
                        </div>

                        {/* NPS Score (Right) */}
                        <div className="w-full lg:w-[100px] flex lg:flex-col items-center justify-between lg:justify-center text-right border-t border-stone-100 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                            <span className="lg:hidden text-xs font-bold text-stone-400 uppercase tracking-widest">NPS Score</span>
                            <div>
                                <span className={`text-3xl font-black ${stat.totalSurveys > 0 ? 'text-stone-800' : 'text-stone-300'} block text-center`}>
                                    {stat.totalSurveys > 0 ? stat.npsScore : '-'}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        
        {/* Footer for print */}
        <div className="hidden print:block text-center text-xs text-stone-400 p-8 border-t border-stone-100">
            Generated by GAIL's TeamPulse Analytics • {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};
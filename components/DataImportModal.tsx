import React, { useState, useEffect } from 'react';
import { Upload, X, FileSpreadsheet, AlertCircle, Lock, Sparkles } from 'lucide-react';

interface DataImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (feedbackText: string, shiftText: string, shineText: string) => void;
  defaultFeedback?: string;
  defaultShifts?: string;
  defaultShine?: string;
}

export const DataImportModal: React.FC<DataImportModalProps> = ({ 
  isOpen, 
  onClose, 
  onImport,
  defaultFeedback,
  defaultShifts,
  defaultShine
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [activeTab, setActiveTab] = useState<'feedback' | 'shifts' | 'shine'>('feedback');
  const [feedbackText, setFeedbackText] = useState('');
  const [shiftText, setShiftText] = useState('');
  const [shineText, setShineText] = useState('');

  // Reset state and populate defaults when modal opens/closes
  useEffect(() => {
    if (isOpen) {
        // Pre-fill fields with current data
        setFeedbackText(defaultFeedback || '');
        setShiftText(defaultShifts || '');
        setShineText(defaultShine || '');
    } else {
      // Small delay to reset auth/tabs after animation closes
      const timer = setTimeout(() => {
        setIsAuthenticated(false);
        setPassword('');
        setError('');
        setActiveTab('feedback');
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, defaultFeedback, defaultShifts, defaultShine]);

  if (!isOpen) return null;

  const handlePasswordSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (password === '1065') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleImport = () => {
    onImport(feedbackText, shiftText, shineText);
    onClose();
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-sm flex flex-col overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-200 flex justify-between items-center bg-stone-50">
            <h2 className="text-lg font-bold text-stone-800 flex items-center gap-2">
              <Lock className="w-4 h-4 text-stone-500" />
              Admin Access
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full text-stone-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <form onSubmit={handlePasswordSubmit} className="p-6">
            <p className="text-sm text-stone-500 mb-4">Please enter the administrator password to import new data.</p>
            <div className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-stone-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition-all"
                  placeholder="Enter password"
                  autoFocus
                />
                {error && <p className="text-red-600 text-xs mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {error}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-red-700 text-white py-2.5 rounded-lg hover:bg-red-800 font-medium text-sm shadow-sm transition-colors"
              >
                Unlock Import
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex justify-between items-center bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <FileSpreadsheet className="w-5 h-5 text-red-700" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-800">Import Data</h2>
              <p className="text-xs text-stone-500">Copy and paste data directly from Google Sheets or Excel.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full text-stone-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-stone-200">
          <button
            onClick={() => setActiveTab('feedback')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'feedback' 
                ? 'border-red-700 text-red-700 bg-red-50/30' 
                : 'border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-50'
            }`}
          >
            1. Survey Data
          </button>
          <button
            onClick={() => setActiveTab('shifts')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'shifts' 
                ? 'border-red-700 text-red-700 bg-red-50/30' 
                : 'border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-50'
            }`}
          >
            2. Shift Data
          </button>
          <button
            onClick={() => setActiveTab('shine')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'shine' 
                ? 'border-red-700 text-red-700 bg-red-50/30' 
                : 'border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-50'
            }`}
          >
            3. Shine Data
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'feedback' ? (
            <div className="space-y-4 h-full flex flex-col">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 text-sm text-blue-800">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>
                  Copy all columns including headers from your <strong>Feedback/Survey</strong> sheet. 
                  <br/>Required columns: <em>Survey ID, Visit Date, Visit Time, NPS Rating (0-10)</em>.
                </p>
              </div>
              <textarea
                className="flex-1 w-full border border-stone-300 rounded-lg p-4 font-mono text-xs focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none resize-none bg-stone-50 text-stone-900"
                placeholder={`Survey ID\tBakery\tVisit Date\tVisit Time\tNPS Rating (0-10)...\n348875\tMarlow\t26/01/2026\t11:00\t10...`}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                spellCheck={false}
              />
            </div>
          ) : activeTab === 'shifts' ? (
             <div className="space-y-4 h-full flex flex-col">
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex gap-3 text-sm text-amber-800">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>
                  Copy all columns including headers from your <strong>Shift Data</strong> sheet. 
                  <br/>Required columns: <em>Date, Name, Shift Start, Shift End</em>.
                </p>
              </div>
              <textarea
                className="flex-1 w-full border border-stone-300 rounded-lg p-4 font-mono text-xs focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none resize-none bg-stone-50 text-stone-900"
                placeholder={`Date\tDay\tName\tShift Start\tShift End\n01/09/25\tMonday\tMya Hanif\t05:23\t13:01...`}
                value={shiftText}
                onChange={(e) => setShiftText(e.target.value)}
                spellCheck={false}
              />
            </div>
          ) : (
            <div className="space-y-4 h-full flex flex-col">
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 flex gap-3 text-sm text-purple-800">
                <Sparkles className="w-5 h-5 flex-shrink-0" />
                <p>
                  Copy all columns from your <strong>SHINE Data</strong> sheet.
                  <br/>Required columns: <em>DATE, Overall, Friendliness, Recommendation, Drink, Food, Efficiency, Cleanliness</em>.
                </p>
              </div>
              <textarea
                className="flex-1 w-full border border-stone-300 rounded-lg p-4 font-mono text-xs focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none resize-none bg-stone-50 text-stone-900"
                placeholder={`DATE\tOverall\tFriendliness\tRecommendation\tDrink\tFood\tEfficiency\tCleanliness\n30/09/25\t0.907\t0.93\t0.877\t0.853\t0.934\t0.93\t0.916...`}
                value={shineText}
                onChange={(e) => setShineText(e.target.value)}
                spellCheck={false}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex justify-between items-center">
          <div className="text-xs text-stone-500">
             {feedbackText ? '✓ Surveys' : 'Waiting Surveys'} • {shiftText ? '✓ Shifts' : 'Waiting Shifts'} • {shineText ? '✓ Shine Data' : 'Waiting Shine'}
          </div>
          <div className="flex gap-3">
             <button 
               onClick={onClose}
               className="px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-200 rounded-lg transition-colors"
             >
               Cancel
             </button>
             <button 
               onClick={handleImport}
               disabled={!feedbackText && !shiftText && !shineText}
               className="px-4 py-2 text-sm font-medium text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
             >
               <Upload className="w-4 h-4" />
               Process & Update
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
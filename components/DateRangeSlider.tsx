import React, { useCallback, useEffect, useState, useRef } from 'react';

interface DateRangeSliderProps {
  minDate: Date;
  maxDate: Date;
  initialStart: Date;
  initialEnd: Date;
  onChange: (start: Date, end: Date) => void;
}

export const DateRangeSlider: React.FC<DateRangeSliderProps> = ({
  minDate,
  maxDate,
  initialStart,
  initialEnd,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(initialStart.getTime());
  const [maxVal, setMaxVal] = useState(initialEnd.getTime());
  const min = minDate.getTime();
  const max = maxDate.getTime();
  const range = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Convert value to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent, maxVal]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent, minVal]);

  // Handle drag logic
  const handleDrag = (e: MouseEvent | TouchEvent, type: 'min' | 'max') => {
    if (!sliderRef.current) return;
    
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const width = sliderRect.width;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    
    // Calculate percentage based on click position relative to slider width
    // Clamp between 0 and 1
    let percent = (clientX - sliderRect.left) / width;
    percent = Math.max(0, Math.min(1, percent));
    
    const value = Math.round(min + percent * (max - min));
    
    // One day in ms to prevent overlap
    const gap = 86400000; 

    if (type === 'min') {
      const newVal = Math.min(value, maxVal - gap);
      setMinVal(newVal);
    } else {
      const newVal = Math.max(value, minVal + gap);
      setMaxVal(newVal);
    }
  };

  const startDrag = (type: 'min' | 'max') => {
    const moveHandler = (e: MouseEvent | TouchEvent) => handleDrag(e, type);
    const upHandler = () => {
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
      document.removeEventListener('touchmove', moveHandler);
      document.removeEventListener('touchend', upHandler);
    };

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', upHandler);
    document.addEventListener('touchmove', moveHandler);
    document.addEventListener('touchend', upHandler);
  };

  // Sync parent changes if props change externally
  useEffect(() => {
     const handler = setTimeout(() => {
         onChange(new Date(minVal), new Date(maxVal));
     }, 100);
     return () => clearTimeout(handler);
  }, [minVal, maxVal]);

  const formatDate = (ts: number) => {
    return new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' });
  };

  // Format timestamp to YYYY-MM-DD for input value
  const toInputDate = (ts: number) => {
    const d = new Date(ts);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    if (!e.target.value) return;
    
    // Create date at 00:00:00 local time
    const parts = e.target.value.split('-').map(Number);
    const newDate = new Date(parts[0], parts[1] - 1, parts[2]);
    let newVal = newDate.getTime();
    const gap = 86400000;

    // Ensure within absolute bounds first
    if (newVal < min) newVal = min;
    if (newVal > max) newVal = max;

    if (type === 'min') {
      // User changed Start Date - make it dominant
      let newMin = newVal;
      let newMax = maxVal;

      if (newMin >= newMax) {
        // Start date pushed past end date -> move end date forward
        newMax = newMin + gap;
        // Check absolute max
        if (newMax > max) {
            newMax = max;
            // If still overlapping (because we hit the ceiling), push start back
            if (newMin >= newMax) {
                newMin = newMax - gap;
            }
        }
      }
      
      setMinVal(newMin);
      setMaxVal(newMax);

    } else {
      // User changed End Date - make it dominant
      let newMax = newVal;
      let newMin = minVal;

      if (newMax <= newMin) {
        // End date pushed before start date -> move start date backward
        newMin = newMax - gap;
        // Check absolute min
        if (newMin < min) {
            newMin = min;
             // If still overlapping (because we hit the floor), push end forward
            if (newMax <= newMin) {
                newMax = newMin + gap;
            }
        }
      }

      setMinVal(newMin);
      setMaxVal(newMax);
    }
  };

  return (
    <div className="flex flex-col w-full px-3">
      {/* CSS Hack to make the entire input trigger the calendar picker in WebKit browsers */}
      <style>{`
        .date-input-full::-webkit-calendar-picker-indicator {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          opacity: 0;
          cursor: pointer;
        }
      `}</style>

      <div className="flex justify-center items-center mb-2 gap-2">
        {/* Start Date */}
        <div 
          className="relative group cursor-pointer select-none" 
          title="Click to edit start date"
        >
            <span className="text-sm font-bold text-stone-800 tracking-tight group-hover:text-red-700 transition-colors border-b border-transparent group-hover:border-red-200">
               {formatDate(minVal)}
            </span>
            <input 
              type="date"
              className="date-input-full absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
              value={toInputDate(minVal)}
              min={toInputDate(min)}
              max={toInputDate(max)}
              onChange={(e) => handleInputChange(e, 'min')}
            />
        </div>

        <span className="text-sm font-bold text-stone-300 select-none">-</span>

        {/* End Date */}
        <div 
          className="relative group cursor-pointer select-none" 
          title="Click to edit end date"
        >
            <span className="text-sm font-bold text-stone-800 tracking-tight group-hover:text-red-700 transition-colors border-b border-transparent group-hover:border-red-200">
               {formatDate(maxVal)}
            </span>
            <input 
              type="date"
              className="date-input-full absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
              value={toInputDate(maxVal)}
              min={toInputDate(min)}
              max={toInputDate(max)}
              onChange={(e) => handleInputChange(e, 'max')}
            />
        </div>
      </div>

      <div className="relative w-full h-5 flex items-center" ref={sliderRef}>
        {/* Track */}
        <div className="absolute w-full h-1.5 bg-stone-200 rounded-full z-0" />

        {/* Selected Range */}
        <div
          ref={range}
          className="absolute h-1.5 bg-red-800 rounded-full z-0 shadow-sm"
        />

        {/* Left Thumb */}
        <div
          className="absolute w-5 h-5 bg-white border-[2.5px] border-red-800 rounded-full cursor-pointer z-10 hover:scale-110 transition-transform shadow-md flex items-center justify-center -ml-2.5 outline-none"
          style={{ left: `${getPercent(minVal)}%` }}
          onMouseDown={() => startDrag('min')}
          onTouchStart={() => startDrag('min')}
        >
          <div className="w-1.5 h-1.5 bg-red-800 rounded-full" />
        </div>

        {/* Right Thumb */}
        <div
          className="absolute w-5 h-5 bg-white border-[2.5px] border-red-800 rounded-full cursor-pointer z-10 hover:scale-110 transition-transform shadow-md flex items-center justify-center -ml-2.5 outline-none"
          style={{ left: `${getPercent(maxVal)}%` }}
          onMouseDown={() => startDrag('max')}
          onTouchStart={() => startDrag('max')}
        >
           <div className="w-1.5 h-1.5 bg-red-800 rounded-full" />
        </div>
      </div>
    </div>
  );
};

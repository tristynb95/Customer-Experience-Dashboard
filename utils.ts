import Papa from 'papaparse';
import { Feedback, FeedbackRaw, Shift, EmployeeStats, ShineData } from './types';
import { FULL_CSV_DATA } from './constants';

const parseDateString = (dateStr: string, isShiftDate: boolean = false): Date => {
  // Handle two digit years for shifts if present (e.g. 01/09/25)
  // Feedback dates are mostly YYYY (e.g. 26/01/2026)
  
  if (!dateStr) return new Date(NaN);

  const parts = dateStr.split('/');
  if (parts.length !== 3) return new Date(NaN);

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // 0-indexed month
  let year = parseInt(parts[2], 10);

  if (year < 100) {
    year += 2000;
  }

  return new Date(year, month, day);
};

// Helper to format Date to YYYY-MM-DD using Local Time to avoid UTC shifting
const toLocalYMD = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

// Helper to normalize employee names (handle renames/typos)
const normalizeName = (name: string): string => {
  const n = name.trim();
  if (n === 'Uen Kiu Chan') return 'Ayako Chan';
  return n;
};

export const getFiscalYearAndQuarter = (date: Date): { fy: string; quarter: string } => {
  const month = date.getMonth(); // 0-11
  const year = date.getFullYear();

  let fy = year;
  let quarter = '';

  // Fiscal Year starts in March (Month 2)
  // Mar 2025 starts FY26
  
  if (month >= 2) { // Mar (2) to Dec (11)
    fy = year + 1;
    if (month <= 4) quarter = 'Q1';      // Mar, Apr, May
    else if (month <= 7) quarter = 'Q2'; // Jun, Jul, Aug
    else if (month <= 10) quarter = 'Q3';// Sep, Oct, Nov
    else quarter = 'Q4';                 // Dec
  } else { // Jan (0), Feb (1)
    // These belong to the FY that started in the previous calendar year's March
    // e.g. Jan 2026 is part of FY26 (which started Mar 2025)
    fy = year;
    quarter = 'Q4';
  }

  return { fy: `FY${fy.toString().slice(-2)}`, quarter };
};

export const parseCSVData = (): { feedback: Feedback[], shifts: Shift[] } => {
  // Original parser for the embedded constant data
  const result = Papa.parse<string[]>(FULL_CSV_DATA, {
    header: false,
    skipEmptyLines: true,
  });

  const feedbackList: Feedback[] = [];
  const shiftList: Shift[] = [];

  // Skip the first two rows (headers)
  const dataRows = result.data.slice(2);

  dataRows.forEach((row, index) => {
    // --- Parse Feedback (Columns 0-11) ---
    if (row[0] && row[0].trim() !== '') {
      const dateStr = row[2];
      const timeStr = row[3];
      const dateObj = parseDateString(dateStr);
      
      if (timeStr && !isNaN(dateObj.getTime())) {
        const [hours, minutes] = timeStr.split(':').map(Number);
        dateObj.setHours(hours, minutes);
      }

      feedbackList.push({
        id: row[0],
        date: dateObj,
        nps: parseInt(row[4], 10) || 0,
        drink: parseInt(row[5], 10) || null,
        service: parseInt(row[6], 10) || null,
        food: parseInt(row[7], 10) || null,
        recommendation: parseInt(row[8], 10) || null,
        cleanliness: parseInt(row[9], 10) || null,
        efficiency: parseInt(row[10], 10) || null,
        comment: row[11],
      });
    }

    // --- Parse Shift (Columns 13-17) ---
    if (row[15] && row[15].trim() !== '') {
      const shiftDateStr = row[13]; 
      // Apply name normalization
      const name = normalizeName(row[15]);
      const startTime = row[16];
      const endTime = row[17];

      const dateObj = parseDateString(shiftDateStr, true);
      // Use Local YMD to match how dates are constructed from string
      const isoDate = !isNaN(dateObj.getTime()) ? toLocalYMD(dateObj) : '';

      if (isoDate && startTime && endTime) {
        const employeeId = name.toLowerCase().trim().replace(/\s+/g, '-');
        
        shiftList.push({
          employeeId: employeeId,
          employeeName: name,
          date: isoDate,
          startTime: startTime,
          endTime: endTime
        });
      }
    }
  });

  return { feedback: feedbackList, shifts: shiftList };
};

// --- NEW PARSING FUNCTIONS FOR IMPORT ---

export const parseImportedFeedback = (csvText: string): Feedback[] => {
  const result = Papa.parse<any>(csvText, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim() // Handle potential trailing spaces in headers
  });

  const feedbackList: Feedback[] = [];

  result.data.forEach((row: any) => {
    // Look for key columns. Adjust these keys if your sheet headers differ slightly.
    const id = row['Survey ID'];
    const dateStr = row['Visit Date'];
    const timeStr = row['Visit Time'];
    
    // Some basic validation to ensure it's a valid row
    if (!id || !dateStr) return;

    const dateObj = parseDateString(dateStr);
    if (timeStr && !isNaN(dateObj.getTime())) {
       const [hours, minutes] = timeStr.split(':').map(Number);
       dateObj.setHours(hours, minutes);
    }

    // Try to find the comment column - it has a long name in the original data
    const commentKey = Object.keys(row).find(k => k.toLowerCase().includes('exceed your expectations')) || 'Comment';

    feedbackList.push({
      id: id,
      date: dateObj,
      nps: parseInt(row['NPS Rating (0-10)'], 10) || parseInt(row['NPS'], 10) || 0,
      drink: parseInt(row['Drink (1-5)'], 10) || null,
      service: parseInt(row['Service (1-5)'], 10) || null,
      food: parseInt(row['Food (1-5)'], 10) || null,
      recommendation: parseInt(row['Recommendation (1-5)'], 10) || null,
      cleanliness: parseInt(row['Cleanliness (1-5)'], 10) || null,
      efficiency: parseInt(row['Efficiency (1-5)'], 10) || null,
      comment: row[commentKey] || row['Comments'] || '',
    });
  });

  return feedbackList;
};

export const parseImportedShifts = (csvText: string): Shift[] => {
  const result = Papa.parse<any>(csvText, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim()
  });

  const shiftList: Shift[] = [];

  result.data.forEach((row: any) => {
    const shiftDateStr = row['Date'];
    let nameRaw = row['Name'];
    const startTime = row['Shift Start'];
    const endTime = row['Shift End'];

    if (!nameRaw || !shiftDateStr) return;

    // Apply name normalization
    const name = normalizeName(nameRaw);

    const dateObj = parseDateString(shiftDateStr, true);
    // Use Local YMD
    const isoDate = !isNaN(dateObj.getTime()) ? toLocalYMD(dateObj) : '';

    if (isoDate && startTime && endTime) {
      const employeeId = name.toLowerCase().trim().replace(/\s+/g, '-');
      
      shiftList.push({
        employeeId: employeeId,
        employeeName: name,
        date: isoDate,
        startTime: startTime,
        endTime: endTime
      });
    }
  });

  return shiftList;
};

const parsePercentage = (val: string | number): number => {
  if (typeof val === 'number') {
    // If it's a small decimal (0.9), treat as 90%. If it's huge (90), treat as 90%
    return val <= 1 ? val * 100 : val;
  }
  if (!val) return 0;
  
  const cleanVal = val.toString().replace('%', '').trim();
  const num = parseFloat(cleanVal);
  
  if (isNaN(num)) return 0;
  
  // Logic: if string had %, assume it was "94%" -> 94. 
  // If no %, it might be "0.94" -> 94, or "94" -> 94.
  // Generally shine scores are > 1 if they are percents.
  // If it's <= 1, multiply by 100.
  return num <= 1 ? num * 100 : num;
};

export const parseImportedShine = (csvText: string): ShineData[] => {
  const result = Papa.parse<any>(csvText, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim()
  });

  const shineList: ShineData[] = [];

  result.data.forEach((row: any) => {
    const dateStr = row['DATE'] || row['Date'];
    if (!dateStr) return;

    const dateObj = parseDateString(dateStr);
    if (isNaN(dateObj.getTime())) return;

    shineList.push({
      date: dateObj,
      overall: parsePercentage(row['Overall']),
      friendliness: parsePercentage(row['Friendliness']),
      recommendation: parsePercentage(row['Recommendation']),
      drink: parsePercentage(row['Drink']),
      food: parsePercentage(row['Food']),
      efficiency: parsePercentage(row['Efficiency']),
      cleanliness: parsePercentage(row['Cleanliness'])
    });
  });

  return shineList;
};

export const isFeedbackDuringShift = (feedback: Feedback, shift: Shift): boolean => {
  // Check Date match (shift.date is YYYY-MM-DD local)
  const feedbackYMD = toLocalYMD(feedback.date);
  if (feedbackYMD !== shift.date) return false;

  // Check Time match
  const feedbackTime = feedback.date.getHours() * 60 + feedback.date.getMinutes();
  
  const [startH, startM] = shift.startTime.split(':').map(Number);
  const shiftStart = startH * 60 + startM;

  const [endH, endM] = shift.endTime.split(':').map(Number);
  const shiftEnd = endH * 60 + endM;

  return feedbackTime >= shiftStart && feedbackTime <= shiftEnd;
};

export const calculateNPS = (feedbacks: Feedback[]): number => {
  if (feedbacks.length === 0) return 0;
  
  let promoters = 0;
  let detractors = 0;

  feedbacks.forEach(f => {
    if (f.nps >= 9) promoters++;
    else if (f.nps <= 6) detractors++;
  });

  return Math.round(((promoters - detractors) / feedbacks.length) * 100);
};

// Helper to get unique, sorted employees for a feedback instance
// This prevents duplicates like "A,B,C" and "B,C,A" by enforcing ID sorting
// and prevents same-person duplicates in a team (e.g. "A,A,B")
const getUniqueSortedEmployees = (feedback: Feedback, allShifts: Shift[]): {id: string, name: string}[] => {
    const activeShifts = allShifts.filter(shift => isFeedbackDuringShift(feedback, shift));
    
    const seenIds = new Set<string>();
    const employees: {id: string, name: string}[] = [];
    
    activeShifts.forEach(s => {
        if (!seenIds.has(s.employeeId)) {
            seenIds.add(s.employeeId);
            employees.push({ id: s.employeeId, name: s.employeeName });
        }
    });

    // Deterministic sort by ID
    return employees.sort((a, b) => (a.id < b.id ? -1 : 1));
};

export const aggregateEmployeeStats = (allFeedback: Feedback[], allShifts: Shift[]): EmployeeStats[] => {
  const statsMap = new Map<string, EmployeeStats>();

  // Initialize stats for unique employees in shifts
  const uniqueEmployees = new Map<string, string>();
  allShifts.forEach(s => uniqueEmployees.set(s.employeeId, s.employeeName));
  
  uniqueEmployees.forEach((name, id) => {
    statsMap.set(id, {
      id,
      name,
      npsScore: 0,
      avgService: 0,
      avgDrink: 0,
      avgFood: 0,
      avgCleanliness: 0,
      avgEfficiency: 0,
      avgRecommendation: 0,
      totalSurveys: 0,
      feedbackIds: []
    });
  });

  // Iterate through feedback and find matching shifts
  allFeedback.forEach(fb => {
    const activeEmployeeIds = new Set(
        allShifts.filter(shift => isFeedbackDuringShift(fb, shift)).map(s => s.employeeId)
    );

    activeEmployeeIds.forEach(empId => {
      const stats = statsMap.get(empId);
      if (stats) {
        stats.feedbackIds.push(fb.id);
        stats.totalSurveys++;
      }
    });
  });

  // Calculate averages
  return Array.from(statsMap.values()).map(stat => {
    const employeeFeedback = allFeedback.filter(fb => stat.feedbackIds.includes(fb.id));
    
    return calculateAveragesForStats(stat, employeeFeedback);
  })
  .sort((a, b) => {
      // Primary Sort: NPS Score Descending
      if (b.npsScore !== a.npsScore) return b.npsScore - a.npsScore;
      // Secondary Sort: Total Surveys Descending (Tie-breaker)
      return b.totalSurveys - a.totalSurveys;
  });
};

export const aggregateDuoStats = (allFeedback: Feedback[], allShifts: Shift[]): EmployeeStats[] => {
  const statsMap = new Map<string, EmployeeStats>();

  allFeedback.forEach(fb => {
    const employees = getUniqueSortedEmployees(fb, allShifts);

    // Generate combinations of 2
    for (let i = 0; i < employees.length; i++) {
      for (let j = i + 1; j < employees.length; j++) {
        const emp1 = employees[i];
        const emp2 = employees[j];
        const pairId = `${emp1.id}|${emp2.id}`;
        
        if (!statsMap.has(pairId)) {
          statsMap.set(pairId, {
            id: pairId,
            name: `${emp1.name} & ${emp2.name}`,
            npsScore: 0,
            avgService: 0,
            avgDrink: 0,
            avgFood: 0,
            avgCleanliness: 0,
            avgEfficiency: 0,
            avgRecommendation: 0,
            totalSurveys: 0,
            feedbackIds: []
          });
        }

        const stats = statsMap.get(pairId)!;
        stats.feedbackIds.push(fb.id);
        stats.totalSurveys++;
      }
    }
  });

   // Calculate averages for pairs
  return Array.from(statsMap.values()).map(stat => {
    const duoFeedback = allFeedback.filter(fb => stat.feedbackIds.includes(fb.id));
    return calculateAveragesForStats(stat, duoFeedback);
  })
  .filter(stat => stat.totalSurveys > 0) // Only return duos with actual shared feedback
  .sort((a, b) => {
      if (b.npsScore !== a.npsScore) return b.npsScore - a.npsScore;
      return b.totalSurveys - a.totalSurveys;
  });
};

export const aggregateTrioStats = (allFeedback: Feedback[], allShifts: Shift[]): EmployeeStats[] => {
  const statsMap = new Map<string, EmployeeStats>();

  allFeedback.forEach(fb => {
    const employees = getUniqueSortedEmployees(fb, allShifts);

    // Generate combinations of 3
    for (let i = 0; i < employees.length; i++) {
      for (let j = i + 1; j < employees.length; j++) {
        for (let k = j + 1; k < employees.length; k++) {
            const emp1 = employees[i];
            const emp2 = employees[j];
            const emp3 = employees[k];
            const trioId = `${emp1.id}|${emp2.id}|${emp3.id}`;
            
            if (!statsMap.has(trioId)) {
                statsMap.set(trioId, {
                    id: trioId,
                    name: `${emp1.name}, ${emp2.name} & ${emp3.name}`,
                    npsScore: 0,
                    avgService: 0,
                    avgDrink: 0,
                    avgFood: 0,
                    avgCleanliness: 0,
                    avgEfficiency: 0,
                    avgRecommendation: 0,
                    totalSurveys: 0,
                    feedbackIds: []
                });
            }

            const stats = statsMap.get(trioId)!;
            stats.feedbackIds.push(fb.id);
            stats.totalSurveys++;
        }
      }
    }
  });

   // Calculate averages for trios
  return Array.from(statsMap.values()).map(stat => {
    const trioFeedback = allFeedback.filter(fb => stat.feedbackIds.includes(fb.id));
    return calculateAveragesForStats(stat, trioFeedback);
  })
  .filter(stat => stat.totalSurveys > 0) // Only return trios with actual shared feedback
  .sort((a, b) => {
      if (b.npsScore !== a.npsScore) return b.npsScore - a.npsScore;
      return b.totalSurveys - a.totalSurveys;
  });
};

// Helper to avoid duplicating average calculation logic
const calculateAveragesForStats = (stat: EmployeeStats, feedback: Feedback[]): EmployeeStats => {
    const serviceTotal = feedback.reduce((sum, fb) => sum + (fb.service || 0), 0);
    const serviceCount = feedback.filter(fb => fb.service !== null).length;

    const drinkTotal = feedback.reduce((sum, fb) => sum + (fb.drink || 0), 0);
    const drinkCount = feedback.filter(fb => fb.drink !== null).length;

    const foodTotal = feedback.reduce((sum, fb) => sum + (fb.food || 0), 0);
    const foodCount = feedback.filter(fb => fb.food !== null).length;

    const cleanlinessTotal = feedback.reduce((sum, fb) => sum + (fb.cleanliness || 0), 0);
    const cleanlinessCount = feedback.filter(fb => fb.cleanliness !== null).length;

    const efficiencyTotal = feedback.reduce((sum, fb) => sum + (fb.efficiency || 0), 0);
    const efficiencyCount = feedback.filter(fb => fb.efficiency !== null).length;

    const recommendationTotal = feedback.reduce((sum, fb) => sum + (fb.recommendation || 0), 0);
    const recommendationCount = feedback.filter(fb => fb.recommendation !== null).length;

    return {
      ...stat,
      npsScore: calculateNPS(feedback),
      avgService: serviceCount > 0 ? parseFloat((serviceTotal / serviceCount).toFixed(1)) : 0,
      avgDrink: drinkCount > 0 ? parseFloat((drinkTotal / drinkCount).toFixed(1)) : 0,
      avgFood: foodCount > 0 ? parseFloat((foodTotal / foodCount).toFixed(1)) : 0,
      avgCleanliness: cleanlinessCount > 0 ? parseFloat((cleanlinessTotal / cleanlinessCount).toFixed(1)) : 0,
      avgEfficiency: efficiencyCount > 0 ? parseFloat((efficiencyTotal / efficiencyCount).toFixed(1)) : 0,
      avgRecommendation: recommendationCount > 0 ? parseFloat((recommendationTotal / recommendationCount).toFixed(1)) : 0,
    };
}
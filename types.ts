
export interface FeedbackRaw {
  "Survey ID": string;
  "Bakery": string;
  "Visit Date": string;
  "Visit Time": string;
  "NPS Rating (0-10)": string;
  "Drink (1-5)": string;
  "Service (1-5)": string;
  "Food (1-5)": string;
  "Recommendation (1-5)": string;
  "Cleanliness (1-5)": string;
  "Efficiency (1-5)": string;
  "Did anyone exceed your expectations or is there anything else you'd like to tell us? (optional)": string;
}

export interface Feedback {
  id: string;
  date: Date; // Combined date and time
  nps: number;
  drink: number | null;
  service: number | null;
  food: number | null;
  recommendation: number | null;
  cleanliness: number | null;
  efficiency: number | null;
  comment: string;
}

export interface Shift {
  employeeId: string;
  employeeName: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
}

export interface EmployeeStats {
  id: string;
  name: string;
  npsScore: number;
  avgService: number;
  avgDrink: number;
  avgFood: number;
  avgCleanliness: number;
  avgEfficiency: number;
  avgRecommendation: number;
  totalSurveys: number;
  feedbackIds: string[]; // IDs of feedback that occurred during their shifts
}

export interface ShineData {
  date: Date;
  overall: number;        // 0-100 percentage
  friendliness: number;   // 0-100 percentage
  recommendation: number; // 0-100 percentage
  drink: number;          // 0-100 percentage
  food: number;           // 0-100 percentage
  efficiency: number;     // 0-100 percentage
  cleanliness: number;    // 0-100 percentage
}

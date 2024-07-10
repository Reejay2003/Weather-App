// utils/currentDate.ts
const getOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return 'th'; // Handles 11th, 12th, 13th, etc.
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  
  export const getCurrentDate = (): string => {
    const date = new Date();
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const dayWithSuffix = `${weekday}, ${day}${getOrdinalSuffix(day)}`;
    return `${dayWithSuffix} ${month} ${year}`;
  };
  
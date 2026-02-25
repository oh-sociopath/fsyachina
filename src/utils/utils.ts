export function calculateYears(result: number) {
    return Math.floor(result / 365);
  }
  
export function calculateMonths(result: number) {
    const years = calculateYears(result);
    const leftDaysAmount = result - (years * 365);
    
    return Math.floor(leftDaysAmount / 30);
}

export function calculateWeeks(result: number) {
    const years = calculateYears(result);
    const months = calculateMonths(result);
    const leftDaysAmount = result - (years * 365);
    const monthDaychec = months * 30
  
    console.log('alo: ', leftDaysAmount - monthDaychec);
    
  
    return Math.floor((leftDaysAmount - monthDaychec) / 7);
}
  
export function calculateDays(result: number) {
    const years = calculateYears(result);
    const months = calculateMonths(result);
    const weeks = calculateWeeks(result);
    const leftDaysAmount = result - (years * 365);
    const monthDaychec = months * 30;
    const weeksDay = weeks * 7;
    const daysLeft = Math.floor(leftDaysAmount - weeksDay);
  
  
    return Math.floor(daysLeft - monthDaychec);
}
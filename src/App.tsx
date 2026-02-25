
import './App.css'
import { useState } from 'react';

function calculateYears(result: number) {
  return Math.floor(result / 365);
}

function calculateMonths(result: number) {
  const years = calculateYears(result);
  const leftDaysAmount = result - (years * 365);
  
  return Math.floor(leftDaysAmount / 30);
}

function calculateWeeks(result: number) {
  const years = calculateYears(result);
  const months = calculateMonths(result);
  const leftDaysAmount = result - (years * 365);
  const monthDaychec = months * 30

  console.log('alo: ', leftDaysAmount - monthDaychec);
  

  return Math.floor((leftDaysAmount - monthDaychec) / 7);
}

function calculateDays(result: number) {
  const years = calculateYears(result);
  const months = calculateMonths(result);
  const weeks = calculateWeeks(result);
  const leftDaysAmount = result - (years * 365);
  const monthDaychec = months * 30;
  const weeksDay = weeks * 7;
  const daysLeft = Math.floor(leftDaysAmount - weeksDay);


  return Math.floor(daysLeft - monthDaychec);
}
function App() {
  const [result, setResult] = useState('');
  const [years, setYears] = useState<number>();
  const [months, setMonths] = useState<number>();
  const [weeks, setWeeks] = useState<number>();
  const [days, setDays] = useState<number>();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setResult(event.target.value);


    if (+event.target.value >= 365) {
      const yearsValue = calculateYears(+event.target.value);
      setYears(yearsValue);
    }

    if (+event.target.value >= 30) {
      const monthsValue = calculateMonths(+event.target.value);

      setMonths(monthsValue);
    }

    if (+event.target.value >= 7) {
      const weeksValue = calculateWeeks(+event.target.value);

      setWeeks(weeksValue);
    }

    if (+event.target.value >= 7) {
      const daysValue = calculateDays(+event.target.value);

      setDays(daysValue);
    }


  }

  return (
    <>
      <input type="number" onChange={handleChange} />
      <p> Result: </p>
      <ul>
        {years && years !== 0 && <li> {years && `${years} years`} </li>}
        {months && months !== 0 && <li> {months && `${months} months`} </li>}
        {weeks && weeks !== 0 && <li>{`${weeks} weeks`}</li>}
        {days && days !== 0 && <li> {days && `${days} days`} </li>}
      </ul>
    </>
  )
}

export default App

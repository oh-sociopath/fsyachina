
import './App.css'
import { useState } from 'react';
import { calculateDays, calculateMonths, calculateWeeks, calculateYears } from './utils/utils';

function App() {
  const [result, setResult] = useState('');
  const [years, setYears] = useState<number>();
  const [months, setMonths] = useState<number>();
  const [weeks, setWeeks] = useState<number>();
  const [days, setDays] = useState<number>();

  console.log('result: ', result);

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
      <input type="tel" inputMode="numeric" pattern="[0-9]*" onChange={handleChange} />
      
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


import './App.css'
import { useState } from 'react';
import { calculateDays, calculateMonths, calculateWeeks, calculateYears } from './utils/utils';

function App() {
  const [result, setResult] = useState('');
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setResult(value);

    const numericValue = parseInt(value || '0', 10);

    if (isNaN(numericValue) || numericValue <= 0) {
      setYears(0);
      setMonths(0);
      setWeeks(0);
      setDays(0);
      return;
    }

    setYears(calculateYears(numericValue));
    setMonths(calculateMonths(numericValue));
    setWeeks(calculateWeeks(numericValue));
    setDays(calculateDays(numericValue));
  }

  return (
    <>
      <input value={result} type="tel" inputMode="numeric" pattern="[0-9]*" onChange={handleChange} />
      
      <p> Result: </p>
      <ul>
        {years > 0 && <li>{years} years</li>}
        {months > 0 && <li>{months} months</li>}
        {weeks > 0 && <li>{weeks} weeks</li>}
        {days > 0 && <li>{days} days</li>}
      </ul>
    </>
  )
}

export default App

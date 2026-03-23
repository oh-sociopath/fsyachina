import { useState } from 'react';
import { formatDate} from '../utils/utils.ts';

export const DaysToDate = () => {
    const [inputValue, setInputValue] = useState<number | null>();
    const [years, setYears] = useState<number | null>();
    const [months, setMonths] = useState<number | null>();
    const [days, setDays] = useState<number | null>();
    const [error, setError] = useState<string>('');
    const [errorIndikator, setErrorIndikator] = useState<boolean>(false);

    const filterInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // 1. Allow shortcuts (Cmd/Ctrl + any key)
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        // 2. Block non-numeric single characters
        // Allow functional keys like Backspace, Tab, Enter, etc.
        // event.key length > 1 usually indicates a special key (e.g., "Backspace")
        if (event.key.length === 1 && !/[0-9]/.test(event.key)) {
            event.preventDefault();
            setErrorIndikator(true);
            setError('You can enter only numbers');
            return;
        }

        // 3. Reset error for valid inputs (numbers or functional keys like Backspace)
        setErrorIndikator(false);
        setError('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('event.target.value: ', event.target.value);
        const value = event.target.value === '' ? null : Number(event.target.value);
        setInputValue(value);
        const {
            years,
            months,
            days
        } = formatDate(Number(event.target.value));

        if (years) {
            setYears(years)
        } else {
            setYears(null);
        }

        if (months) {
            setMonths(months);
        } else {
            setMonths(null);
        }

        if (days) {
            setDays(days);
        } else {
            setDays(null);
        }
    }
    return (
        <>
            { errorIndikator && <p> {error} </p> }
            <input
                value={inputValue ?? ''}
                onChange={handleChange}
                onKeyDown={filterInput}
                type={'text'}
            />

            <p> Result: </p>
            <ul>
                {years && years !== 0 && <li> {years && `${years} years`} </li>}
                {months && months !== 0 && <li> {months && `${months} months`} </li>}
                {days && days !== 0 && <li> {days && `${days} days`} </li>}
            </ul>
        </>
    );
}

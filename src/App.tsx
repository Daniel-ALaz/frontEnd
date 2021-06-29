import { ChangeEvent, useState } from 'react';
import { CountdownMinutes } from './CountdownMinutes';
import { CountdownHours } from './CountdownHours';
import './App.css';

function App() 
{
    const [date, setDate] = useState<Date>(() =>
    {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        return new Date(`${date.toDateString()} 00:00:00`);
    });

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    {
        if (event.target.value)
        {
            try 
            {
                const newDate = new Date(event.target.value)
                setDate(newDate)
            }
            catch(e)
            {
                // invalid date
            }
        }
    };

    return (
        <div className="App">
            <div>
                Quedan <CountdownHours date={date} /> horas, <CountdownMinutes date={date} /> minutos para las <input type="datetime-local" onChange={onChange} value={toLocalDateTime(date)}></input>
            </div>
        </div>
    );
}

function toLocalDateTime(date: Date)
{
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}`: `${date.getMonth() + 1}`;
  const dayOfMonth = date.getDate() < 10 ?  `0${date.getDate()}`: `${date.getDate()}`;
  const hour = date.getHours() < 10 ?  `0${date.getHours()}`: `${date.getHours()}`;
  const minutes = date.getMinutes() < 10 ?  `0${date.getMinutes()}`: `${date.getMinutes()}`;
  return `${date.getFullYear()}-${month}-${dayOfMonth}T${hour}:${minutes}`
}

export default App;

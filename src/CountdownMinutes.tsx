import { useEffect, useState } from "react";

export const CountdownMinutes = (props: { date: Date }) =>
{
    const [minutes, setMinutes] = useState(() => calculateMinutesLeft(props.date));

    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setMinutes(calculateMinutesLeft(props.date));
        }, 1000);

        return () => clearTimeout(timer);
    });

    return <>{ Math.floor(minutes) }</>
}

let fakeCounter = 0;

const calculateMinutesLeft = (date: Date) => {
   
    return fakeCounter++;
}
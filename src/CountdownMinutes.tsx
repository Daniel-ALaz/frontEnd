import { useEffect, useState } from "react";

export const CountdownMinutes = (props: { date: Date }) =>
{
    const [minutes, setMinutes] = useState(() => calculateMinutesLeft(props.date));


    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setMinutes(calculateMinutesLeft(props.date));
        }, 1000);

        return () => clearInterval(timer);
    });

    return <>{ Math.floor(minutes) }</>
}



const calculateMinutesLeft = (date: Date) => {
   
    let now = new Date();

    let time_left = date.valueOf() - now.valueOf();

    return Math.trunc( time_left / 1000 % (24 * 60 * 60) % (60 * 60) / 60);
}
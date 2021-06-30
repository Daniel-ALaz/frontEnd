import { useEffect, useState } from "react";

export const CountdownSeconds = (props: { date: Date }) =>
{
    const [seconds, setSeconds] = useState(() => calculateSecondsLeft(props.date));


    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setSeconds(calculateSecondsLeft(props.date));
        }, 1000);

        return () => clearTimeout(timer);
    });

    return <>{ Math.floor(seconds) }</>
}



const calculateSecondsLeft = (date: Date) => 
{
    let now = new Date();

    let time_left = date.valueOf() - now.valueOf();

    return Math.trunc( time_left / 1000 % (24 * 60 * 60) % (60 * 60) % 60);
}
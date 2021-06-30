import { useEffect, useState } from "react";

export const CountdownDays = (props: { date: Date }) =>
{
    const [days, setDays] = useState(() => calculateDaysLeft(props.date));


    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setDays(calculateDaysLeft(props.date));
        }, 1000);

        return () => clearInterval(timer);
    });

    return <>{ Math.floor(days) }</>
}


const calculateDaysLeft = (date: Date) => 
{
    let now = new Date();

    let time_left = date.valueOf() - now.valueOf();

    return Math.trunc( time_left / 1000 / (24 * 60 * 60));
}
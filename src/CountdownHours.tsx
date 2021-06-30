import { useEffect, useState } from "react";

export const CountdownHours = (props: { date: Date }) =>
{
    const [hours, setHours] = useState(() => calculateHoursLeft(props.date));


    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setHours(calculateHoursLeft(props.date));
        }, 1000);

        return () => clearTimeout(timer);
    });

    return <>{ Math.floor(hours) }</>
}



const calculateHoursLeft = (date: Date) => 
{
    let now = new Date();

    let time_left = date.valueOf() - now.valueOf();

    return Math.trunc( time_left / 1000 % (24 * 60 * 60) / (60 * 60));
}
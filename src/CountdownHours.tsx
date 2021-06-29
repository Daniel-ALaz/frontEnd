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

let fakeCounter = 0;

const calculateHoursLeft = (date: Date) => 
{
    return fakeCounter++;
}
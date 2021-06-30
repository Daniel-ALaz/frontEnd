import { useEffect, useState } from "react";

export const CountdownDays = (props: { date: Date }) =>
{
    const [Days, setDays] = useState(() => calculateDaysLeft(props.date));


    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setDays(calculateDaysLeft(props.date));
        }, 1000 * (3600*24));

        return () => clearTimeout(timer);
    });

    return <>{ Math.floor(Days) }</>
}



const calculateDaysLeft = (date: Date) => 
{
     // Milliseconds for the calculations
     let MILLISECONDS_OF_A_SECOND = 1000;
     let MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
     let MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
     let MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;
 
 
     const now = new Date()
     const duration = date.getTime() - now.getTime();
     let REMAINING_DAYS = (duration / MILLISECONDS_OF_A_DAY);
     
     console.log('REMAINING_DAYS:',REMAINING_DAYS);
 
 
     return REMAINING_DAYS;
}
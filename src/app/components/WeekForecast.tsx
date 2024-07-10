import React from 'react';

interface Condition {
  text: string;
  icon: string;
}

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: Condition;
  };
}

interface WeekForecastProps {
  data: ForecastDay[];
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 w-fit mx-5'>
      {data.map((day, index) => 
       (
          <div key={index} className='flex flex-col p-2 items-center bg-white/40 rounded-lg text-center h-fit' >
            <p> {new Date(day.date).toLocaleString("en-US", {weekday: "short"})} </p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div>Max : {day.day.maxtemp_c.toFixed()} °C</div>
            <div>Min : {day.day.mintemp_c.toFixed()} °C</div>
          </div>
        ))}
    </div>
  );
};

export default WeekForecast;

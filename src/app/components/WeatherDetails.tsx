import React from 'react';

interface CurrentWeather {
  wind_kph: number;
  humidity: number;
  feelslike_c: number;
  precip_mm: number;
  pressure_mb: number;
  wind_dir: string;
}

interface WeatherDetailsProps {
  data: {
    current: CurrentWeather;
  };
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-gray-500 bg-white/40 p-4 mx-5 mr-15 my-5 rounded-lg text-lg'>
      <div className='flex flex-col items-start p-2'>
        <div className='text-lg'>Wind Speed:</div>
        <div className='text-lg'>{data.current.wind_kph}</div>
        <div className='text-lg'>Humidity:</div>
        <div className='text-lg'>{data.current.humidity} %</div>
      </div>
      <div className='flex flex-col items-start'>
        <h1 className='mb-5'>Feels Like</h1>
        <div className='text-5xl'>{data.current.feelslike_c.toFixed()}°C</div>
      </div>
        <div className='flex flex-col items-start'>
        <div className='text-lg'>Precipitation:</div>
        <div className='text-lg'> {data.current.precip_mm} mm</div>
        <div className='text-lg'>Pressure:</div>
        <div className='text-lg'> {data.current.pressure_mb} mb</div>
      </div>
      <div className='flex flex-col items-start'>
        <h1 className='mb-5'>Wind Direction</h1>
        <div className='text-5xl'>{data.current.wind_dir}</div>
      </div>
    </div>
  );
}

export default WeatherDetails;

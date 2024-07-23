"use client";

import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Current from './components/Current';
import WeatherDetails from './components/WeatherDetails';
import WeekForecast from './components/WeekForecast';
import { getCurrentDate } from './utils/currentDate';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Page = () => {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState<string>("Delhi");
  const [error, setError] = useState<string>("");

  const fetchWeatherData = async (location: string) => {
    const apiKey = '3934267ffacb4dcbaab141308242307'; // replace with your actual API key
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      setData(data);
      setError("");
    } catch (error) {
      setError("404! City not found");
      setData({});
    }
  };

  useEffect(() => {
    // Fetch initial weather data for Kathmandu
    fetchWeatherData(location);
  }, []);

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await fetchWeatherData(location);
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = <div>Welcome to Reejay's Weather App</div>;
  } else if (error !== "") {
    content = <div>Invalid City</div>;
  } else {
    content = (
      <div className= 'flex flexcol-2  justify-between mb-15 mt-[-25px]'>
        <Current data={data} />
        <div className='p-3 gap-4'>
          <WeekForecast data={data.forecast.forecastday} />
          <WeatherDetails data={data} />
        </div>      
      </div>
    );
  }

  const getBackgroundClass = (condition: string) => {
    if (condition.includes("rain")) {
      return "bg-gradient-to-b from-gray-700 to-gray-100";
    } else if (condition.includes("Sunny")) {
      return "bg-gradient-to-b from-blue-700 to-yellow-100";
    } else {
      return "bg-gradient-to-b from-blue-700 to-blue-300";
    }
  };

  const backgroundClass = data.current ? getBackgroundClass(data.current.condition.text) : "bg-gradient-to-b from-blue-700 to-blue-300";

  return (
    <div className={`bg-cover ${backgroundClass} h-full`}>
      <div className="bg-white/25 h-screen">
        <div className="flex flex-col justify-between items-center md:flex-row p-10">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
        </div>
        <div className="text-white">{content}</div>
      </div>
    </div>
  );
};

export default Page;

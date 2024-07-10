"use client"
import React from 'react';
import { getCurrentDate } from '../utils/currentDate';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaLocationDot } from "react-icons/fa6";

interface Condition {
  text: string;
  icon: string;
}

interface CurrentData {
  condition: Condition;
  temp_c: number;
}

interface Location {
  name: string;
  country: string;
}

interface Data {
  current: CurrentData;
  location: Location;
}

interface InputProps {
  data: Data;
}

const Current = ({data}: InputProps) => {

  const currentDate = getCurrentDate();


  return (
    <Card className='bg-white/10 ml-10 mt-0 justify-between items-center w-fit text-white '>
          <CardHeader>
            <CardTitle  >
              <div className= "flex flex-row text-[2.5rem] ">
              <h1>Today</h1>
              <div className='mx-4 mt-[-8px]'>
                <img src={data.current.condition.icon} alt="" />
              </div>
              </div>
              </CardTitle>
            <CardDescription>{currentDate}</CardDescription>
          </CardHeader>
          <CardContent>
          <h1 className='my-4 mx-2 py-1 text-[2.5rem] font-bold'>{data.current.temp_c.toFixed()} °C</h1>
          <div className='my-2 mx-2 mb-4'>{data.current.condition.text}</div>
          
          </CardContent>
          <CardFooter>
          <div className='flex mx-2 text-black w-fit bg-white rounded-md p-1 item-center px-7'>
            <FaLocationDot className='mx-2 h-10 items-center' />
            <div className='px-2 mx-2 justify-center items-center w-fit'>{data.location.name}, {data.location.country}</div>
            </div>
          </CardFooter>
        </Card>

  );
};

export default Current;

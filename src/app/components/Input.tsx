"use client";
import React from "react";
import { FaSearchLocation } from "react-icons/fa";


interface InputProps{
  setLocation: React.Dispatch<React.SetStateAction<string>>
  handleSearch: (event : React.KeyboardEvent<HTMLInputElement>) => void
}

const Input = ({setLocation, handleSearch}: InputProps) => {
  return (
    <form className="flex items-center md:w-1/2 w-full p-10">
      <input
        type="text"
        placeholder="Search Your City"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
        className="bg-transparent border-b-2 hover:border-b-[3px] w-full placeholder-white px-2 outline-none text-white"
      />
       <div className="ml-[-30px] text-white w-8 h-8 flex items-center justify-center transform hover:scale-125 hover:text-gray-300 transition-transform duration-200 cursor-pointer">
        <FaSearchLocation size={15} />
      </div>
    </form>
  );
}

export default Input;

import {useState, useEffect } from 'react';
import Image from "../assets/catp.gif";

function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);
  
  return (
    
   
      <div className=" mt-8 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-Ag  ">현재 시간(=^･ω･^=)</h1>
          <div className="text-3xl font-extrabold">
            <span className="font-Ag">{time.toLocaleTimeString()}</span>
            <img 
            src={Image} 
            alt="look"
            className="mt-4 w-64 h-64 rounded-full object-cover ring-4 ring-blue-400 hover:scale-105"
          />
          </div>
        </div> 
      </div>
   
  )
}

export default Watch;





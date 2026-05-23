import { useState } from 'react';
import Watch from './Watch';  
import TenTimer from './TenTimer';
import Bgmage from "../assets/bgp.jpg";

function Button() {
  const[activeTab, setActiveTab] = useState("시계");
 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap"//디스플레이 설정
    style={{ backgroundImage: `url(${Bgmage})`}}>
      <p className="mt-8 text-2xl italic underline text-blue-500 font-Ag font-black">시계&타이머</p> {/*폰트 설정 - “style”*/}
      <div className=' border-b border-gray-200 flex gap-5 font-Ag rounded-2xl p-2 bg-white shadow-2xl'> {/*그림자,배경색 설정*/}
      {["시계", "타이머"].map((tab) =>(
        <button
        key={tab}
        onClick={()=>setActiveTab(tab)}
        className={`text-sm font-medium transition-colors ${
          activeTab === tab 
          ? "text-blue-600 border-2 border-blue-600 rounded-2xl p-2" //색상 설정
          : "text-gray-500 border-2 rounded-2xl p-2 hover:text-gray-800"// 상태변화 설정 
        }`}
        >
        {tab.toUpperCase()}
        </button>
      ))}
      
      </div>

      <div>
        {activeTab === "시계" ? <Watch /> : <TenTimer />}
      </div>
    </div>
    

    
  )
}

export default Button;   


import {useState, useEffect} from 'react';
import Image from "../assets/catd.gif";

function TenTimer() {
    const [sec, setSec] = useState(10);

    useEffect(() => {
        if (sec === 0) {
            return;
        }
        const id = setInterval(() => {
         setSec((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(id);
            console.log("타이머 정리");
        };
    }, [sec]);

    return (
        <div className=" mt-8 bg-blue-300  rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-4">
                {sec > 0 ? <p className="text-2xl font-bold text-white font-Ag">{sec}초</p> : <p className="text-3xl font-extrabold text-black-100 text-white font-Ag">💥시간 종료!</p>} 
                <img 
                    src={Image} 
                    alt="look"
                    className="mt-4 w-64 h-64 rounded-full object-cover ring-4 ring-purple-400 hover:scale-105"
                    />
            </div>     
    )
    


}
export default TenTimer;
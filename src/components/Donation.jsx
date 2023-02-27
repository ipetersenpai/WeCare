import React from "react";
import Donation1 from"../assets/donation1.png";
import Donation2 from"../assets/donation2.png";
import Donation3 from"../assets/donation3.png";

const Donation = () =>{
    return(
        <div className=" w-full bg-white py-[7rem] px-4">
            <div className=" max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8 ">
                <div className="w-full rounded-xl shadow-lg hover:scale-105 duration-300 my-10 flex flex-col hover:bg-gray-100">
                    <img className=" w-20 mx-auto mt-[-3.5rem] pb-2" src={Donation1} alt="/" />
                    <h1 className=" mx-auto font-bold text-xl py-4">DONATION TIER 1</h1>
                    <h1 className="mx-auto font-bold text-5xl py-3">$150</h1>
                    <h1 className=" mx-auto font-bold text-2xl p-7">BRONZE</h1>
                    <div className="mx-auto pt-10">
                        <button className= 'text-black bg-[#00df9a] hover:bg-black hover:text-white py-4 w-[200px] rounded-md my-10 mx-auto font-semibold'>Donate</button>
                    </div>
                </div>

                <div className="w-full rounded-xl shadow-lg hover:scale-105 duration-300 my-5 flex flex-col hover:bg-gray-100 bg-gray-100">
                    <img className=" w-20 mx-auto mt-[-3.5rem] pb-2" src={Donation3} alt="/" />
                    <h1 className=" mx-auto font-bold text-xl py-4">DONATION TIER 2</h1>
                    <h1 className="mx-auto font-bold text-5xl py-3">$500</h1>
                    <h1 className=" mx-auto font-bold text-2xl p-7">GOLD</h1>
                    <div className="mx-auto pt-10">
                        <button className= 'text-black bg-[#00df9a] hover:bg-black hover:text-white py-4 w-[200px] rounded-md my-10 mx-auto font-semibold'>Donate</button>
                    </div>
                </div>

                <div className="w-full rounded-xl shadow-lg hover:scale-105 duration-300 my-10 flex flex-col hover:bg-gray-100">
                    <img className=" w-20 mx-auto mt-[-3.5rem] pb-2" src={Donation2} alt="/" />
                    <h1 className=" mx-auto font-bold text-xl py-4">DONATION TIER 3</h1>
                    <h1 className="mx-auto font-bold text-5xl py-3">$1000</h1>
                    <h1 className=" mx-auto font-bold text-2xl p-7">DIAMOND</h1>
                    <div className="mx-auto pt-10">
                        <button className= 'text-black bg-[#00df9a] hover:bg-black hover:text-white py-4 w-[200px] rounded-md my-10 mx-auto font-semibold'>Donate</button>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Donation;
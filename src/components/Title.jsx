import React from "react";
import Typed from 'react-typed';
import Background from "../assets/bg101.jpg";
const Title = () => {
    return(

        <div className= "text-white">
            
            
            <div className= 'max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
             <p className= 'text-[#ffffff] text-2xl font-bold p-0.5'>WE MUST WORK TOGETHER</p>
             <h1 className= 'text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>LET'S SAVE THE EARTH</h1>   
             <div className='flex justify-center items-center'>      
               <Typed
                    className='md:text-2xl sm:text-2xl text-1xl font-bold p-0.5 text-white'
                    strings={['Total participants on this program is 541,21 people']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                />
             </div>
                <p className= 'font-medium mt-[50px] md:text-2xl sm:text-1xl text-xl'>Come and join us to preserve our future!</p>    
                <button className= 'text-black bg-[#00df9a] hover:bg-[#18c28c] py-3 w-[200px] rounded-md my-6 mx-auto font-semibold'>Join Now</button>
            </div>
        </div>
    )

}

export default Title;
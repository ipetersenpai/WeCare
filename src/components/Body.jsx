import React from "react";
import Nature from "../assets/plant-a-tree.png"
const Body = () => {

    return(
        <div className= 'w-full bg-white py-16 px-4'>
          <div className= 'max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className = 'w-[500px] mx-auto my-4'src={Nature} alt="plant-a-tree" />
            <div className='flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold py-3 text-3xl'>Mission and Vision</h1>
                <p className='text-black font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Animi necessitatibus non recusandae molestias totam error dignissimos 
                   earum accusantium doloribus, tenetur explicabo quam praesentium dolorem ratione,
                   architecto vero placeat illum beatae?</p>
                <h1 className="text-black font-bold py-3 text-3xl mt-7"> What's the goal?</h1>
                <p className='text-black font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum mollitia recusandae ut assumenda vitae perspiciatis voluptatem harum perferendis numquam!</p>
            </div>
          </div>  
        

        </div>
    )
}

export default Body;

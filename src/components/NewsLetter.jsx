import React from "react";

const NewsLetter = () => {
    return(

        <div className="w-full py-16 text-white">
            
            <div className=" px-4 max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl font-bold text-2xl py-2">Want to be notify on our accomplishment?</h1>
                    <p1 className="font-normal text-xl">Sign up to our Newsletter and stay up to date.</p1>
                </div>
                
                <div className="my-3">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input
                            className="p-3 flex w-full rounded-md text-black"
                            placeholder="Enter your Email"
                            type="email"
                        />
                        <button className="bg-[#00df9a] p-3 px-6 rounded-md m-5 w-[200px] font-semibold">Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy.</span></p>
                </div>
                
            </div>
            
        </div>
    )
}

export default NewsLetter;
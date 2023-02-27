import React from "react";
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () =>{
    return(
        <div className="text-white w-full bg-black pb-5">
            <div className=" max-w-[1240px] mx-auto px-4 grid md:grid-cols-4 gap-5">
                
                <div className="  grid grid-row md:mt-6 mt-4">
                    <h1 className= ' w-full text-2xl font-bold text-[#00df9a]'>WE CARE</h1>
                    <p className="text-sm md:mt-[-70px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum ipsam possimus odio nobis temporibus.</p>
                    <div className="md:mx-0 mx-auto grid grid-flow-col gap-4 md:mt-[-90px] py-5">
                        <BsFacebook size={23} />
                        <BsInstagram size={23}/>
                        <AiFillTwitterCircle size={23}/>
                        <AiFillGithub size={23}/>
                    </div>
                </div>

                <div className="  grid grid-rowmd:mt-6">
                    
                    <div className="md:mx-0 py-5">
                        <h1 className= ' w-full text-xl font-bold '>Support</h1>
                        <ul className=" w-full fixed-0">
                            <li className = 'py-2 text-sm'>Contact Us </li >
                            <li className = 'py-2 text-sm'>FAQ</li >
                            <li className = 'py-2 text-sm'>Guides </li >
                            <li className = 'py-2 text-sm'>Reviews </li >
                        </ul>
                    </div>
                </div>

                <div className="  grid grid-row">
                    
                    <div className="md:mx-0 py-5">
                    <h1 className= ' w-full text-xl font-bold '>Organization</h1>
                        <ul className="w-full fixed-0">
                            <li className = 'py-2 text-sm'>About </li >
                            <li className = 'py-2 text-sm'>Blog</li >
                            <li className = 'py-2 text-sm'>Jobs </li >
                            <li className = 'py-2 text-sm'>Press </li >
                            <li className = 'py-2 text-sm'>Partners </li >
                            <li className = 'py-2 text-sm'>Partners </li >
                          
                        </ul>
                    </div>
                </div>

                <div className="  grid grid-row">
                    
                    <div className="md:mx-0 py-5">
                    <h1 className= ' w-full text-xl font-bold '>Legal</h1>
                        <ul className="w-full fixed-0">
                            <li className = 'py-2 text-sm'>Claim </li >
                            <li className = 'py-2 text-sm'>Privacy</li >
                            <li className = 'py-2 text-sm'>Term </li >
                            <li className = 'py-2 text-sm'>Others </li >
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;
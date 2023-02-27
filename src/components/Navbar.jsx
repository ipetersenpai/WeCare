import React,{useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// study the hidden md:flex
// the block md:hidden
// fixed command

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const HandleNav = () =>{
        setNav(!nav)
    }

    return(

    <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
            <h1 className= ' w-full text-3xl font-bold text-[#00df9a]'>WE CARE</h1>

            <ul className= 'hidden md:flex'>
                <li className = 'p-4'>Home</li>
                <li className = 'p-4'>Company</li>
                <li className = 'p-4'>About</li>
                <li className = 'p-4'>Contact</li>
            </ul>
        
        <div onClick={HandleNav} className= 'block md:hidden' > 
            {nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={50} />}
        </div>

        <div className= {nav ? 'ease-in-out duration-500 fixed left-0 bg-[#000300] top-0 w-[60%] h-full border-r border-r-gray-800': 'ease-out-in duration-500 fixed left-[-100%] bg-[#000300] top-0 w-[60%] h-full border-r border-r-gray-800'}>
            <h1 className= ' w-full text-3xl font-bold text-[#00df9a] m-4'>WE CARE</h1>
            <ul className= 'p-4'>
                <li className = 'p-4 border-b border-b-gray-600'>Home</li>
                <li className = 'p-4 border-b border-b-gray-600'>Company</li>
                <li className = 'p-4 border-b border-b-gray-600'>About</li>
                <li className = 'p-4'>Contact</li>
            </ul>
        </div>

    </div>

    )
}

export default NavBar;
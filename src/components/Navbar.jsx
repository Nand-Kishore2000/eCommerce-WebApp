import React from 'react'
import {NavLink} from 'react-router-dom';

import {FaShoppingCart} from 'react-icons/fa';
import { useSelector } from 'react-redux';
function Navbar() {
    const {cart} = useSelector((state)=>state)
  return (
    <div className='flex w-full max-w-[100%] max-h-[100px] text-white bg-green-950 justify-around items-center  font-normal '>
            <div >
        <NavLink to='/'>
                <img src='../mylogo.png' width={120} height={60} alt='logoavatar'/>
        </NavLink>
            </div>

        <div className='flex w-11/12 max-w-[200px]  justify-evenly items-center'>

            <NavLink to='/'>
                 <p className='hover:scale-110 transition duration-300 ease-in hover:text-xl'>Home</p>
             </NavLink> 

            <NavLink to='/cart'>
                    <div className='hover:scale-110  relative transition duration-300 ease-in text-3xl '>
                        {
                            cart.length>0 && <span className='text-white absolute bg-green-800 max-w-[15px] max-h-[15px] rounded-full text-[10px] flex items-center justify-center  w-full h-full max-auto  '>
                               {cart.length}</span>
                        }
                        <FaShoppingCart/>
                    </div>
            </NavLink>
            
        </div>
    </div>
  )
}

export default Navbar
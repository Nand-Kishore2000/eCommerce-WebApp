import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {remove} from '../redux/Slices/CartSlice'
import { toast } from 'react-toastify';

function Cartitem({item,itemindex}) {
  const dispatch = useDispatch()
  function removefromcart(){
        dispatch(remove(item.id));
        toast.error("item removed from cart ")
  }

  return (
    <div className='  border-b-2 flex lg:w-[80%] lg:h-[250px] md:w-[80%] md:h-[250px] lg:basis-1/2 lg:ml-[100px] p-4 text-left pr-[10%] lg:flex-row lg:justify-between lg:items-center'>
        
        <div className=' lg:w-max-[250px] lg:h-max-[30px] '>
            <img src={item.image} className='lg:w-[250px] lg:h-[180px] h-[80px] w-[140px]' alt='itemimage'></img>
        </div>
        <div className='pl-[30px] '>
            <h1 className='lg:text-[1.6rem] md:text-[1.6rem] text-[0.8rem] leading-none '>{item.title}</h1>
            <p className='lg:text-[18px] lg:mt-[10px] text-[8px] mt-[8px] text-gray-400'>{item.description.substr(0,120)+`...`}</p>
            <div className='flex justify-between  pr-[20px] mt-[10px]   items-center  lg:items-center'>
                <div className='lg:text-[1.6rem] lg:mt-[12px]  text-green-800'>${item.price}</div>
                <div onClick={removefromcart} className='lg:w-[40px] cursor-pointer h-[25px] w-[25px] lg:h-[40px] rounded-full flex justify-center items-center bg-red-300'>
                  <MdDelete className='text-red-700 lg:text-[1.2rem]'/>
                </div>
            </div>
             
        </div>
    </div>
  )
}

export default Cartitem
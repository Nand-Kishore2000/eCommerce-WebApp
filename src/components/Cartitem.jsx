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
    <div className='  border-b-2 flex w-[80%] h-[250px] basis-1/2 ml-[100px] text-left pr-[10%] flex-row justify-between items-center'>
        
        <div className=' w-max-[250px] h-max-[30px]'>
            <img src={item.image} className='w-[250px] h-[180px]' alt='itemimage'></img>
        </div>
        <div className='pl-[30px] '>
            <h1 className='text-[1.6rem] leading-none '>{item.title}</h1>
            <p className='text-[18px] mt-[10px] text-gray-400'>{item.description.substr(0,120)+`...`}</p>
            <div className='flex justify-between  pr-[20px] mt-[10px] items-center'>
                <div className='text-[1.6rem] mt-[12px] text-green-800'>${item.price}</div>
                <div onClick={removefromcart} className='w-[40px] cursor-pointer h-[40px] rounded-full flex justify-center items-center bg-red-300'>
                  <MdDelete className='text-red-700 text-[1.2rem]'/>
                </div>
            </div>
             
        </div>
    </div>
  )
}

export default Cartitem
import React from 'react'
import { useSelector } from 'react-redux/es/exports.js';
import { useDispatch } from 'react-redux';
import {add,remove} from '../redux/Slices/CartSlice'
import { toast } from 'react-toastify';

function Card({key,value} ) {
    const post= value;
    
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch(); 
   
    
    function addtocart(){
      dispatch(add(post));
      toast.success("item added successfully");

    }
    function removefromcart(){
      dispatch(remove(post.id));
      toast.error("item removed successfully");
    }
    // const description= props.value.description;
    

  return (
    <div className=' flex items-center flex-col justify-center rounded-md border-2 gap-3 p-4 mt-10 ml-5 
     hover:scale-110 hover:transition-transform ease-in hover:shadow-2xl  sm:grid-cols-1' >
       
            <div><h1 className='text-[18px] flex items-center max-h-[80px] h-full font-medium '>{post.title.split(" ").slice(0,2).join(" ")+`...`}</h1></div>
            <div className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+`...`}</div>
            <div className='h-[180px]'>
              < img  className='h-full w-full' src={post.image} alt='productiamge' width={120} height={300}/></div>
            <div className='flex justify-between items-center gap-12 mt-5 w-full    '>
                <div className='font-bold text-green-900'>${post.price}</div>
                <div className=''>
                    {
                    cart.some((p)=> p.id === post.id) ?  (<button onClick={removefromcart}
                    className='text-gray-700 border-2
                     border-gray-700 rounded-full text-[12px] 
                     p-1 px-3  uppercase font-semibold
                     hover:text-white hover:bg-gray-700 
                     trasition duration-300 ease-in'
                    >Remove card</button>) :( <button onClick={addtocart}
                      className='text-gray-700 border-2
                      border-gray-700 rounded-full text-[12px] 
                      p-1 px-3  uppercase font-semibold
                      hover:text-white hover:bg-gray-700 
                      trasition duration-300 ease-in'
                    >Add to Card</button>)
                    }
                  
                </div>
            </div>
            
        
        
        
    </div>
  )
}

export default Card;
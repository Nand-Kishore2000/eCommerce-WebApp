import React, { useEffect , useState} from 'react'

import { useSelector } from 'react-redux/es/hooks/useSelector';
import {Link} from 'react-router-dom';
import Cartitem from '../components/Cartitem'

 
function Cart(props) {
    
    const {cart} = useSelector((state) => state);
    const [totalamount, setamount] = useState(0);
      

    useEffect(
        ()=>{
           setamount(cart.reduce((acc,curr)=>acc + curr.price ,0));
        },[cart]);

  return (
     <div className=' ' >
        {
            cart.length > 0 ? 
            (
             <div className=' flex justify-center   ' >
               <div  >
                  {
                      cart.map((item,index)=>(
                     <Cartitem key={item.id} item={item} itemindex={index}/>
                     ))
                  }
             </div>
             
             <div className=' flex basis-1/2 flex-col text-green-800 pb-[50px] top-0 pt-[50px] h-[650px] pl-[30px] justify-between  border-l-2 '>
                     <div className='flex flex-col text-green-700 text-left '>
                        <div className='text-[1.2rem]'>YOUR CART</div>
                        <p className='text-[3rem] font-bold'>SUMMARY</p>
                        <p className='text-[1.2rem]'>
                          <span>Total item: {cart.length}</span>
                        </p>
                     </div>

                     <div className='text-left '>
                        <div className='text-[1.2rem] font-bold'>
                           <p>
                           <span>Total Amount:
                              <span className='text-black font-bold '> ${Math.round(totalamount)}</span>
                              </span>
                           </p>
                        </div>
                        <button className='text-[1.2rem] font-bold text-white bg-green-700 w-[350px] h-[40px]'>Checkout Now</button>
                     </div>
             </div>
         </div>
            ) 
            :
            (
                 <div className=' flex justify-center items-center flex-col w-full h-[100vh] '>
                    <div><p className='text-[24px] font-medium '>No items available </p></div>
                  
                   <div className='text-white bg-green-500 w-[130px] h-[32px] p-1 rounded-sm font-medium'>
                      <Link to={'/'}>
                         <button>Shop Now</button>
                    </Link>
                    </div>
                </div>
            )
        
         }
         
    </div>
  )
}

export default Cart
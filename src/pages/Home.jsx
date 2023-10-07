import React, { useEffect, useState } from 'react'
import Card from './Card';
import Spinner from '../components/Spinner';


const API_URL="https://fakestoreapi.com/products"
function Home() {
    const [posts,setposts] = useState([]);
    const [loading, setLoading] = useState(true);
    

    


    async function fetchdata(){
        setLoading(true);

        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            // console.log(data);
            setposts(data);

            
        } catch (error) {
            console.log("arey yrrr ye kya ho gya");
            setposts([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchdata();
    },[])

  return (
    <div className=' grid  md:grid-cols-3 sm:grid-cols-2
     xs:grid-cols-1 lg:grid-cols-4 mr-[20px]  
     lg:max-auto max-w-6xl p-2 xs:mx-auto lg:ml-[200px] space-y-10 
     space-x-5 min-h-[80px] lg:max-w-auto lg:justify-end '>
        {
            loading ? <Spinner/> :

            posts.length === 0 ? (<div>No data found </div>)
            :(posts.map((post)=>(
                <Card key={post.id} value={post} />
            )))
        
        }
    </div>
  )
}

export default Home
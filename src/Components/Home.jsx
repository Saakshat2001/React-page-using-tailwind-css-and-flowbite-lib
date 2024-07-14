import { Button } from 'flowbite-react'
import React from 'react'

function Home() {
  return (
    <div className='bg-black h-screen flex flex-wrap '>
        
        <div className='text-white pt-20 bg-black'> 
        <h1 className='pt-30 pl-40 text-6xl  font-bold '> Groceries</h1>
        <h2 className='pt-5 pl-40 text-6xl  font-bold '> delivery in 15 minutes</h2>
        <h3 className='text-1xl pt-5 pl-40 pr-20'> Grocify offers a wide range of products , including fresh products, meats, 
        </h3>
        <h4 className='text-1xl pl-40'>dairy , baked goods
            and non perishable items
            </h4> 
        <div className='flex mt-10  '> 
        <Button className='ml-40  bg-yellow-300 text-bold rounded-full'>Order Now</Button>
      <Button className='ml-3 rounded-full bg-black'>Download App</Button>  
        </div>
        </div>
    </div>
    
  )
}

export default Home
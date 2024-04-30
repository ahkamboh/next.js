
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Image from 'next/image'
import Input from './components/Input'
function page() {
  // const [a,b]= useState(2);
  return (
    <>
       {/* <div className='bg-red-800 mb-3 text-green-400 px-5 w-fit'>{a}</div>
    <button onClick={()=>b(a+1)} className='bg-green-500 p-1  m-2 rounded-md text-xs'>count</button> */}
  
    <Navbar/>
    <main>
    <Image
      src=""
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <Input/>
    </main>
    
    <Footer/>
    </>
  )
}
export default page
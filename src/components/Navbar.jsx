import React, { useState } from 'react'
import Button from './Button'
function Navbar() {
  const [val, setVal] = useState()
  const mover = (val)=>{
    setVal(val)
  }
  return (
    <div className='max-w-screen-xl flex items-center justify-between p-3 mx-auto py-6 border-b-[1px] border-zinc-700'>
        <div className=' flex items-center'>
          <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          <div className="links flex gap-10 ml-20">
            {["Home","Work", "Culture","","News"].map((item, index)=>
              (item.length ===0)?<span className='w-[2px] h-7 bg-zinc-700'></span>:<a onClick={()=>mover(index)} href='#' className='font-regular text-sm flex items-center gap-1'>
              {index===val?<span style={{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block w-1 h-1 bg-green-600 rounded-full'></span>:null}{item}</a>
            )}
          </div>
        </div>
        <Button />
    </div>
  )
}

export default Navbar
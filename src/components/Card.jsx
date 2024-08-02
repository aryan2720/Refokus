import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { TiArrowRight } from "react-icons/ti";
function Card({width, start, para, hover="false", contact}) {
  const [val, setVal] = useState(false)
  function setHoverEnter(){
    return setVal(true)
  }
  function handleHoverOut(){
    return setVal(false)
  }
  return (
    <motion.div whileHover={{backgroundColor: hover===true?"#7443FF":null, padding:"25px" }} className={`${width} bg-zinc-800 p-5 rounded-lg min min-h-[30rem] flex flex-col justify-between`}>
        <div className='w-full'>
            <div className='w-full flex justify-between items-center'>
                <h3>Uplide</h3>
                <TiArrowRight />
            </div>
            <h1 className='text-2xl'>Whatever Heading</h1>
        </div>
        <div className='down w-full'>
            {start?<h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>:null}
            {contact?<motion.button onMouseEnter={()=>setHoverEnter()} onMouseLeave={()=>handleHoverOut()} className='rounded-full w-[10vw] h-[3.5vw] py-2 px-3 border-[1.2px] border-zinc-500 mt-4 overflow-hidden'>
              <motion.div initial={{y: val===true?"0":"0"}} animate={{y: val===true?"-100%":null}} transition={{ease: [0.45, 0, 0.55, 1], duration: 0.3}} className='px-2 py-1'>contact us</motion.div>
              <motion.div initial={{y: val===true?"0":"0"}} animate={{y: val===true?"-100%":null}} transition={{ease: [0.45, 0, 0.55, 1], duration: 0.3}} className='px-2 py-1'>show more</motion.div>
            </motion.button>:null}
            
            {para?<p className='text-sm text-zinc-500 font-regular mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>:null}
        </div>
    </motion.div>
  )
}

export default Card
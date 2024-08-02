import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { PiArrowBendDownRightFill } from "react-icons/pi";
function Button({title = "Get Started"}) {
  const [val, setVal] = useState(false)
  function setHoverEnter(){
    return setVal(true)
  }
  function handleHoverOut(){
    return setVal(false)
  }
  console.log("prev: "+val)
  return (
    <motion.div onMouseEnter={()=>setHoverEnter()} onMouseLeave={()=>handleHoverOut()} className='px-2 py-1relative bg-zinc-100 text-black rounded-full overflow-hidden h-[2.5rem]'>
      <motion.div initial={{y: val===true?"0":"0"}} animate={{y: val===true?"-100%":null}} transition={{ease: [0.45, 0, 0.55, 1], duration: 0.6}} className='rounded-full px-4 py-2 w-40 flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <PiArrowBendDownRightFill />
      </motion.div>
      <motion.div initial={{y: val===true?"0":"0"}} animate={{y: val===true?"-100%":null}} transition={{ease: [0.45, 0, 0.55, 1]}} className='rounded-full px-4 py-2 w-40 flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <PiArrowBendDownRightFill />
      </motion.div>
    </motion.div>
  )
}

export default Button
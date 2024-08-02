import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
    var products = [
        {title: "arqitle", description: " Description of product", live: true, case: false},
        {title: "TTR", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false},
        {title: "YIR 2022", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: true},
        {title: "Yahoo", description: " A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true},
        {title: "Maniv", description: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.", live: false, case: true},
    ]    
    const [pos, setPos] = useState()
    const mover = (val) => {
        setPos(val*20)
    }
  return (
    <div className='mt-32 relative'>
        {products.map((item, index)=><Product values={item} mover={mover} index={index} />)}
        <div className="w-full h-full absolute top-0 pointer-events-none">
            <motion.div initial={{y: pos, x: "-50%"}} animate={{y: pos+'rem'}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className='window w-[32rem] h-[20rem] bg-white absolute left-[44%] overflow-hidden'>
              <motion.div animate={{y: -pos+'rem'}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='window-scene1 w-full h-full'>
                <video loop muted autoPlay src="/Videos/video1.webm" />
              </motion.div>
              <motion.div animate={{y: -pos+'rem'}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='window-scene1 w-full h-full'>
                <video loop muted autoPlay src="/Videos/video2.webm" />
              </motion.div>
              <motion.div animate={{y: -pos+'rem'}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='window-scene1 w-full h-full'>
                <video loop muted autoPlay src="/Videos/video3.webm" />
              </motion.div>
              <motion.div animate={{y: -pos+'rem'}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='window-scene1 w-full h-full'>
                <video loop muted autoPlay src="/Videos/video4.webm" />
              </motion.div>
              <motion.div animate={{y: -pos+'rem'}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='window-scene1 w-full h-full'>
                <video loop muted autoPlay src="/Videos/video5.mp4" />
              </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products


//Jab Parent component m kuch change krna ho child component mein kuch hone ki vajah se Tb function ya methods ko parent component pe bnayiye unhe props ke through child pe bhejdijiye aur vahan par chla dijie


//upr framer motion lgana h pehle toh 
//Convert kro window div ko motion.div mein
//Jab bhi initial mein y ki value doge toh class mein translate kaam krna bnd kr deta h fer tumhe vhi x ki value deni pdti h 
//animate ke time p setPos ki value ko agr hum 20rem kr denge toh window neeche khisk jayega
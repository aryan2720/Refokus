import React, { useState } from 'react'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
function Work() {
    const [images, setImages] = useState([
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "50%", isActive: false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "56%", left: "44%", isActive: false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "45%", left: "56%", isActive: false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "60%", left: "53%", isActive: false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "43%", left: "40%", isActive: false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "60%", left: "55%", isActive: false},
    ])
    //Hum teen cheejein le skte h useScroll se scrollYProgress scrollXProgress scrollx
    const {scrollYProgress} = useScroll()
    /* //This function useMotionValueEvent provides the scrollY value on scrolling down the page    
    useMotionValueEvent(scrollYProgress, "change", (latest)=>{
        showAndHideImages(Math.floor(latest*100)) // his will give us the progress of scroll in percentage
    }) */

    function imagesShow(arr){
        setImages((prev)=>prev.map((item, index)=>(
            arr.indexOf(index)==-1?{...item, isActive:false}:{...item, isActive:true}
        )))
    }    
    scrollYProgress.on("change",(data)=>{
        switch(Math.floor(data*100)){
            case 0:
                imagesShow([])
                break
            case 2:
                imagesShow([0])
                break
            case 4:
                imagesShow([0,1])
                break
            case 6:
                imagesShow([0,1,2])
                break
            case 9:
                imagesShow([0,1,2,3])
                break
            case 11:
                imagesShow([0,1,2,3,4])
                break
            case 13:
                imagesShow([0,1,2,3,4,5])
                break
        } })
    

  return (
    <div className='w-full mt-10'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[30vw] leading-none font-medium tracking-tight select-none'>work</h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map((item, index)=>item.isActive?<img className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={item.url} style={{top: item.top, left: item.left}} alt={index} />:null
                )}
            </div>
        </div>
    </div>
  )
}

export default Work
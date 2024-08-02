import React from 'react'
import Button from './Button'
function Product({values, mover, index}) {
    var {title, description} =values
  return (
    //Border hta diyo animations krne ke baad
    <div className='w-full py-10 h-[20rem]'>
        <div onMouseEnter={()=>mover(index)} className='max-w-screen-xl mx-auto flex justify-between items-center'>
            <h1 className='text-6xl capitalize font-semibold'>{title}</h1>
            <div className='details w-1/3'>
                <p className='mb-10'>{description}</p>
                <div className='flex items-center gap-2'>
                    {values.live===true?(<Button title='Live Website' />):null}
                    {values.case===true?(<Button title='Case Study' />):null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
import React from 'react'

function Stripe({values}) {
    var {url, number} = values
  return (
      <div className='w-[16.66%] px-3 py-5 border-t-[1.3px] border-r-[1.3px] border-b-[1.3px] border-zinc-600 flex justify-between items-center'>
        <img src={url} alt="image" />
        <span className='font-semibold'>{number}</span>
      </div>
  )
}

export default Stripe
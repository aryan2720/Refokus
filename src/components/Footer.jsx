import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-3'>
                <div className='basis-1/3'>
                    <h3 className='mb-10 text-zinc-500 capatilize'>Socials</h3>
                    {["instagram", "twitter (x?)", "LinkedIn"].map((item)=><a className='block mt-2  capitalize text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h3 className='mb-10 text-zinc-500 capatilize'>Sitemap</h3>
                    {["Home", "Work", "Careers", "Contact"].map((item)=><a className='block mt-2  capitalize text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col justify-end gap-3'>
                    <p className='text-sm tracking-tighter leading-none text-zinc-600 text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis reprehenderit beatae nihil quidem voluptates pariatur id officia eius similique labore.</p>
                    <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
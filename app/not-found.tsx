import React from 'react'
import { Button } from './components/library/Button'
import Link from 'next/link'



const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center space-y-6 pb-12'>
      <video  
       autoPlay
       muted
       loop
       className=" flex flex-col object-cover h-full w-full"
      >
        <source src="oops-video.mp4" type="video/mp4"  />
      </video>
      <Link href={"/"}>
      <button  className='bg-amber-500 text-white rounded-md px-3 py-2'
      >
        Go back home
      </button>
      </Link>
    </div>
  )
}

export default NotFoundPage
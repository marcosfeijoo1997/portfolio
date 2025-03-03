import React from 'react'
import CardPortafolio from '@/components/CardPortafolio'

const page = () => {
  return (
    <div className="flex flex-col gap-20 h-screen">
    <div className="contenedor"></div>
    <div className="text-5xl  text-white relative w-full min-w-[500px] gap-6 mx-auto mt-40" id="inicio">
        <CardPortafolio/>

        </div>
    </div>
  )
}

export default page

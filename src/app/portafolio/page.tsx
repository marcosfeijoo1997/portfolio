"use client"
import React from 'react'
import CardPortafolio from '@/components/CardPortafolio'
import { TextCustomColor, BgCustomColor,Container } from '@/components/StylesPredeterm';


const page = () => {
  const textWhite=TextCustomColor()
  const Contenedor=Container()

  return (
    <div className="flex flex-col h-screen">
    <div className={`${Contenedor}`}></div>
    <div className={`text-5xl relative w-full min-w-[500px] mx-auto mt-20 ${textWhite}`} id="inicio">
        <CardPortafolio/>

        </div>
    </div>
  )
}

export default page

"use client"
import React from 'react'
import { motion } from "framer-motion";
import UncontrolledExample from '@/components/Carousel'
import { TextCustomColor, BgCustomColor,Container } from '@/components/StylesPredeterm';
import {useThemeStore} from '@/app/store/LightStore'

const Index = () => {
  const textWhite=TextCustomColor()
  const Contenedor=Container()



  return (


      <div className={`flex flex-col h-screen ${textWhite}`}>
  <div className={`${Contenedor}`}></div>
  <div className={`text-4xl relative w-1/3 min-w-[500px] mx-auto mt-16`} id="inicio">
<section className="flex flex-col  m-auto font-medium">

<h1 className='w-full '>Hola, soy Marcos Feijoo</h1>
<h1 className='text-end '>Front-end developer</h1>






</section>



</div>
<div className='text-2xl relative w-2/3 min-w-[500px] mx-auto mt-20'>Soy un desarrollador front-end con experiencia en el diseño y desarrollo de sitios web y aplicaciones interactivas. Mi objetivo principal es crear experiencias de usuario atractivas y funcionales utilizando las últimas tecnologías web.</div>
<div className='flex w-2/3 mx-auto'>

   <UncontrolledExample/>
   </div>


  </div>


  )
}

export default Index

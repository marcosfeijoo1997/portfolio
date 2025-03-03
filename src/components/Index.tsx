"use client"
import React from 'react'
import { motion } from "framer-motion";
import UncontrolledExample from '@/components/Carousel'

const Index = () => {



  return (

      <div className="flex flex-col gap-20 h-screen">
  <div className="contenedor"></div>
  <div className="text-5xl  text-white relative w-1/3 min-w-[500px] gap-6 mx-auto mt-16" id="inicio">
<section className="flex flex-col  m-auto">

<h1 className='w-full'>Hola, soy Marcos Feijoo</h1>
<h1 className='text-end '>Front-end developer</h1>



</section>



</div>
<div className='text-3xl  text-white relative w-2/3 min-w-[500px] gap-6 mx-auto'>Soy un desarrollador front-end con experiencia en el diseño y desarrollo de sitios web y aplicaciones interactivas. Mi objetivo principal es crear experiencias de usuario atractivas y funcionales utilizando las últimas tecnologías web.</div>
<div className='flex w-2/3 mx-auto'>
   <UncontrolledExample/>
   </div>


  </div>


  )
}

export default Index

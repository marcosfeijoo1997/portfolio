"use client"
import React from 'react'

import UncontrolledExample from '@/components/Carousel'
import { TextCustomColor,Container } from '@/components/StylesPredeterm';


const Index = () => {
  const textWhite=TextCustomColor()
  const Contenedor=Container()



  return (


      <div className={`flex flex-col h-screen ${textWhite}`}>
  <div className={`${Contenedor}`}></div>
  <div className={`text-4xl relative sm:w-1/3 sm:min-w-[500px] mx-auto mt-16`} id="inicio">
<section className="flex flex-col  m-auto font-medium">

<h1 className='w-full '>Hola, soy Marcos Feijoo</h1>
<h1 className='sm:text-end '>Front-end developer</h1>






</section>



</div>
<div className='text-2xl relative max-w-[1200px]  mx-auto mt-20 p-10'>Soy un desarrollador front-end con experiencia en el diseño y desarrollo de sitios web y aplicaciones interactivas. Mi objetivo principal es crear experiencias de usuario atractivas y funcionales utilizando las últimas tecnologías web.</div>


   <UncontrolledExample/>



  </div>


  )
}

export default Index

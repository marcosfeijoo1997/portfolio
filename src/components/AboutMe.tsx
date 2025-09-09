"use client"
import React from 'react'
import {Tecnologias, HerramientasBack,DataBase} from './SvgContainer'
import {TextCustomColor,Container,CardContainer} from '@/components/StylesPredeterm'




const AboutMe = () => {
  const textWhite=TextCustomColor()
  const Contenedor=Container()
  const CardLight=CardContainer()



  return (
    <div className={`flex ${textWhite}`}>
    <div className={`${Contenedor}`}></div>
    <div className="flex flex-col relative text-xl w-[1200px]  mx-auto gap-4  mt-16 h-screen" id='about-me'>
      <h1 className='text-4xl '>Sobre  mi</h1>
<p> Soy un desarrollador front-end con experiencia en el diseño y desarrollo de sitios web y aplicaciones interactivas. Mi objetivo principal es crear experiencias de usuario atractivas y funcionales utilizando las últimas tecnologías web.</p> 



Tengo experiencia en la creación de diseños atractivos y responsivos. Estoy al tanto de las últimas tendencias en diseño web.
Experiencia en el desarrollo de aplicaciones web utilizando React. Puedo crear componentes reutilizables, gestionar el estado de la aplicación y trabajar con enrutamiento para crear aplicaciones de una sola página (SPA) eficientes y fáciles de mantener.

<p>
Estoy familiarizado con el control de versiones y utilizo Git y GitHub para colaborar en proyectos y gestionar el código fuente de manera efectiva, estoy acostumbrado a trabajar en equipos en distintas ramas y poder trabajar en conjunto.
</p>
<h1 className='mt-20 text-4xl w-[1200px] mx-auto'>Tecnologias front-end</h1>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-[1200px] mx-auto'>
{Object.values(Tecnologias).map((elem) => (
  <div key={elem.title}>

 <div className={`w-full h-full  flex  items-center rounded-lg min-w-[170px] ${CardLight}`}>
 <p className='m-4'>{elem.svg()} </p>
 <p>{elem.title}</p>
 </div>
 

 </div>

))}
</div>

<h1 className='text-4xl w-[1200px] mx-auto'>Tecnologias back-end</h1>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-[1200px] mx-auto'>
{Object.values(HerramientasBack).map((elem) => (
  <div key={elem.title}>

<div className={`w-full h-full  flex  items-center rounded-lg min-w-[170px] ${CardLight}`}>
 <p className='m-4'>{elem.svg()} </p>
 <p>{elem.title}</p>
 </div>
 

 </div>

))}
</div>

<h1 className='text-4xl w-[1200px] mx-auto'>Base de datos</h1>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-[1200px] mx-auto  pb-8'>
{Object.values(DataBase).map((elem) => (
  <div key={elem.title}>


<div className={`w-full h-full  flex  items-center rounded-lg min-w-[170px] ${CardLight}`}>
 <p className='m-4'>{elem.svg()} </p>
 <p>{elem.title}</p>
 
 </div>
 

 </div>

))}
</div>

 </div>

 </div>
  )
}

export default AboutMe

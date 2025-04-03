"use client"
import React from 'react'
import ContactForm from '@/components/ContactForm'
import {Container,TextCustomColor,CardContainer} from '@/components/StylesPredeterm'
import Link from 'next/link'
const page = () => {
  const Contenedor=Container()
  const TextCustom=TextCustomColor()
  const CardLight=CardContainer()
  return (
    <div className='flex'>
    <div className={`${Contenedor}`}></div>
    
   
    <div className={`flex flex-col relative text-2xl mt-16 w-2/3 mx-auto gap-4 h-screen max-w-md ${TextCustom}`}id='contacto'>
    <h1 className={`font-normal text-4xl  ${TextCustom} `}>Contacto</h1>

  

      <ContactForm/>

<div className='mt-20'>
  <h1 className='mx-auto'>Otras redes</h1>
  <div className={`flex flex-col sm:flex-row sm:p-6 p-2 bg-gray-300 rounded-lg text-center 
${CardLight}`}>
  <Link href="https://mail.google.com/mail/?view=cm&to=marcosfeijoo97@gmail.com&su=Consulta&body=Hola, quiero más información acerca de tu perfil." className='w-1/2 flex mx-auto justify-center'>
   
  <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 mx-2' aria-label="Gmail" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#ffffff"/><path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"/><path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"/><path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"/><path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"/><path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"/></svg>Gmail</Link>
  <Link href="https://www.linkedin.com/in/marcos-feijoo-b80b2b175/" className='w-1/2 flex mx-auto justify-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 16 16"  className='w-8 h-8'><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
    </svg>Linkedin</Link>
    </div>

</div>
    </div>
    </div>
  )
}

export default page

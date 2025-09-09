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
  <h1 className='pb-4 text-center'>Contactame</h1>
  <div className={`flex flex-col sm:flex-row sm:p-6 p-2 bg-gray-300 rounded-lg text-center 
${CardLight}`}>
  <Link href="https://mail.google.com/mail/?view=cm&to=marcosfeijoo97@gmail.com&su=Consulta&body=Hola, quiero más información acerca de tu perfil." className='w-1/2 flex mx-auto justify-center'>
   
  <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 mx-2' aria-label="Gmail" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#ffffff"/><path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"/><path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"/><path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"/><path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"/><path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"/></svg>Gmail</Link>
  <Link href="https://www.linkedin.com/in/marcos-feijoo-b80b2b175/" className='w-1/2 flex mx-auto justify-center'>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" className='w-8 h-8 mx-2'><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
    </svg>Linkedin</Link>
    <Link href="https://firebasestorage.googleapis.com/v0/b/proyecto-2-d331f.appspot.com/o/CV%20nuevo%2021-3-2025.pdf?alt=media&token=57ab52b4-0ed4-4dfc-93cf-d1a03a08630d" className='w-1/2 flex mx-auto justify-center'>
    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 mx-2' viewBox="0 0 20 20" fill="#000000"><g fill="#000000"><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01Z"/><path fillRule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24v-.51ZM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/><path fillRule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2v-15Zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006Z" clipRule="evenodd"/><path fillRule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1Z" clipRule="evenodd"/></g></svg>
Mi CV</Link>
    </div>

</div>
    </div>
    </div>
  )
}

export default page

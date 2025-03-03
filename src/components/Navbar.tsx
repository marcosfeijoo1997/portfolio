"use client"
import React, { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [hoverState,setHoverState]=useState("")

let hover="hover:bg-opacity-[0.5] relative cursor-pointer after:block after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 after:origin-left hover:after:w-full"

function activeHover(item:string){
  setHoverState(item)
}
const clickedStyle = (item: string) => {
  if (hoverState === item) {
    return "relative cursor-pointer after:block after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-900 after:origin-left after:w-full";
  }
  return ""; 
};
  return (
    <header className="fixed z-[100] flex w-full mx-auto bg-dark text-white text-custom navbar">
      <ul className="flex">
      <Link href="/">   <li className={`px-4 py-3  ${clickedStyle("inicio")} ${hover}`} onClick={()=>activeHover("inicio")}>Inicio</li></Link>
      <Link href="/about">     <li className={`px-4 whitespace-nowrap py-3  ${clickedStyle("about")} ${hover}`}  onClick={()=>activeHover("about")}>Sobre mí</li></Link>
      <Link href="/portafolio">  <li className={`px-4 py-3 ${clickedStyle("portafolio")} ${hover}`} onClick={()=>activeHover("portafolio")}>Portafolio</li></Link>
        <li className={`px-4 py-3 ${clickedStyle("contacto")} ${hover}`} onClick={()=>activeHover("contacto")}>Contacto</li>
      </ul>
      <ul className="flex w-full justify-end  mr-10 fill-white">
        <li className='p-3 py-3'>
        <svg width="20px" height="20px" viewBox="0 0 16 16" ><path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/></svg>
            </li>
        <li className='p-3 py-3'><svg width="20px" height="20px" viewBox="0 0 16 16"  ><path  d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clipRule="evenodd"/></svg></li>
        <li className='p-3 py-3 '><svg  className="h-5 w-5" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg></li>
        <li className='p-3 py-3 '><svg width="20px" height="20px" viewBox="0 0 24 24" role="img"  aria-labelledby="languageIconTitle" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" > <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"/> <path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> </svg></li>
      </ul>
    </header>
  );
};

export default Navbar;

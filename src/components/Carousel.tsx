import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '@/components/style.css'
import img1 from '@/assets/Ferreteria.png'
import img2 from '@/assets/Pagina2.png'
import img3 from '@/assets/Pagina3.png'
import img4 from '@/assets/Pagina4.png'
import img5 from '@/assets/Pagina5.png'


export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{paddingBottom:"100px"}}
      >
        <SwiperSlide>
       <Image src={img1} alt='img' className='rounded-t-md h-[200px]'/>
       <div className='bg-dark text-white rounded-b-md  gap-2 flex flex-col pt-2 pb-4 '>
       <h1 className='text-2xl mx-auto'>Ferreteria Dufer</h1>
       <p className='text-lg'>Proyecto realizado para ferreteria de forma freelance</p>
       <button className='cursor-pointer bg-customblue rounded-xl p-1 w-64 mx-auto text-lg'>ver mas...</button>
       
       </div>
        </SwiperSlide>
        <SwiperSlide>
       <Image src={img2} alt='img' className='rounded-t-md h-[200px]'/>
       <div className='bg-dark text-white rounded-b-md  gap-2 flex flex-col pt-2 pb-4 '>
       <h1 className='text-2xl mx-auto'>Muebles industriales</h1>
       <p className='text-lg'>Proyecto realizado para muebleria industrial</p>
       <button className='cursor-pointer bg-customblue rounded-xl p-1 w-64 mx-auto text-lg'>ver mas...</button>
       
       </div>
        </SwiperSlide>
        <SwiperSlide>
       <Image src={img3} alt='img' className='rounded-t-md h-[200px]'/>
       <div className='bg-dark text-white rounded-b-md  gap-2 flex flex-col pt-2 pb-4 '>
       <h1 className='text-2xl mx-auto'>Calculadora de angulos</h1>
       <p className='text-lg'>Proyecto realizado para el calculo de angulos en corte en X</p>
       <button className='cursor-pointer bg-customblue rounded-xl p-1 w-64 mx-auto text-lg'>ver mas...</button>
       
       </div>
        </SwiperSlide>
        <SwiperSlide>
       <Image src={img4} alt='img' className='rounded-t-md h-[200px]'/>
       <div className='bg-dark text-white rounded-b-md  gap-2 flex flex-col pt-2 pb-4 '>
       <h1 className='text-2xl mx-auto'>4 en linea</h1>
       <p className='text-lg'>Juego conocido para jugar de a 2 en el mismo ordenador</p>
       <button className='cursor-pointer bg-customblue rounded-xl p-1 w-64 mx-auto text-lg'>ver mas...</button>
       
       </div>
        </SwiperSlide>
        <SwiperSlide>
       <Image src={img5} alt='img' className='rounded-t-md h-[200px]'/>
       <div className='bg-dark text-white rounded-b-md  gap-2 flex flex-col pt-2 pb-4 '>
       <h1 className='text-2xl mx-auto'>Distribuidora de caños</h1>
       <p className='text-lg'>Proyecto realizado de manera freelance para empresa distribuidora de caños</p>
       <button className='cursor-pointer bg-customblue rounded-xl p-1 w-64 mx-auto text-lg'>ver mas...</button>
       
       </div>
        </SwiperSlide>
     
      </Swiper>
    </>
  );
}

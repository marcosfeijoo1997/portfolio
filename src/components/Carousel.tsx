import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "@/components/style.css";
import img1 from "@/../public/images/Ferreteria.png";
import img2 from "@/../public/images/Pagina2.png";
import img3 from "@/../public/images/Pagina5.png";
import img4 from "@/../public/images/Pagina6.png";

import Link from "next/link";
import { TextCustomColor, BgCustomColor } from "./StylesPredeterm";

export default function App() {
  const ArrayOfCards = [
    {
      img:img4,
      title:"SwaplyAr",
      descripcion:"Plataforma de cambio de divisas realizada con grupo de desarrolladores"
    },{
    img:img1,
    title:"Ferreteria Dufer",
    descripcion:"Proyecto realizado para ferreteria de forma freelance"
  },
  {
    img:img2,
    title:"Muebles industriales",
    descripcion:"Proyecto realizado para muebleria industrial"
  },
  {
    img:img3,
    title:"Distribuidora de caños",
    descripcion:"Proyecto realizado de manera freelance para empresa distribuidora de caños"
  }];

  const textWhite = TextCustomColor();
  const bgDark = BgCustomColor();
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        autoHeight={true}
        
   
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: true,
      
          
        
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{ paddingBottom: "100px"}}
      >
        <div className="p-10">

{ArrayOfCards.map((elem,index)=>(
    <SwiperSlide key={index}>
         <Image src={elem.img} alt="img" className="rounded-t-md h-[200px]" />
          <div
            className={`${textWhite} ${bgDark} rounded-b-md  gap-2 flex flex-col pt-2 pb-4 px-2`}
          >
            <h1 className="text-2xl mx-auto">{elem.title}</h1>
            <p className="text-lg">
{elem.descripcion}            </p>
            <Link href="/portafolio" className="mx-auto">
              <button className="cursor-pointer bg-blue-500 rounded-xl p-1 w-64  text-lg font-medium text-white">
                ver mas...
              </button>
            </Link>
          </div>
    </SwiperSlide>

))}
</div>




      
     
   

    
      </Swiper>
    </>
  );
}

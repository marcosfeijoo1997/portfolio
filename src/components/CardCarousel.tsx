"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "@/assets/Ferreteria.png";
import img2 from "@/assets/Pagina2.png";
import img3 from "@/assets/Pagina3.png";

const images = [img1, img2, img3];

export default function CustomCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={3} 
      centeredSlides={true} 
      navigation 
      loop={true} 
      spaceBetween={20} 
    
      breakpoints={{
        768: { slidesPerView:3 }, // 3 imágenes en pantallas medianas/grandes
        480: { slidesPerView: 1 }, 
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="transition-transform duration-300" > 
          <div className="relative w-full h-64">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 scale-100 group-hover:scale-110"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

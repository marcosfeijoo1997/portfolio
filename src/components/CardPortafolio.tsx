import React from "react";
import Image from "next/image";
import img1 from "@/assets/Ferreteria.png";
import img2 from "@/assets/Pagina2.png";

import img5 from "@/assets/Pagina5.png";
import img6 from "@/assets/Pagina6.png";

const cardsInfo = [
  {
    title: "SwaplyAr -Plataforma de cambio de divisas",
    image: img6,
    description:
      "Participé en el desarrollo de SwaplyAr, una plataforma que permite a los usuarios cambiar saldo de PayPal a Payoneer, Wise, Pix, Tether y realizar transferencias de pesos argentinos de manera rápida y segura. Trabajé en el front-end con React, Tailwind CSS, TypeScript y Zustand para una gestión eficiente del estado global. El backend se desarrolló con Node.js, Express y MongoDB, asegurando un sistema escalable y confiable. Además, integramos Cloudinary para el almacenamiento de archivos, optimizando la gestión de comprobantes de pago y otros documentos. El proyecto fue desarrollado en equipo, enfocándonos en una experiencia de usuario intuitiva y un flujo de operaciones ágil y seguro.",
  },
  {
    title: "Ferreteria Dufer",
    image: img1,
    description:
      "Desarrollé un e-commerce para Ferretería Dufer, permitiendo a los usuarios explorar y comprar productos de ferretería de manera sencilla. La plataforma incluye un carrito de compras dinámico, donde los clientes pueden agregar, eliminar y modificar productos, así como finalizar compras de manera segura. Toda la gestión de productos, pedidos y autenticación de usuarios se maneja a través de Firebase, lo que garantiza una experiencia rápida y confiable. La interfaz está diseñada con React, Bootstrap, tailwind CSS y TypeScript, asegurando un diseño moderno y adaptable a cualquier dispositivo.",
  },
  {
    title: "La forja muebles industriales",
    image: img2,
    description:
      "Desarrollé un e-commerce para La forja muebles industriales, una tienda especializada en la venta de mesas y sillas de estilo industrial. La plataforma permite a los usuarios explorar el catálogo de productos, agregar artículos al carrito y finalizar compras de manera sencilla. Toda la gestión de productos, pedidos y autenticación de usuarios se maneja con Firebase, garantizando seguridad y eficiencia. La interfaz, desarrollada con React, Tailwind CSS y TypeScript, ofrece un diseño moderno, intuitivo y completamente responsive para una experiencia de compra óptima en cualquier dispositivo.",
  },
  {
    title: "Hierrofe",
    image: img5,
    description:
      "Desarrollé un e-commerce para HierroFe, una empresa especializada en la venta de caños estructurales, hierro, varillas y otros materiales metálicos. La plataforma permite a los usuarios explorar el catálogo de productos, agregar artículos al carrito y realizar compras de manera sencilla y eficiente. El backend fue desarrollado con Node.js, Express y MongoDB, proporcionando una gestión robusta y escalable de productos, pedidos y usuarios. La interfaz, creada con Next, Tailwind CSS y TypeScript, ofrece un diseño moderno, intuitivo y completamente responsive para una experiencia de compra fluida en cualquier dispositivo.",
  },

];

const CardPortafolio = () => {
  return (
    <div className="max-w-[1200px] list-none mx-auto text-xl">
    
      <p className="text-[36px]">Mis proyectos</p>
      {cardsInfo.map((elem, index) => (
        <li
          key={index}
          className={`rounded-lg m-5 flex my-20 max-w-[1200px]  gap-6 ${
            index % 2 == 1? "flex-col   lg:flex-row-reverse ":"flex-col  lg:flex-row"
          }`}
        >
          <Image
            src={elem.image}
            alt="img"
            className="rounded-lg w-1/2 h-1/3 my-auto px-6 mx-auto"
          />
          <div className="flex flex-col w-1/2 mx-auto">
            <h1 className="my-auto mx-6 text-center text-3xl font-medium">
              {elem.title}
            </h1>
            <p className="my-auto mx-6">{elem.description}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CardPortafolio;

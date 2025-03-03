import React from 'react'
import Image from 'next/image';
import img1 from '@/assets/Ferreteria.png'
import img2 from '@/assets/Pagina2.png'
import img3 from '@/assets/Pagina3.png'
import img4 from '@/assets/Pagina4.png'
import img5 from '@/assets/Pagina5.png'


const CardPortafolio = () => {
  return (
    <div className='w-2/3 list-none mx-auto text-xl '>
        <li className='rounded-lg m-5 flex my-6'>
        <Image src={img1} alt='img' className='rounded-lg w-1/3 h-1/3 my-auto' />
        <div className='flex flex-col w-7/12'>
        <h1 className='my-auto mx-6 text-center text-3xl'>Fereteria Duffer</h1>
        <p className='my-auto mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus quis autem quia deserunt, reprehenderit error tenetur temporibus, doloribus eum, officiis sint et velit. Nobis distinctio voluptas sit porro iusto.</p>
        </div>
        </li>
        <li className='rounded-lg m-5 flex my-6 flex-row-reverse'>
        <Image src={img2} alt='img' className='rounded-lg w-1/3 h-1/3 my-auto' />
        <div className='flex flex-col w-7/12'>
        <h1 className='my-auto mx-6 text-center text-3xl'>Fereteria Duffer</h1>
        <p className='my-auto mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus quis autem quia deserunt, reprehenderit error tenetur temporibus, doloribus eum, officiis sint et velit. Nobis distinctio voluptas sit porro iusto.</p>
        </div>
        </li>
        <li className='rounded-lg m-5 flex my-6'>
        <Image src={img3} alt='img' className='rounded-lg w-1/3 h-1/3 my-auto' />
        <div className='flex flex-col w-7/12'>
        <h1 className='my-auto mx-6 text-center text-3xl'>Fereteria Duffer</h1>
        <p className='my-auto mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus quis autem quia deserunt, reprehenderit error tenetur temporibus, doloribus eum, officiis sint et velit. Nobis distinctio voluptas sit porro iusto.</p>
        </div>
        </li>
        <li className='rounded-lg m-5 flex my-6 flex-row-reverse'>
        <Image src={img4} alt='img' className='rounded-lg w-1/3 h-1/3 my-auto' />
        <div className='flex flex-col w-7/12'>
        <h1 className='my-auto mx-6 text-center text-3xl'>Fereteria Duffer</h1>
        <p className='my-auto mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus quis autem quia deserunt, reprehenderit error tenetur temporibus, doloribus eum, officiis sint et velit. Nobis distinctio voluptas sit porro iusto.</p>
        </div>
        </li>
        <li className='rounded-lg m-5 flex my-6'>
        <Image src={img5} alt='img' className='rounded-lg w-1/3 h-1/3 my-auto' />
        <div className='flex flex-col w-7/12'>
        <h1 className='my-auto mx-6 text-center text-3xl'>Fereteria Duffer</h1>
        <p className='my-auto mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus quis autem quia deserunt, reprehenderit error tenetur temporibus, doloribus eum, officiis sint et velit. Nobis distinctio voluptas sit porro iusto.</p>
        </div>
        </li>
      
        
        
      
      
    </div>
  )
}

export default CardPortafolio

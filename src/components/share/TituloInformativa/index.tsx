'use client';
import { useEffect, useRef } from 'react';
import { buttonVariants } from "@/components/ui/button"


// Utils
//styles
// import './style.css';
import { saltoLinea } from '@/lib/utils';

const TitulosInformativa = ({
  titulo = '',
  descripcion = '',
  imagen = '',
  action,
  activeButton = false,
  urlBtn = '',
  tipo = {},
}: any) => {
//   const navigate = useNavigate();

  const tituloRef = useRef(null);
  const descripcionRef = useRef(null);

//   const handleClick = () => {
//     navigate(urlBtn, { state: tipo });
//   };

  useEffect(() => {
    tituloRef.current.innerHTML = saltoLinea(titulo);
    descripcionRef.current.innerHTML = saltoLinea(descripcion);
  }, [descripcion, titulo]);

  return (
      <div className="relative bg-primary grid grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 rounded-[20px] text-center justify-center lg:text-left lg:justify-around">
        <div className='min-w-[345px] lg:w-[630px] lg:-translate-x-32 -translate-y-5 lg:order-1'>
          <img className='lg:left-3 w-full h-full' src={imagen} alt="Imagen principal"/>
        </div>
        <div className="lg:px-16 lg:col-span-2 text-white text-center mb-12 lg:text-left">
          <h1
            className=" text-[22px] lg:mt-12 xl:text-[45px]"
            ref={tituloRef}
          >
            {titulo}
          </h1>
          <p
            className="fontPRegular text-[15px] mt-4 sm:text-base"
            ref={descripcionRef}
          >
            {descripcion}
          </p>
          {action}
        </div>
      </div>
  );
};

export default TitulosInformativa;

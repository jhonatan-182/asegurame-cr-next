'use client';
import { useEffect, useState } from 'react';
import CarouselCustom from '../share/molecules/CarouselCustom';


const CardNosotros = () => {
  const [initialized, setInitialized] = useState(false);

  // Assets
  const AsesorAmigo =
    'https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/Conocenos/Asegurame-AsesorAmigo.webp';
  const ExperienciaCertificacion =
    'https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/Conocenos/Asegurame-Experiencia.webp';
  const PortalLinea =
    'https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/Conocenos/Asegurame-PortalEnLinea.webp';

  const cards = [
    {
      codigo: 'PL',
      imagen: PortalLinea,
      titulo: 'Portal en línea',
      descripcion:
        'Elige, cotiza, compara y adquiere \n tus seguros de manera digital.',
    },
    {
      codigo: 'AA',
      imagen: AsesorAmigo,
      titulo: 'Asesor amigo',
      descripcion:
        'Todo el capital humano de UNISERSE a tu servicio para acompañarte y asesorarte.',
    },
    {
      codigo: 'EC',
      imagen: ExperienciaCertificacion,
      titulo: 'Experiencia y certificación',
      descripcion: ' Más de 27 años acompañando \n a nuestro clientes.',
    },
  ];

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);


  return (
    <div className="mx-auto lg:container">
      <section className="px-4 conocenos-tarjetas pb-16 pt-5 hidden xsm:block">
        <div className="flex py-12">
          {cards.map((item, index) => (
            <div
              key={index}
              className="shadow-general font-semibold hover:scale-105 transition-all duration-300"
            >
              <div className="card-img">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className={`${
                    item.codigo === 'EC'
                      ? 'w-[200px]'
                      : item.codigo === 'AA'
                      ? 'w-[250px]'
                      : 'w-[250px]'
                  }`}
                />
              </div>
              <h3 className="text-primary">{item.titulo}</h3>
              <h4 className='my-3'>{item.descripcion}</h4>
            </div>
          ))}
        </div>
      </section>

      {initialized && (
        <CarouselCustom>
          {cards.map((item, index) => (
            <div>
              <div
              key={index}
              className="flex flex-col shadow-general rounded-[20px] w-[19rem] h-[18rem] justify-center items-center m-auto mt-7"
            >
              <div className="flex justify-center">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className={`${
                    item.codigo === 'EC' ? 'w-[140px]' : 'w-[185px]'
                  }`}
                />
              </div>
              <div className="flex flex-col gap-2 text-center mx-auto mt-4">
                <p className='text-primary font-semibold'>
                  {item.titulo}
                </p>
                <p className='text-sm font-normal text-[#222] mt-3"'>
                  {item.descripcion}
                </p>
              </div>
            </div>
            </div>
            
          ))}
        </CarouselCustom>
      )}
    </div>
  );
};

export default CardNosotros;

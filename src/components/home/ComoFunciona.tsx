import Image from "next/image";

const comoFunciona = [
  {
    id: 1,
    titulo: "Selecciona",
    descripcion: (
      <>
        El seguro que buscas e <br /> ingresa tus datos
      </>
    ),
    urlImage:
      "https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/home/ComoFunciona-Paso1.webp",
  },
  {
    id: 2,
    titulo: "Cotiza y elige",
    descripcion: (
      <>
        Cotizaciones en menos <br /> de 1 minuto
      </>
    ),
    urlImage:
      "https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/home/ComoFunciona-Paso2.webp",
  },
  {
    id: 3,
    titulo: "Contrata tu seguro",
    descripcion: (
      <>
        Contrata y paga <br /> tu seguro en línea
      </>
    ),
    urlImage:
      "https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/home/ComoFunciona-Paso3.webp",
  },
  {
    id: 4,
    titulo: "Siempre contigo",
    descripcion: (
      <>
        Al activar tu seguro, nuestro <br /> equipo de asesores estará a tu lado
      </>
    ),
    urlImage:
      "https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/home/ComoFunciona-Paso4.webp",
  },
];

export default function ComoFunciona() {
  return (
    <>
      {comoFunciona.map((item) => (
        <div
          key={item.id}
          className=" flex flex-col items-center w-[18rem] h-[19rem] shadow-general rounded-xl"
        >
          <Image
            src={item.urlImage}
            width={150}
            height={150}
            alt="Imagen portada Asegurame"
            priority
            className=" my-5"
          />

          <p className="text-body_1 font-semibold text-primary text-center">{`${item.id}. ${item.titulo}`}</p>

          <p className="text-body_movil font-normal text-texto mt-3 text-center ">
            {item.descripcion}
          </p>
        </div>
      ))}
    </>
  );
}

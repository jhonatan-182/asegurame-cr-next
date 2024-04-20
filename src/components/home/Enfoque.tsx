import Image from "next/image";
import EnfoqueItemList from "./EnfoqueItemList";

export default function Enfoque() {
  return (
    <section className="bg-primary mt-16 pt-5 px-7 ">
      <div className="flex flex-col items-center ">
        <Image
          src="https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/home/27years.svg"
          width={70}
          height={70}
          alt="Años Experiencia"
          className="translate-x-[110px] translate-y-2 xs:w-20 xs:h-20 xs:translate-x-[125px] xs:translate-y-6"
        />
        <h2 className="text-white text-titulo_1_movil_xs font-semibold text-center ">
          En asegurame
          <br /> nos enfocamos en vos
        </h2>
      </div>
      <p className="mt-5 text-center text-white text-[13px] font-normal w-[85%] mx-auto">
        Somos una plataforma y corredor digital que te permite manejar tus
        seguros de forma sencilla, desde tu computadora o celular.
      </p>

      <div className="flex flex-col space-y-14 items-center">
        <ul className="list-disc grid grid-cols-2 gap-4 mt-16">
          <div>
            <EnfoqueItemList
              titulo="Cotiza al instante"
              parrafo="Conoce la oferta digital de seguro en Costa Rica."
            />
          </div>
          <div>
            <EnfoqueItemList
              titulo="Ahorra tiempo y dinero"
              parrafo="En pocos clics, obtén y compara coberturas y precios de paquetes diseñados por nuestro equipo técnico."
            />
          </div>
          <div>
            <EnfoqueItemList
              titulo="Tu seguro en línea"
              parrafo="Disfruta de una nueva experiencia en la compra y servicio postventa de tu seguro."
            />
          </div>
          <div>
            <EnfoqueItemList
              titulo="Asesoría gratuita"
              parrafo="Con el respaldo y servicio de UNISERSE, empresa líder del mercado asegurador costarricense."
            />
          </div>
        </ul>

        <Image
          src="https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/home/Asegurame-QueEs.webp"
          width={300}
          height={300}
          alt="Enfoque pergamino "
          className="pb-10"
        />
      </div>
    </section>
  );
}

import ComoFunciona from "@/components/home/ComoFunciona";
import Seguros from "@/components/home/Seguros";
import CarouselCustom from "@/components/share/CarouselCustom";
import CardCustom from "@/components/share/molecules/CardCustom";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Asegurame | Facilitamos tus seguros",
  description:
    "La plataforma digital para cotizar y comprar seguros al instante con un objetivo: Simplificar los Seguros. En alianza con Correduría de seguros Uniserse en Costa Rica.",
  keywords: [
    "asegurame",
    "seguros",
    "cotiza seguro",
    "comprar seguro",
    "seguros en linea",
    "seguros online",
    "aseguradoras en costa rica",
    "correduria de seguros, uniserse",
  ],
};




export default function ConocenosPage() {
  return (
    <div className="flex flex-col gap-[100px]">
      <div className="relative grid xl:grid-cols-2 rounded-[20px] w-full justify-center items-center content-center bg-primary 0 p-5 xl:px-16 mt-20">
        <div className="text-center xl:text-start">
          <h1 className="text-white font-semibold xl:text-4xl">Reconstruimos <br /> la experiencia de seguros</h1>
          <br/>
          <p className="text-white">
            En UNISERSE, fieles a nuestro ADN nos mantenemos innovando en una nueva experiencia al comparar, cotizar y adquirir sus seguros, con el servicio post-venta que siempre nos ha caracterizado.
          </p>
        </div>
        <div className="-order-1 xl:-order-none flex justify-center">
          <Image width={240} height={240} src={"https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/home/ComoFunciona-Paso2.webp"} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h2 className="uppercase font-bold text-secondary">¿Por qué existimos?</h2>
        <p className="text-primary xl:text-3xl font-semibold">
        Asegurame tiene como propósito hacer los seguros más accesibles a través de una experiencia digital,de la mano del servicio, experiencia y trayectoria de <span className="underline text-primary_2">Uniserse</span>.
        </p>
      </div>
      {/* <CarouselCustom>
      </CarouselCustom> */}
    </div>
  );
}

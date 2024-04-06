import Image from "next/image";
import Seguros from "./ui/home/Seguros";
import { TextCustom } from "./ui/share/atoms";

export default function Home() {
  return (
    <header className="mt-24">
      <h1 className="text-primary_2 text-center font-semibold text-h1_movil ">
        Cotiza y Compara
        <span className="block text-primary">de la forma más sencilla</span>
      </h1>

      <p className="text-body_movil text-center mt-5 ">
        Con Asegurame: Tu plataforma digital de seguros{" "}
        <br className="hidden xs:block" /> y de mano de la experiencia y
        servicio de UNISERSE, <br className="hidden xs:block" />
        encuentra tu seguro ideal.
      </p>

      <Seguros />

      <Image
        src="https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/home/Home-Portada.webp"
        width={1000}
        height={500}
        alt="Imagen portada Asegurame"
        priority
      />

      <div>
        <TextCustom text="En alianza con" component={"p"} />
      </div>
    </header>
  );
}

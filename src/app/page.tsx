import Image from "next/image";
import Seguros from "@/components/home/Seguros";
import ComoFunciona from "@/components/home/ComoFunciona";

export default function Home() {
  return (
    <>
      <header className="mt-24">
        <h1 className="text-primary_2 text-center font-semibold text-h1_movil_xs xs:text-h1_movil">
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
        <div className="mt-6 flex flex-col items-center">
          <p className="text-btn_movil font-semibold text-primary text-center">
            En alianza con
          </p>
          <Image
            src={"/images/UNISERSELogo.svg"}
            width={160}
            height={160}
            alt="Logo Uniserse"
            className="mt-3"
            priority
          />
        </div>
      </header>

      <main>
        <h2 className="mt-16 text-primary text-h1_movil_xs text-center font-semibold">
          ¿Cómo <span className="text-primary_2">funciona?</span>
        </h2>

        <ComoFunciona />
      </main>
    </>
  );
}

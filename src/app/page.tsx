import Image from "next/image";
import Seguros from "@/components/home/Seguros";
import ComoFunciona from "@/components/home/ComoFunciona";
import Enfoque from "@/components/home/Enfoque";
import { Container } from "@/components/share/layouts";
import Corredores from "@/components/home/Corredores";
import Aseguradoras from "@/components/home/Aseguradoras";
import CotizaCompara from "@/components/home/CotizaCompara";

export default function Home() {
  return (
    <>
      <Container>
        <header className="mt-24">
          <h1 className="text-primary_2 text-center font-semibold text-titulo_1_movil_xs xs:text-titulo_1_movil">
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
      </Container>

      <main>
        <ComoFunciona />
        <Enfoque />
        <Corredores />
        <Aseguradoras />
        <CotizaCompara />
      </main>
    </>
  );
}

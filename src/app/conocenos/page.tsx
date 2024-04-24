import Link from "next/link";
import TitulosInformativa from "@/components/share/TituloInformativa";
import { Container } from "@/components/share/layouts";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import CardNosotros from "@/components/conocenos/CardsNosotros";


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
  const SimplificarSeguro =
  'https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/Conocenos/Asegurame-Simplificar.webp';
  const AsegurameEquipo =
    'https://aseguramecr.s3.us-east-2.amazonaws.com/Imagenes/Conocenos/Asegurame-Nosotros.webp';

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
  return (
    <Container className="flex flex-col mt-10">
      <TitulosInformativa
        titulo={`Reconstruimos \\n la experiencia de seguros`}
        descripcion={`En UNISERSE, fieles a nuestro ADN nos mantenemos innovando \\n en una nueva experiencia al comparar, cotizar y adquirir sus seguros, \\n con el servicio post-venta que siempre nos ha caracterizado.`}
        imagen={AsegurameEquipo}
        action={
          <Button
            color="secondary"
            className="fontPSemiBold lg:text-xl"
          >Escríbenos</Button>
        }
      />
      <section className="flex flex-col gap-[100px] lg:mt-32 lg:mb-10">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="uppercase font-bold text-secondary">¿Por qué existimos?</h2>
          <p className="text-primary lg:text-3xl font-semibold">
          Asegurame tiene como propósito hacer los seguros más accesibles a través de una experiencia digital,de la mano del servicio, experiencia y <br /> trayectoria de <span className="underline text-primary_2">Uniserse</span>.
          </p>
        </div>
      </section>
      <CardNosotros />
      <section className="px-10 mt-10">
        <div className="mx-auto">
          <div className="pt-16 pb-20 md:px-14 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2  text-center lg:text-left m-auto">
              <div className="px-4 flex justify-center">
                <img src={SimplificarSeguro} alt="SimplificarSeguro" />
              </div>
              <div className="text-primary lg:text-2xl font-semibold lg:leading-10 m-auto">
                <h2 className="fontPSemiBold color-primary ml-4">
                  <p>
                    Desde el 1999, fundamos {' '}
                    <Link
                      className="text-primary_2 underline"
                      href={'https://linktr.ee/uniserse'}
                      target="_blank"
                    >
                      UNISERSE
                    </Link>{' '}
                    con el propósito de llevar{' '}
                    tranquilidad y generar relaciones{' '}
                    de largo plazo con nuestros
                    clientes{' '}
                  </p>
                  <p className="mt-5">
                    Con{' '}
                    <span className="text-secondary">
                      Asegurame{' '}
                    </span>
                    evolucionamos e incursionamos
                    en el diseño y asesoría
                    digital de seguros, sin perder de vista{' '}
                    nuestro propósito.
                  </p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[65px] py-[40px]">
        <div className="flex flex-col items-center mt-8 logo-texto">
          <img src={"./images/UNISERSELogo.svg"} alt="LogoUniserse" className="logo-andina" />
          <p className="texto  fontPRegular color-general mt-5">
            La página{' '}
            <span className="color-primary font-bold">asegurame.cr </span>
            está gestionada por{' '}
            <Link
              href={'https://linktr.ee/uniserse'}
              target="_blank"
              className="texto underline fontPSemiBold"
            >
              UNISERSE
            </Link>
          </p>

          <p></p>
        </div>
      </section>
      
    </Container>
  );
}

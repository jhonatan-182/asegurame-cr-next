import { corredores } from "@/data/corredores";
import { Container } from "../share/layouts";
import Image from "next/image";

export default function Corredores() {
  return (
    <Container>
      <section>
        <h2 className="mt-16 text-primary text-titulo_1_movil_xs text-center font-semibold mb-10">
          Equipo <span className="text-primary_2 ">Asegurame</span>
          <br className="md:hidden" /> de Corredores
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap xl:justify-center">
          {corredores.map((corredor) => (
            <div key={corredor.licencia} className="flex flex-col items-center">
              <Image
                height={130}
                width={130}
                src={corredor.img}
                alt={`Corredor :${corredor.nombre}`}
                className="xs_2:w-[150px] xs:w-[185px] md:w-[220px] lg:w-[245px]"
              />
              <div className="text-center">
                <h4 className="text-primary font-semibold text-sm mt-4">
                  {corredor.nombre}
                </h4>
                <p className="text-xs text-texto_secundario font-semibold">
                  {corredor.puesto}
                </p>
                <p className="text-xs text-texto_secundario">
                  {corredor.licencia}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

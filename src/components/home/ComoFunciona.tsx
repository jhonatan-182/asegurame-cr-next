import Image from "next/image";
import { Container } from "../share/layouts";
import { comoFunciona } from "@/data/comoFunciona";

export default function ComoFunciona() {
  return (
    <Container>
      <section>
        <h2 className="mt-16 text-primary text-titulo_1_movil_xs text-center font-semibold">
          ¿Cómo <span className="text-primary_2">funciona?</span>
        </h2>

        <div className="mt-5 flex flex-col items-center space-y-10">
          {comoFunciona.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col items-center w-[18rem] h-[19rem] shadow-general rounded-[20px]"
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
        </div>
      </section>
    </Container>
  );
}

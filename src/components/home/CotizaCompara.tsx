import { Container } from "../share/layouts";
import Seguros from "./Seguros";

export default function CotizaCompara() {
  return (
    <section className="bg-primary/90 pt-20 pb-14">
      <Container>
        <h2 className="text-white text-xl font-semibold text-center ">
          ¡Compara y cotiza tu seguro!
        </h2>
        <p className="text-center text-white text-xs mt-5">
          Vive la experiencia más fácil de cotizar y comparar seguros.
        </p>

        <div>
          <Seguros shadow={false} textColor="white" />
        </div>
      </Container>
    </section>
  );
}

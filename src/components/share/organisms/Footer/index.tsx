"use client";

import Image from "next/image";
import { Container } from "../../layouts";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Footer() {
  const handleChangeRegion = (e: string) => {
    console.log({ e });

    if (e === "HN") {
      window.location.href = "https://www.asegurame.hn";
    }
  };

  return (
    <footer className="bg-primary">
      <Container className="flex flex-col items-center py-14 pb-8">
        <Image
          width={200}
          height={200}
          alt="logo UNISERSE"
          src="/images/UNISERSELogo_Footer.svg"
        />

        <div className="flex flex-col items-center mt-10 space-y-3 pb-6">
          <h4 className="text-primary_2 text-xs font-semibold">Contactanos</h4>
          <p className="text-center text-white text-xs">
            Costado SurEste del Puente Juan Pablo II, Edificio UNISERSE. <br />{" "}
            La Uruca, San José, Costa Rica
          </p>
          <Link href={"#"} className="text-xs border-b text-white">
            (506) 8647-3773
          </Link>
          <Link href={"#"} className="text-xs border-b text-white ">
            info@asegurame.cr
          </Link>
        </div>

        <hr className="w-[80%]" />

        <div className="flex flex-col items-center mt-5 space-y-3 pb-6">
          <h4 className="text-primary_2 text-xs font-semibold">Más</h4>
          <Link href={"/blog"} className="text-xs  text-white">
            Blog
          </Link>
          <Link href={"/contactanos"} className="text-xs  text-white">
            Contáctanos
          </Link>
          <Link href={"/preguntas-frecuentes"} className="text-xs  text-white ">
            Preguntas Frecuentes
          </Link>
        </div>

        <div className="flex flex-col items-center mt-5 space-y-3 pb-6">
          <h4 className="text-primary_2 text-xs font-semibold">Región</h4>
          <Select onValueChange={handleChangeRegion} defaultValue="CRC">
            <SelectTrigger className="w-[200px] bg-primary rounded-[10px] text-white">
              <SelectValue placeholder="Costa Rica" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CRC">Costa Rica</SelectItem>
              <SelectItem value="HN">Honduras</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-5 ">
          <Link href={"https://www.facebook.com/asegurame.crr"} target="_blank">
            <Image
              src="/images/icons/facebook-logo.svg"
              alt="Icono Facebook"
              width={8}
              height={8}
            />
          </Link>
          <Link
            href={"https://www.instagram.com/asegurame.cr/"}
            target="_blank"
          >
            <Image
              src="/images/icons/instragram-logo.svg"
              alt="Icono Instagram"
              width={15}
              height={15}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/company/asegurame/"}
            target="_blank"
          >
            <Image
              src="/images/icons/lindekin-logo.svg"
              alt="Icono Lindenkin"
              width={15}
              height={15}
            />
          </Link>
          <Link href={"https://wa.me/50686473773"} target="_blank">
            <Image
              src="/images/icons/whatsapp-logo.svg"
              alt="Icono Whatsapp"
              width={16}
              height={16}
            />
          </Link>
        </div>

        <hr className="w-[80%] my-7" />

        <p className="text-center text-white font-semibold text-[11px]">
          UNISERSE: Correduría de Seguros, Regulada y Supervisada por{" "}
          <br className="hidden xs:block" />
          SUGESE, Superintendencia General de Seguros de Costa Rica{" "}
          <br className="hidden xs:block" /> Licencia: SC-12-115
        </p>

        <p className="text-white text-[11px] text-center mt-10">
          Todos los Derechos Reservados | © {new Date().getFullYear()} Asegurame
        </p>
      </Container>
    </footer>
  );
}

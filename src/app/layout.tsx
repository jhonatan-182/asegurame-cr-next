import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { HeaderMenu } from "@/components/share/organisms";

export const metadata: Metadata = {
  title: "Asegurame | Cotiza y compra tu seguro en línea",
  description:
    "Plataforma en línea para cotizar y comprar seguros de diferentes aseguradoras en Costa Rica. Ahora asegúrate de la forma más fácil.",
  keywords: [
    "asegurame",
    "seguros",
    "cotiza seguro",
    "comprar seguro",
    "seguros en linea",
    "seguros online",
    "aseguradoras en costa rica",
    "seguros costa rica",
    "seguro de viaje",
    "seguro deducible automovil",
    "seguro enfermedades graves",
    "ins",
    "instituto nacional de seguros",
    "uniserse",
    "correduria de seguros",
  ],
};

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-white min-h-screen ${poppins.className}`}>
        <HeaderMenu />
        <div className="w-[95%] md:w-[85%] mx-auto">{children}</div>
      </body>
    </html>
  );
}

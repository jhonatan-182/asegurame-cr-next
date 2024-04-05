import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-white`}>{children}</body>
    </html>
  );
}

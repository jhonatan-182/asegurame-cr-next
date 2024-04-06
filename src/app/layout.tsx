import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import { HeaderMenu } from "./ui/share/organisms";
import "./globals.css";
import { theme } from "@/theme";

export const poppins = Poppins({
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
      <body className={`${poppins.className} bg-white min-h-screen`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <HeaderMenu />
            <div className="w-[95%] md:w-[75%] mx-auto">{children}</div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

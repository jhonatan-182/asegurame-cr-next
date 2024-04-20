import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      colors: {
        primary: "#003763",
        primary_2: "#0099b7",
        secondary: "#a01779",
        secondary_2: "#76bc21",
        texto: "#222222",
        texto_secundario: "#666666",
        texto_terciario: "#AAAAAA",
        alerta_error: "#ED3B6B",
        alerta_success: "#76BC21",
        alerta_info: "#0099B7",
        alerta_warning: "#EDA93B",
        borde_asegurame: "#DDDDDD",
      },
      boxShadow: {
        general: "1px 1px 20px rgba(229, 235, 239, 1)",
      },
      fontSize: {
        h1: "50px",
        h2: "35px",
        h3: "30px",
        h4: "25px",
        h5: "20px",
        btn: "16px",
        body_1: "16px",
        body_2: "14px",
        titulo_1_movil: "25px",
        titulo_1_movil_xs: "23px",
        titulo_2_movil: "20px",
        titulo_3_movil: "16px",
        btn_movil: "14px",
        body_movil: "14px",
        tablas: "14px",
      },
      screens: {
        xs_2: "375px",
        xs: "425px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

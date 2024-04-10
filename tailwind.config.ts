import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        h1_movil_xs: "23px",
        h1_movil: "25px",
        h2_movil: "20px",
        h3_movil: "16px",
        btn_movil: "14px",
        body_movil: "14px",
        tablas: "14px",
      },
      screens: {
        xs_2: "375px",
        xs: "425px",
      },

      borderRadius: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};
export default config;

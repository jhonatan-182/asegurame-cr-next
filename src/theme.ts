"use client";

import { Poppins } from "next/font/google";
import { Theme, createTheme } from "@mui/material/styles";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export const theme: Theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: poppins.style.fontFamily,
          fontWeight: poppins.style.fontWeight,
        },
      },
    },
  },
});

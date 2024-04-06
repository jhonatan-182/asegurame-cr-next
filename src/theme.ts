"use client";

import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

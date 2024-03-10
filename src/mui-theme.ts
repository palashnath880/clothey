"use client";

import { Oswald, Bitter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const oswald = Oswald({ subsets: ["latin"] });

const bitter = Bitter({ subsets: ["latin"] });

export const myTheme = createTheme({
  typography: {
    h1: {
      fontFamily: oswald.style.fontFamily,
    },
    h2: {
      fontFamily: oswald.style.fontFamily,
    },
    h3: {
      fontFamily: oswald.style.fontFamily,
    },
    h4: {
      fontFamily: oswald.style.fontFamily,
    },
    h5: {
      fontFamily: oswald.style.fontFamily,
    },
    h6: {
      fontFamily: oswald.style.fontFamily,
    },
    fontFamily: bitter.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#F0F0F0",
    },
  },
});

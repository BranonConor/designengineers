"use client";

import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./componentOverrides/button";

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  brand: {
    grey: "#222",
    lightGrey: "#e6e6e6",
    darkBg: "#111",
    lightBg: "#F6F6F6",
    pink: "#FF008A", //orange now, forgive me father for I have sinned with this bad code
    darkPink: "#980059",
    blue: "#0080c7",
    gradient:
      "linear-gradient(141.627deg, #F14D70 11%, #FF008A 32%, #FF446C 52%, #FFB016 87%);",
  },
  shadows: {
    neon: "0px 4px 15px 0px rgba(226,175,255, 0.6)",
  },
};

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const components = {
  Button: buttonTheme,
};

export const theme = extendTheme({ colors, config, components });

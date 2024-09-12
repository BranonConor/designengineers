"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "./theme";
import { Rubik_Mono_One, DM_Mono } from "next/font/google";

const textFont = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});
const headingFont = Rubik_Mono_One({
  weight: ["400"],
  subsets: ["latin"],
});
const fonts = {
  heading: headingFont.style.fontFamily,
  body: textFont.style.fontFamily,
  p: textFont.style.fontFamily,
  span: textFont.style.fontFamily,
  li: textFont.style.fontFamily,
};
const themeWithFonts = extendTheme({ ...theme, fonts });
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={themeWithFonts}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

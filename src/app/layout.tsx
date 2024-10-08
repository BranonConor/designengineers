import type { Metadata } from "next";
import { Providers } from "./providers";
import { ColorModeScript, theme } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ColorModeButton";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Branon Eusebio",
  description: "UX-focused software engineer based in San Diego, CA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      style={{
        padding: "none",
        margin: "none",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        background: "black",
      }}
    >
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <ColorModeButton />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

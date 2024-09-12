"use client";

import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { Wave } from "./Wave";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { useEffect, useRef, useState } from "react";

export const PageWrapper: React.FC<BoxProps> = ({
  bg,
  children,
  ...otherProps
}) => {
  const lineColor = useColorModeValue("brand.grey", "brand.lightGrey");
  const [scrollTop, setScrollTop] = useState(0);
  const [rightScrollTop, setRightScrollTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [leftEdge, setLeftEdge] = useState<number | null>(
    ref.current && ref.current.getBoundingClientRect().left + 2
  );
  const [rightEdge, setRightEdge] = useState<number | null>(
    ref.current && ref.current.getBoundingClientRect().right - 2
  );

  const onScroll = () => {
    if (global.window) {
      // This will calculate how many pixels the page is vertically
      const winScroll = document.documentElement.scrollTop;
      const rightWinScroll = document.documentElement.scrollTop - 64;
      // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // This will calculate the final total of the percentage of how much the user has scrolled.
      const scrolled = (winScroll / height) * 100;
      const rightScrolled = (rightWinScroll / height) * 100;

      setScrollTop(scrolled);
      setRightScrollTop(rightScrolled);

      const leftEdge =
        ref.current && ref.current.getBoundingClientRect().left + 2;
      const rightEdge =
        ref.current && ref.current.getBoundingClientRect().right - 2;

      setLeftEdge(leftEdge);
      setRightEdge(rightEdge);
    }
  };

  const onResize = () => {
    if (global.window) {
      const leftEdge =
        ref.current && ref.current.getBoundingClientRect().left + 2;
      const rightEdge =
        ref.current && ref.current.getBoundingClientRect().right - 2;

      setLeftEdge(leftEdge);
      setRightEdge(rightEdge);
    }
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("scroll", onResize);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Box
        as="main"
        bg={bg}
        minHeight="100vh"
        maxWidth="100%"
        width="100%"
        paddingY={0}
        pr={0}
        pt={[4, 4, 12]}
        display="flex"
        justifyContent="center"
        boxSizing="border-box"
        position="relative"
        zIndex={1}
        {...otherProps}
      >
        <Nav />
        <MobileNav />
        <Box
          ref={ref}
          as={motion.div}
          maxWidth="1080px"
          position="relative"
          overflowX="hidden"
          pt={[4, 4, 16]}
          pb={[12, 14, 16]}
          paddingX={[4, 4, 8]}
          width="100%"
          zIndex={1}
          initial={{ opacity: 0, left: "-24px" }}
          animate={{
            left: 0,
            opacity: 1,
            transition: { duration: 0.4, type: "spring" },
          }}
          exit={{ opacity: 0, left: "-32px" }}
        >
          <Box
            borderLeftWidth={["0px", "0px", "1px"]}
            borderLeftColor={lineColor}
            height={`${scrollTop}%`}
            position="fixed"
            left={leftEdge || 0}
            top="64px"
          />
          <Box
            borderLeftWidth={["0px", "0px", "1px"]}
            borderLeftColor={lineColor}
            height={`${rightScrollTop}%`}
            position="fixed"
            left={rightEdge || 0}
            bottom="0"
          />
          {children}
        </Box>
      </Box>
    </AnimatePresence>
  );
};

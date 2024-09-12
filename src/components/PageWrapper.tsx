"use client";

import { Box, BoxProps, useColorModeValue, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { useEffect, useRef, useState } from "react";

export const PageWrapper: React.FC<BoxProps> = ({
  bg,
  children,
  ...otherProps
}) => {
  const lineColor = useColorModeValue("black", "white");
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [leftEdge, setLeftEdge] = useState<number | null>(
    ref.current && ref.current.getBoundingClientRect().left + 2
  );
  const [rightEdge, setRightEdge] = useState<number | null>(
    ref.current && ref.current.getBoundingClientRect().right - 2
  );
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [prog, setProg] = useState(0);

  const onScroll = () => {
    if (global.window) {
      // This will calculate how many pixels the page is vertically
      const winScroll = document.documentElement.scrollTop;
      // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // This will calculate the final total of the percentage of how much the user has scrolled.
      const scrolled = (winScroll / height) * 100;

      setScrollTop(scrolled);
      setProg(Math.round(scrolled));

      const leftEdge =
        ref.current && ref.current.getBoundingClientRect().left + 2;
      const rightEdge =
        ref.current && ref.current.getBoundingClientRect().right - 2;

      setLeftEdge(leftEdge);
      setRightEdge(rightEdge);

      if (Math.round(scrolled) === 100) {
        setIsEndOfPage(true);
      } else {
        setIsEndOfPage(false);
      }
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
            transition="0.1s ease all"
            width={["0", "0", "1px"]}
            borderRadius={10}
            bg={isEndOfPage ? lineColor : "brand.pink"}
            height={`${scrollTop}%`}
            position="fixed"
            left={leftEdge || 0}
            top="56px"
          >
            <Text position="relative" top="0" width="30px">
              {prog}%
            </Text>
          </Box>
          <Box
            transition="0.1s ease all"
            width={["0", "0", "1px"]}
            borderRadius={10}
            bg={isEndOfPage ? lineColor : "brand.orange"}
            height={`${scrollTop}%`}
            position="fixed"
            left={rightEdge || 0}
            bottom="-56px"
          >
            <Text position="relative" bottom="0" width="30px">
              {prog}%
            </Text>
          </Box>

          {children}
        </Box>
      </Box>
    </AnimatePresence>
  );
};

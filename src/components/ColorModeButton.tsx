"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  useColorMode,
  useColorModeValue,
  BoxProps,
} from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";
import React from "react";

type ColorModeButtonProps = BoxProps & MotionProps;

export const ColorModeButton: React.FC<ColorModeButtonProps> = ({
  ...props
}) => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(
    <MoonIcon color="brand.grey" width="16px" height="16px" />,
    <SunIcon width="16px" height="16px" />
  );
  const bg = useColorModeValue("rgba(255,255,255,0.5)", "rgba(0,0,0,0.5)");
  const shadow = useColorModeValue(
    "lg",
    "0px 4px 15px 0px rgba(226,175,255, 0.10)"
  );

  return (
    <Box
      display={["flex", "flex", "none"]}
      alignItems="center"
      justifyContent="center"
      position={"fixed"}
      top={4}
      right={4}
      zIndex={9}
      borderRadius="100%"
      backdropFilter="blur(10px)"
      bg={bg}
      boxShadow={shadow}
      as={motion.button}
      aria-label="color mode toggle"
      onClick={toggleColorMode}
      padding="14px"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
        rotate: 10,
      }}
      whileTap={{
        scale: 1.2,
        transition: { duration: 0.1 },
        rotate: -10,
      }}
      {...props}
    >
      {icon}
    </Box>
  );
};

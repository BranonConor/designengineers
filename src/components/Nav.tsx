import {
  Image,
  UnorderedList,
  ListItem,
  Flex,
  Box,
  useColorModeValue,
  Tooltip,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ColorModeButton } from "./ColorModeButton";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Nav = () => {
  const homeIcon = useColorModeValue(
    "/icons/home-dark.svg",
    "/icons/home-light.svg"
  );
  const aboutIcon = useColorModeValue(
    "/icons/user-dark.svg",
    "/icons/user-light.svg"
  );
  const blogIcon = useColorModeValue(
    "/icons/blog-dark.svg",
    "/icons/blog-light.svg"
  );
  const bg = useColorModeValue("rgba(255,255,255,0.35)", "rgba(0,0,0,0.35)");
  const shadow = useColorModeValue(
    "lg",
    "0px 4px 15px 0px rgba(226,175,255, 0.10)"
  );
  const logo = useColorModeValue("/logo-dark.svg", "/logo-light.svg");
  const tooltipBg = useColorModeValue("brand.gradient", "brand.gradient");
  const tooltipText = useColorModeValue("white", "white");
  const lineColor = useColorModeValue("brand.grey", "brand.lightGrey");

  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(
    <MoonIcon color="brand.grey" width="16px" height="16px" />,
    <SunIcon width="16px" height="16px" />
  );

  return (
    <Flex
      display={["none", "none", "flex"]}
      as="nav"
      alignItems="center"
      justifyContent="center"
      width="100%"
      position="fixed"
      left="0"
      top={4}
      zIndex={10}
      px={4}
    >
      <Flex
        backdropFilter="blur(10px)"
        width="100%"
        maxWidth="1080px"
        alignItems="center"
        justifyContent="center"
        bg={bg}
        boxShadow={shadow}
        borderRadius={8}
        px="8px"
        py="2px"
      >
        <Flex alignItems="center" justifyContent="center">
          <Image draggable="false" src={logo} height="32px" borderRadius={6} />

          <Box
            as={motion.button}
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={toggleColorMode}
            aria-label="color mode toggle"
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
            padding="14px"
            mr="8px"
          >
            {icon}
          </Box>
        </Flex>
        <UnorderedList
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          margin={0}
          width="calc(100% - 80px)"
          gap="8px"
        >
          <Divider width="100%" borderColor={lineColor} />

          <Tooltip
            borderRadius={6}
            label="Home"
            fontSize="md"
            placement="bottom"
            bg={tooltipBg}
            color={tooltipText}
            fontWeight="bold"
            gutter={16}
          >
            <ListItem
              borderRadius="10px"
              marginY={1}
              as={motion.li}
              listStyleType="none"
              cursor="pointer"
              width="50px"
              height="32px"
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
            >
              <Box
                as={Link}
                href="/"
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  draggable="false"
                  src={homeIcon}
                  width={4}
                  height={4}
                  boxSizing="border-box"
                />
              </Box>
            </ListItem>
          </Tooltip>
          <Tooltip
            display={["none", "none", "block"]}
            borderRadius={6}
            label="About"
            fontSize="md"
            placement="bottom"
            bg={tooltipBg}
            color={tooltipText}
            fontWeight="bold"
            gutter={16}
          >
            <ListItem
              borderRadius="10px"
              marginY={1}
              as={motion.li}
              listStyleType="none"
              height="32px"
              cursor="pointer"
              width="50px"
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
            >
              <Box
                as={Link}
                href="/about"
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  draggable="false"
                  src={aboutIcon}
                  width={4}
                  height={4}
                  boxSizing="border-box"
                />
              </Box>
            </ListItem>
          </Tooltip>
          <Tooltip
            display={["none", "none", "block"]}
            borderRadius={6}
            label="Blog"
            fontSize="md"
            placement="bottom"
            bg={tooltipBg}
            color={tooltipText}
            fontWeight="bold"
            gutter={16}
          >
            <ListItem
              borderRadius="10px"
              marginY={1}
              as={motion.li}
              listStyleType="none"
              height="32px"
              cursor="pointer"
              width="50px"
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
            >
              <Box
                as={Link}
                href="/blog"
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  draggable="false"
                  src={blogIcon}
                  width={4}
                  height={4}
                  boxSizing="border-box"
                />
              </Box>
            </ListItem>
          </Tooltip>
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

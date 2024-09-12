"use client";

import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { FancyHeading } from "@/components/FancyHeading";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  const bg = useColorModeValue("white", "brand.grey");

  return (
    <PageWrapper bg={bg}>
      <Flex
        width="100%"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Heading as="h1" size="2xl" mb={4} fontWeight={400}>
          DESIGN ENGINEERS
        </Heading>
        <FancyHeading fontWeight={400}>What the @#$%! are they?</FancyHeading>
        <Text as="p" mb={4}>
          Welcome to{" "}
          <Text
            as={Link}
            href="/"
            color="brand.blue"
            textDecoration="underline"
            fontWeight={700}
            size="md"
            _hover={{
              color: "brand.pink",
            }}
          >
            designengineers.xyz
          </Text>
          ! I'm{" "}
          <Text
            as="a"
            href="https://www.branon.dev"
            color="brand.blue"
            textDecoration="underline"
            fontWeight={700}
            target="blank"
            rel="noreferrer noopenner"
            size="md"
            _hover={{
              color: "brand.pink",
            }}
          >
            Branon Eusebio
          </Text>
          , and I'm a design engineer, design technologist, UX engineer...
          creative technologist? UI/UX Developer? Maybe I'm actually a frontend
          engineer? Uhhh okay yeah this is getting confusing.
        </Text>
        <Text as="p" mb={4}>
          Truth is - this career is awesome. But it's also one of the most
          ambiguous careers out there. Every org uses a different job title, or
          uses the same named-role differently, muddying the waters for anyone
          interested in pursuing these types of gigs.
        </Text>
        <Text as="p" mb={4}>
          One of the most frequent topics that come up during my{" "}
          <Text
            as="a"
            href="https://adplist.org/mentors/branon-eusebio?session=34910-mentorship-session"
            color="brand.blue"
            textDecoration="underline"
            fontWeight={700}
            target="blank"
            rel="noreferrer noopenner"
            size="md"
            _hover={{
              color: "brand.pink",
            }}
          >
            mentoring sessions with tech workers
          </Text>{" "}
          is: what is a design engineer (or its many synonyms) and what do they
          do?
        </Text>
        <Text as="p" mb={4}>
          So I'm starting{" "}
          <Text
            as={Link}
            href="/"
            color="brand.blue"
            textDecoration="underline"
            fontWeight={700}
            size="md"
            _hover={{
              color: "brand.pink",
            }}
          >
            designengineers.xyz
          </Text>{" "}
          to teach others everything they need to know about this awesome niche.
          Let's dive right in.
        </Text>
        {/* <Flex
          flexDirection={["column", "column", "row"]}
          width={["100%", "auto", "auto"]}
          mb={[8, 10, 12]}
        >
          <Button
            variant="primary"
            as={Link}
            href="/projects"
            mr={[0, 0, 4]}
            mb={[4, 4, 0]}
            width={["100%", "100%", "auto"]}
          >
            <Image src="/icons/projects-light.svg" mr={2} width={4} />
            See my work
          </Button>
          <Button
            variant="secondary"
            as="a"
            download
            href="/resume.pdf"
            width={["100%", "100%", "auto"]}
          >
            <DownloadIcon mr={2} width={4} />
            Download resume
          </Button>
        </Flex> */}
      </Flex>
    </PageWrapper>
  );
}

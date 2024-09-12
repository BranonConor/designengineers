"use client";

import {
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Grid,
  Box,
  Image,
  keyframes,
} from "@chakra-ui/react";
import Link from "next/link";
import { FancyHeading } from "@/components/FancyHeading";
import { PageWrapper } from "@/components/PageWrapper";
import { PostCard } from "@/components/blog/PostCard";

export default function Home() {
  const bg = useColorModeValue("white", "brand.grey");
  const sectionBg = useColorModeValue("brand.lightBg", "brand.darkBg");
  const mode = useColorModeValue("light", "dark");

  const animationKeyframesRight = keyframes`
  0% { transform: translateX(0); border-radius: 20%; }
  25% { transform: translateX(16px); border-radius: 20%; }
  50% { transform: translateX(-16px); border-radius: 50%; }
  75% { transform: translateX(16px); border-radius: 50%; }
  100% { transform: translateX(0); border-radius: 20%; }
`;
  const animationKeyframesLeft = keyframes`
  0% { transform: translateX(0); border-radius: 20%; }
  25% { transform: translateX(-16px); border-radius: 20%; }
  50% { transform: translateX(16px); border-radius: 50%; }
  75% { transform: translateX(-16px); border-radius: 50%; }
  100% { transform: translateX(0); border-radius: 20%; }
`;

  const rightAnimation = `${animationKeyframesRight} 4s ease-in-out infinite`;
  const leftAnimation = `${animationKeyframesLeft} 4s ease-in-out infinite`;

  const thoughtsArr = [
    leftAnimation,
    rightAnimation,
    leftAnimation,
    rightAnimation,
    leftAnimation,
    rightAnimation,
    leftAnimation,
    rightAnimation,
    leftAnimation,
    rightAnimation,
  ];

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
          Truth is - this career is awesome. But it's also really hard to pin
          down and explain to people (even IN the tech world). Every org uses a
          different job title, or uses the same named-role completely
          differently, creating a convoluted landscape for those interested in
          pursuing this career.
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
          is: what IS a design engineer (or its many synonyms) and what do they
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
          Let's dive right in. OH and btw... 👇🏽
        </Text>

        <Flex
          bg={sectionBg}
          padding={[2, 4, 8]}
          mt={8}
          position="relative"
          borderRadius={10}
          overflow="hidden"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Image
            src={`/text-gradient-${mode}.png`}
            mr={2}
            width="100%"
            height="100%"
            position="absolute"
            top="0"
            left="0"
            draggable={false}
            zIndex={5}
          />
          {thoughtsArr.map((item) => (
            <Heading
              as="h3"
              fontSize={["0.9rem", "1rem", "1.1rem"]}
              fontWeight={400}
              animation={item}
              textAlign="center"
            >
              all thoughts are my own
            </Heading>
          ))}
        </Flex>

        <Text as="p" mb={4}>
          Everything you read on this site is my own personal experience from
          being in the industry for some time now. While I believe it's all
          generally accurate, it doesn't mean it's the end-all-be-all ✨
        </Text>

        <Box
          borderRadius={10}
          bg={sectionBg}
          width="100%"
          padding={4}
          mt={12}
          mb={8}
        >
          <Heading as="h3" mt={2} mb={4} fontWeight={400}>
            Who we REALLY are
          </Heading>
          <Heading
            as="h3"
            fontSize="1.5rem"
            mb={4}
            fontWeight="400"
            color="brand.orange"
          >
            Simply put: we're tech workers with design and code skills. 💅🏼
          </Heading>
          <Text as="p" mb={4}>
            We run a spectrum of 'designers who can code' to 'engineers with
            design skills', and everything in between. Some of us identify as
            engineers, some more as designers, but we all share both skillsets
            to some degree!
          </Text>
          <Text as="p" mb={4}>
            Where you fall on that spectrum can influence what opportunities you
            have as a design engineer. Will you be a prototyper? A design
            systems engineer? An accessibility specialist? A little bit of
            everything? Depends greatly on the porportion of design/code skills
            you are bringing to the table.
          </Text>
          <Text as="p" mb={4}>
            At that - what ARE the various workstreams design engineers usually
            have/own? Great question, let's break it down (🕺🏻) 👇🏽
          </Text>
        </Box>

        <Box
          borderRadius={10}
          bg="brand.gradient"
          width="100%"
          padding={4}
          my={12}
        >
          <Heading as="h3" color="white" mt={2} mb={4} fontWeight={400}>
            Things we do
          </Heading>
          <Grid gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]} gap={4}>
            <PostCard
              title="Design Systems"
              image={"/workstreams/design-systems/cover.png"}
              link={"/workstreams/design-systems"}
              tags={[
                "Design Engineer",
                "Design Technologist",
                "UX Engineer",
                "Frontend Engineer",
                "UI Engineer",
              ]}
            />
            <PostCard
              title="Prototyping"
              image={"/workstreams/prototyping/cover.png"}
              link={"/workstreams/prototyping"}
              tags={[
                "Design Engineer",
                "Design Technologist",
                "UX Engineer",
                "Frontend Engineer",
                "UI Engineer",
              ]}
            />
            <PostCard
              title="Accessibility"
              image={"/workstreams/accessibility/cover.png"}
              link={"/workstreams/accessibility"}
              tags={[
                "Design Technologist",
                "UX Engineer",
                "Frontend Engineer",
                "Accessibility Engineer",
              ]}
            />
            <PostCard
              title="Creative/Marketing"
              image={"/workstreams/creative/cover.png"}
              link={"/workstreams/creative"}
              tags={[
                "Design Engineer",
                "Creative Technologist",
                "Design Technologist",
              ]}
            />
          </Grid>
        </Box>

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

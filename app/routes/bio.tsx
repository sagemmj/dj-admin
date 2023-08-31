import {
  Flex,
  Link,
  Box,
  Text,
  Image,
  VStack,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaHeadphones,
  FaInstagram,
  FaMusic,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";
const buttonStyle = {
  color: "#111",
  background: "#fff",
  px: "15px",
  gap: "8px",
  py: "10px",
  borderRadius: "10px",
  alignItems: "center",
  justifyContent: "center",
  width: "190px",
};
const textStyle = {
  fontSize: "18px",
  fontWeight: "600",
};
const iconStyle = {
  fontSize: "28px",
  color: "#fff",
};

export default function Bio() {
  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      flexDirection="column"
      py="50px"
      backgroundImage="https://ugc.production.linktr.ee/2G60SiJ2SQq6sZnKu3oc_zB0nj8PeWubB581A"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Flex w="100%" justifyContent="center" flexDirection="column">
        <Flex
          flexDirection="column"
          alignItems="center"
          w="100%"
          pt="25px"
          px="15px"
          gap="40px"
        >
          <VStack>
            <Avatar
              size="xl"
              border="1px solid #fff"
              src="https://ugc.production.linktr.ee/Gt9QKdIITzKZdigTswUZ_pUghz4rcch5jtobx"
            />
            <Text
              color="#fff"
              lineHeight="1em"
              fontSize="28px"
              fontWeight="600"
              textAlign="center"
              w="100%"
            >
              VITRIE VITOLI
            </Text>
            <Text
              color="#fff"
              lineHeight="1em"
              fontSize="18px"
              fontWeight="600"
              textAlign="center"
              w="100%"
            >
              Madrid - Ibiza
            </Text>
          </VStack>
          <VStack gap="15px">
            <Flex
              {...buttonStyle}
              as="a"
              href="#"
              _hover={{ bg: "#5c03bc", color: "#fff" }}
            >
              <FaHeadphones /> <Box {...textStyle}>DJfan Profile</Box>
            </Flex>
            <Flex
              {...buttonStyle}
              as="a"
              href="#"
              _hover={{ bg: "#1ED760", color: "#fff" }}
            >
              <FaSpotify /> <Box {...textStyle}>Spotify</Box>
            </Flex>
            <Flex
              {...buttonStyle}
              as="a"
              href="#"
              _hover={{ bg: "#F26F23", color: "#fff" }}
            >
              <FaSoundcloud /> <Box {...textStyle}>Soundcloud</Box>
            </Flex>
            <Flex
              {...buttonStyle}
              as="a"
              href="#"
              _hover={{ bg: "#FF0000", color: "#fff" }}
            >
              <FaYoutube /> <Box {...textStyle}>YouTube</Box>
            </Flex>
            <Flex
              {...buttonStyle}
              as="a"
              href="#"
              _hover={{ bg: "#01ff95", color: "#111" }}
            >
              <FaMusic /> <Box {...textStyle}>Beatport</Box>
            </Flex>
          </VStack>
          <HStack gap="20px">
            <Link href="/spot" isExternal>
              <FaInstagram {...iconStyle} />
            </Link>
            <Link href="/spot" isExternal>
              <FaYoutube {...iconStyle} />
            </Link>
            <Link href="/spot" isExternal>
              <FaFacebookSquare {...iconStyle} />
            </Link>
            <Link href="/spot" isExternal>
              <FaSpotify {...iconStyle} />
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

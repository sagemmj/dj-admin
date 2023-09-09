import {
  Button,
  Box,
  AbsoluteCenter,
  Image,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  InputGroup,
  InputRightElement,
  Divider,
  HStack,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaGoogle,
  FaMagic,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function AuthHeader() {
  return (
    <Flex
      w="100%"
      maxW="1200px"
      gap="10px"
      py={{ base: "20px", md: "30px" }}
      px={{ base: "20px", md: "30px" }}
      pos="absolute"
      justifyContent="space-between"
      alignItems="center"
      top="0px"
    >
      <Image
        src="https://files.djfan.app/images/djfan-beta.png"
        width="110px"
      />
      <HStack gap="15px">
        <Text fontSize="14px" color="#fff">
          New to DJfan?
        </Text>
        <Button
          bg="white"
          borderRadius="5px"
          as="a"
          href="https://auth.djfan.app/api/auth/signup"
          target="_blank"
          fontSize="14px"
          lineHeight="1em"
          fontWeight="800"
          color="#111111"
          transition="all 0.3s ease"
          px="10px"
          height="30px"
          _hover={{
            bg: "#be04f1",
            color: "#fff",
          }}
        >
          SIGN UP
        </Button>
      </HStack>
    </Flex>
  );
}

import {
  Button,
  Box,
  AbsoluteCenter,
  Flex,
  Image,
  FormControl,
  Heading,
  Input,
  Stack,
  Link,
  Text,
  useBreakpointValue,
  InputGroup,
  InputLeftAddon,
  Divider,
} from "@chakra-ui/react";
import {
  FaGoogle,
  FaFacebookF,
  FaEnvelope,
  FaPlayCircle,
} from "react-icons/fa";

export default function SignUp() {
  return (
    <Flex
      w="100%"
      h="100vh"
      maxH="100vh"
      pt={{ base: "90px", md: "180px" }}
      justifyContent="center"
      bg="#111111"
      position="relative"
      overflow="hidden"
    >
      <Flex position="absolute" top="10px" right="10px">
        <Text fontSize="12px" color="#fff" textAlign="center">
          Already have an account?{" "}
          <Link color="cyan" href="#">
            Sign in
          </Link>
        </Text>
      </Flex>
      <Stack
        spacing="6"
        color="white"
        w={{ base: "90%", md: "325px" }}
        maxW="325px"
      >
        <Stack gap="10px">
          <Image
            src="https://files.djfan.app/images/djfan-beta.png"
            width="110px"
            cursor="pointer"
            alignSelf="center"
          />
          <Heading
            textAlign="center"
            lineHeight="1em"
            fontSize={useBreakpointValue({ base: "24px", md: "30px" })}
            pb="10px"
          >
            Become a Creator
          </Heading>
          <Button
            color="white"
            bg="black"
            _hover={{ color: "#111", bg: "#fff" }}
            border="1px solid #ffffff"
            leftIcon={<FaGoogle />}
            iconSpacing="3"
          >
            Sign in with Google
          </Button>
          <Button
            color="white"
            bg="black"
            _hover={{ color: "#111", bg: "#fff" }}
            border="1px solid #ffffff"
            leftIcon={<FaFacebookF />}
            iconSpacing="3"
          >
            Sign in with Facebook
          </Button>
          <Box position="relative" py="15px">
            <Divider />
            <AbsoluteCenter
              fontSize="14px"
              bg="#111111"
              w="60%"
              textAlign={"center"}
            >
              or continue with email
            </AbsoluteCenter>
          </Box>
          <FormControl>
            <InputGroup
              size="md"
              overflow="hidden"
              borderRadius="0px"
              border="1px solid #fff"
            >
              <InputLeftAddon
                bg="#111"
                borderRadius="0px"
                borderRight="1px solid #fff"
              >
                <FaEnvelope fontSize="18px" color="#fff" />
              </InputLeftAddon>
              <Input
                type="email"
                borderRadius="0px"
                borderWidth="0"
                borderColor="#ffffff00"
                placeholder="Email Address"
                focusBorderColor="#ffffff00"
                bg="#fff"
                color="#111"
              />
            </InputGroup>
          </FormControl>

          <Button
            rightIcon={<FaPlayCircle />}
            color="white"
            bg="#be04f1"
            mt="5px"
            as="a"
            href="/create-account"
            _hover={{ color: "#be04f1", bg: "#ffffff" }}
          >
            GET STARTED
          </Button>
          <Text fontSize="12px" textAlign="center">
            By signing up, you are creating a DJfan account and agree to
            DJfan's&nbsp;
            <Link color="cyan" href="#">
              Terms
            </Link>
            &nbsp;and&nbsp;
            <Link color="cyan" href="#">
              Privacy Policy
            </Link>
          </Text>
          <Text fontSize="12px" textAlign="center">
            Already have an account?{" "}
            <Link color="cyan" href="#">
              Sign in
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}

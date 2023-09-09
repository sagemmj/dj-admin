import {
  Button,
  Box,
  AbsoluteCenter,
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
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
} from "react-icons/fa";
import { useState } from "react";
import AuthFooterBar from "~/components/fanlogin/AuthFooterBar";
import AuthHeader from "~/components/fanlogin/AuthHeader";
import PasswordToggle from "~/components/fanlogin/PasswordToggle";
import MagicToggle from "~/components/fanlogin/MagicToggle";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [emailCreds, setEmailCreds] = useState("");
  const [passwordCreds, setPasswordCreds] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      <AuthHeader />
      <AuthFooterBar />
      <Stack
        spacing="6"
        color="white"
        w={{ base: "90%", md: "325px" }}
        maxW="325px"
      >
        <Stack spacing="3">
          <Heading
            textAlign="center"
            mb="15px"
            fontSize={useBreakpointValue({ base: "24px", md: "30px" })}
          >
            Welcome Back!
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
        </Stack>
        <Box position="relative" mt="5px">
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

        <Stack w="100%">
          {showPasswordInput ? (
            <Stack spacing="10px">
              <FormControl>
                <Input
                  id="csrfToken"
                  //defaultValue={csrfToken}
                  hidden
                />
                <FormLabel htmlFor="email" fontWeight="500" fontSize="14px">
                  Email Address
                </FormLabel>
                <Input
                  placeholder="e.g. daftpunk@gmail.com"
                  type="email"
                  fontSize="16px"
                  lineHeight="1em"
                  _focus={{ border: "2px solid #00f5d4" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Button
                rightIcon={<FaArrowRight />}
                color="white"
                bg="#be04f1"
                _hover={{ color: "#be04f1", bg: "#ffffff" }}
                onClick={() => {
                  // signIn("email", { email, csrfToken });
                }}
              >
                Send me a login link
              </Button>
              <Text pt="5px" fontSize="14px" textAlign="center" w="100%">
                We’ll email you a magic link for a one-click sign in.
              </Text>
            </Stack>
          ) : (
            <Stack spacing="10px">
              <FormControl>
                <FormLabel htmlFor="email-cred" fontSize="14px">
                  Email Address
                </FormLabel>
                <Input
                  mt="0px"
                  name="email-cred"
                  placeholder="e.g. daftpunk@gmail.com"
                  type="email"
                  fontSize="16px"
                  lineHeight="1em"
                  _focus={{ border: "2px solid #00f5d4" }}
                  value={emailCreds}
                  onChange={(e) => setEmailCreds(e.target.value)}
                />
              </FormControl>
              <FormControl pb="0px">
                <FormLabel htmlFor="password-cred" fontSize="14px">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password-cred"
                    placeholder="*********"
                    fontSize="16px"
                    lineHeight="1em"
                    pr="4.5rem"
                    _focus={{ border: "2px solid #00f5d4" }}
                    value={passwordCreds}
                    onChange={(e) => setPasswordCreds(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Box
                      cursor="pointer"
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Box>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                rightIcon={<FaArrowRight />}
                color="white"
                bg="#be04f1"
                mt="5px"
                _hover={{ color: "#be04f1", bg: "#ffffff" }}
              >
                SIGN IN
              </Button>
            </Stack>
          )}
          <Flex
            w="100%"
            justifyContent="center"
            onClick={() => {
              setShowPasswordInput((prev) => !prev); // toggle the mode
              if (showPasswordInput) {
                setEmail(emailCreds); // copy emailCreds to email
              } else {
                setEmailCreds(email); // copy email to emailCreds
              }
            }}
          >
            {showPasswordInput ? <PasswordToggle /> : <MagicToggle />}
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}

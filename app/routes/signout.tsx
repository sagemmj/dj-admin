import {
    Button,
    Box,
    HStack,
    Image,
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
    VStack
  } from "@chakra-ui/react";
  import {
      FaArrowLeft,
    FaArrowRight,
    FaHome,
  } from "react-icons/fa";
  
  export default function SignOut() {
    return (
      <Flex w="100%" justifyContent="center" bg="#111111" position="relative" overflow="hidden" height="100vh">
        <Stack w="100%" maxW="1200px" gap="10px" py={{ base: "20px", md: "30px" }} px={{ base: "20px", md: "30px" }} alignItems="center" top="0px">
            <HStack width="100%" justifyContent="space-between">
                <Image src="https://files.djfan.app/images/djfan-beta.png" width="110px" onClick={() => (window.location.href = "https://djfan.app/feed")} cursor="pointer"/>
                <Button bg="white" borderRadius="5px" as="a" leftIcon={<FaHome />} href="https://auth.djfan.app/api/auth/signup" target="_blank" fontSize="14px" lineHeight="1em" fontWeight="800" color="#111111" transition="all 0.3s ease" px="10px" height="30px" _hover={{ bg: "#be04f1", color: "#fff", }} >
                    BACK HOME
                </Button>
            </HStack>
            <VStack color="#111" bg="#fff" w={{ base: "90%", md: "375px" }} maxW="375px" height="auto" mt="70px" borderRadius="15px" py="20px" gap="10px">
                <Heading textAlign="center" fontSize={useBreakpointValue({ base: "24px", md: "30px" })}>
                    Sign Out
                </Heading>
                <Text>
                    Are you sure you want to sign out?
                </Text>
                <Button color="#fff" bg="#111" mt="5px" _hover={{ color: "#fff", bg: "#444" }}>
                    SIGN OUT
                </Button>
                <Flex alignItems="center" fontWeight="600" fontSize="14px" gap="5px" cursor="pointer" _hover={{ color: "#be04f1" }}>
                    <FaArrowLeft fontSize="12px"/>BACK TO FEED
                </Flex>
            </VStack>
        </Stack>
      </Flex>
    );
  }
  
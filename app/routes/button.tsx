import { Flex, Button } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { FiDownload, FiLock } from "react-icons/fi";
export default function buttons() {
  return (
    <Flex
      minH="100vh"
      width="100vw"
      bg="#111"
      direction="column"
      alignItems="center"
      pt="100px"
      gap="40px"
    >
      <Button
        leftIcon={<FiLock />}
        minW="120px"
        width="100%"
        justifyContent="flex-start"
        bgColor="transparent"
        color="white"
        fontWeight="normal"
        _hover={{
          bgColor: "gray",
        }}
      >
        Memberships
      </Button>

      <Button
        leftIcon={<FiDownload />}
        minW="120px"
        width="100%"
        justifyContent="flex-start"
        bgColor="transparent"
        color="white"
        fontWeight="normal"
        _hover={{
          bgColor: "gray",
        }}
      >
        Downloads
      </Button>
      <Button
        leftIcon={<FiDownload />}
        minW="120px"
        width="100%"
        justifyContent="flex-start"
        bgColor="transparent"
        color="white"
        fontWeight="normal"
        _hover={{
          bgColor: "gray",
        }}
      >
        Downloads
      </Button>
      <Flex
        as="a"
        href="/"
        bg="#fff"
        color="#111"
        p="20px"
        borderRadius="20px"
        fontSize={{ base: "30px", md: "40px" }}
        lineHeight="1em"
        fontWeight="600"
        _hover={{ color: "#fff", bg: "#111" }}
      >
        BACK HOME
      </Flex>
    </Flex>
  );
}

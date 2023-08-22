import { Box, Flex, Image, Link } from "@chakra-ui/react";
import ProfileButton from "./ProfileButton";

export default function Navbar() {
  return (
    <Flex
      bg="black"
      borderBottom="1px solid #ffffff"
      w="100%"
      justifyContent="center"
      px={{ base: "10px", md: "0px" }}
      py="10px"
    >
      <Flex
        w="100%"
        maxW="1000px"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Image
          id="logo"
          w="120px"
          src="https://djfan.app/wp-content/uploads/2023/04/djfan-email.png"
        />
        <ProfileButton />
      </Flex>
    </Flex>
  );
}

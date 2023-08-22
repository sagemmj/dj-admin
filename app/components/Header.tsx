import { Box, Flex, Image, Link } from "@chakra-ui/react";
import ProfileButton from "./ProfileButton";

export default function Header() {
  return (
    <Box>
      <Flex
        bg="black"
        borderBottom="1px solid #ffffff"
        w="100%"
        justifyContent="center"
      >
        <Flex
          w="100%"
          maxW="1000px"
          alignItems="center"
          justifyContent={"space-between"}
          px={{ base: "10px", md: "0px" }}
          py="10px"
        >
          <Image
            id="logo"
            w="120px"
            src="https://media.djfan.app/images/djfan-logo-beta.png"
          />
          <ProfileButton />
        </Flex>
      </Flex>
      <Flex
        bg="#9b5de5"
        borderBottom="1px solid #ffffff"
        w="100%"
        justifyContent="center"
      >
        <Flex
          w="100%"
          maxW="1000px"
          px={{ base: "20px", md: "10px" }}
          py="10px"
          color="#ffffff"
          fontSize="20px"
          fontWeight="900"
          gap="25px"
        >
          <Link
            fontWeight="600"
            _hover={{ textDecoration: "underline", color: "#ffffff" }}
            href="/"
          >
            Payouts
          </Link>
          <Link
            fontWeight="600"
            _hover={{ textDecoration: "underline", color: "#ffffff" }}
            href="/earnings"
          >
            Earnings
          </Link>
          <Link
            fontWeight="600"
            _hover={{ textDecoration: "underline", color: "#ffffff" }}
            href="/invitations"
          >
            Invitations
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

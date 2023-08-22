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
          p="10px"
        >
          <Box as="a" href="/">
            <Image
              id="logo"
              w="120px"
              src="https://media.djfan.app/images/djfan-logo-beta.png"
            />
          </Box>
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
          px="20px"
          py="10px"
          color="#ffffff"
          fontSize="18px"
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

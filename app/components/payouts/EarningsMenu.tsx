import { Flex, Link } from "@chakra-ui/react";

export default function EarningsMenu() {
  return (
    <Flex
      bg="#111"
      borderBottom="1px solid #ffffff"
      w="100%"
      justifyContent="center"
    >
      <Flex
        w="100%"
        maxW="1000px"
        px={{ base: "15px", md: "15px" }}
        py="10px"
        color="#ffffff"
        fontSize="18px"
        fontWeight="900"
        gap="25px"
      >
        <Link
          fontWeight="600"
          _hover={{ textDecoration: "underline", color: "#ffffff" }}
          href="/payouts"
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
  );
}

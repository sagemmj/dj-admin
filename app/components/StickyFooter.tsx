import { Flex, Link, Text } from "@chakra-ui/react";

export default function StickyFooter() {
  return (
    <Flex
      width="100%"
      bg="#111"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
      bottom="0px"
      borderTop="2px solid #ff"
    >
      <Text fontSize="18px" textAlign="center" color="#fff">
        Already have an account?
      </Text>
      <Link
        fontSize="18px"
        px="6px"
        py="4px"
        borderRadius="5px"
        color="#111"
        bg="#fff"
        href="/signin"
        fontWeight="600"
        lineHeight="1em"
      >
        SIGN IN
      </Link>
    </Flex>
  );
}

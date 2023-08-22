import { Box } from "@chakra-ui/react";
import { FaHeadphones } from "react-icons/fa";
export default function ProfileButton() {
  return (
    <Box
      as="a"
      target="_blank"
      href="/profile"
      p="0"
      display="flex"
      fontSize="14px"
      bg="#ffffff"
      color="#111111"
      fontWeight="700"
      px="10px"
      py="8px"
      gap="5px"
      lineHeight="1em"
      alignItems="center"
      borderRadius="5px"
      cursor="pointer"
      _hover={{
        bg: "#9b5de5",
        color: "#ffffff",
      }}
    >
      <FaHeadphones fontSize="12px" />
      MY PROFILE
    </Box>
  );
}

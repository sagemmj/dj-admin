import { Flex, Avatar, Box, Image } from "@chakra-ui/react";

export default function ProfileImages() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={{ base: "20px", md: "40px" }}
    >
      <Flex direction="column" gap="10px" alignItems="flex-start">
        <Box fontSize="16px" fontWeight="600" lineHeight="1em">
          Profile Image
        </Box>
        <Avatar
          size="xl"
          src="https://files.djfan.app/cache/cfd61f22-662d-4d80-bfca-694b10ef6c89.webp"
        />
        <Box
          color="#fff"
          as="a"
          mt="5px"
          cursor="pointer"
          bg="#111"
          fontSize="10px"
          fontWeight="600"
          px="8px"
          py="6px"
          borderRadius="5px"
          lineHeight="1em"
          _hover={{ bg: "#8553f4" }}
        >
          UPDATE IMAGE
        </Box>
      </Flex>
      <Flex direction="column" gap="10px" alignItems="flex-start">
        <Box fontSize="16px" fontWeight="600" lineHeight="1em">
          Cover Photo
        </Box>
        <Image
          width="160px"
          height="96px"
          objectFit="cover"
          src="https://files.djfan.app/cache/d0d71149-9f19-4957-b6cd-2bc19c3f0573.webp"
        />

        <Box
          color="#fff"
          as="a"
          mt="5px"
          cursor="pointer"
          bg="#111"
          fontSize="10px"
          fontWeight="600"
          px="8px"
          py="6px"
          borderRadius="5px"
          lineHeight="1em"
          _hover={{ bg: "#8553f4" }}
        >
          UPDATE IMAGE
        </Box>
      </Flex>
    </Flex>
  );
}

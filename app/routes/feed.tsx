import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import HeaderFan from "~/components/HeaderFan";

export default function feed() {
  return (
    <Box minH="100vh" bg="gray.100">
      <HeaderFan />
      <Flex backgroundColor="green" fontSize="40px">
        Hello
      </Flex>
    </Box>
  );
}

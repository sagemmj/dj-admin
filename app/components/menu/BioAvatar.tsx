import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  Avatar,
  Divider,
} from "@chakra-ui/react";

export default function BioAvatar() {
  return (
    <Flex alignItems="center">
      <Menu>
        <MenuButton
          py={2}
          transition="all 0.3s"
          _focus={{ boxShadow: "none" }}
          ml="10px"
        >
          <HStack spacing="4">
            <Avatar
              height="30px"
              width="30px"
              src={""}
              border="1px solid white"
              backgroundColor="black"
              _hover={{
                border: "5px solid white",
              }}
            />
          </HStack>
        </MenuButton>
        <MenuList fontSize="lg" bg="white" borderColor="gray.200">
          <MenuItem>My Account</MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
          <MenuItem>Terms of Use</MenuItem>
          <Divider />
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

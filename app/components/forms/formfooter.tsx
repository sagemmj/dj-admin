import {
  Box,
  HStack,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

export default function FormFooter() {
  return (
    <HStack
      justifyContent="space-between"
      mt="15px"
      w={{ base: "100%", sm: "500px" }}
    >
      <Box
        as="a"
        href="/"
        fontWeight="500"
        display="flex"
        alignItems="center"
        gap="4px"
      >
        <FaArrowLeft fontSize="12px" />
        Return to Profile
      </Box>
      <Menu>
        <MenuButton fontWeight="500">Change Post Type</MenuButton>
        <MenuList>
          <MenuItem as="a" href="#">
            Image Post
          </MenuItem>
          <MenuItem as="a" href="#">
            Video Post
          </MenuItem>
          <MenuItem as="a" href="#">
            Audio Post
          </MenuItem>
          <MenuItem as="a" href="#">
            Tour Date
          </MenuItem>
          <MenuItem as="a" href="#">
            New Product
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

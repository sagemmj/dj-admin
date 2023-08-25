import {
  IconButton,
  Image,
  Flex,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import MenuItems from "./menu/MenuItems";
import HeaderSearch from "./HeaderSearch";

export default function HeaderFan() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      ml={{ base: 0, md: 80 }}
      px="4"
      position="sticky"
      top="0"
      zIndex="99"
      alignItems="center"
      bg="#111"
      py="10px"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent={{ base: "space-between", md: "flex-end" }}
    >
      <Box
        color="white"
        display={{ base: "flex", md: "none" }}
        fontSize="30px"
        cursor="pointer"
        aria-label="open menu"
        onClick={onOpen}
      >
        <FiMenu />
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        as="a"
        cursor="pointer"
        onClick={() => {
          document.location = "/feed";
        }}
      >
        <Image
          src="https://files.djfan.app/images/djfan-beta.png"
          alt="DJfan Logo"
          width="120px"
        />
      </Box>
      <Flex
        flexDirection="row"
        id="headermenu"
        align="center"
        justifyContent={{ base: "flex-end", sm: "space-between" }}
        width={{ base: "fit-content", md: "100%" }}
      >
        <Box display={{ base: "none", md: "flex" }}>
          <HeaderSearch />
        </Box>
        <MenuItems />
      </Flex>
    </Flex>
  );
}

import {
  Box,
  Flex,
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Stack,
  HStack,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { FaBars, FaCartPlus, FaHeadphones, FaTimes } from "react-icons/fa";
import SideMenuBody from "./menu/SideMenuBody";

export default function HeaderAdmin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
        borderBottom="1px solid #ffffff"
        w="100%"
        justifyContent="center"
        py="5px"
      >
        <Flex
          w="100%"
          maxW="1000px"
          alignItems="center"
          justifyContent={"space-between"}
          p="10px"
          px="15px"
        >
          <Box as="a" href="/">
            <Image
              id="logo"
              w="120px"
              src="https://media.djfan.app/images/djfan-logo-beta.png"
            />
          </Box>
          <Box
            as="a"
            onClick={onOpen}
            color="#fff"
            cursor="pointer"
            _hover={{ color: "green" }}
          >
            <Icon
              viewBox="0 0 24 24"
              width="30px"
              height="30px"
              color="white"
              _hover={{ color: "cyan" }}
            >
              <path
                fill="currentColor"
                d="M0,4c0-.55,.45-1,1-1H18c.55,0,1,.45,1,1s-.45,1-1,1H1c-.55,0-1-.45-1-1Zm18,15H1c-.55,0-1,.45-1,1s.45,1,1,1H18c.55,0,1-.45,1-1s-.45-1-1-1Zm5-8H6c-.55,0-1,.45-1,1s.45,1,1,1H23c.55,0,1-.45,1-1s-.45-1-1-1Z"
              />
            </Icon>
          </Box>

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent p="0" maxW="220px" id="content">
              <DrawerBody p="0">
                <HStack bg="#111" p="15px" justifyContent="space-between">
                  <Box color="#fff" fontWeight="600" fontSize="18px">
                    Creator Menu
                  </Box>
                  <Box
                    as="a"
                    href=""
                    onClick={onClose}
                    right="15px"
                    top="15px"
                    cursor="pointer"
                    color="#fff"
                    _hover={{ color: "#5c03bc" }}
                  >
                    <FaTimes fontSize="18px" />
                  </Box>
                </HStack>
                <SideMenuBody />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </Box>
  );
}

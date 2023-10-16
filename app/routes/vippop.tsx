import React, { useState } from "react";
import {
  Flex,
  Heading,
  Image,
  Avatar,
  HStack,
  VStack,
  Button,
  Modal,
  Tabs,
  TabList,
  Portal,
  TabPanels,
  Tab,
  Tooltip,
  TabPanel,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaFileExcel } from "react-icons/fa";
import { FiX, FiCheck } from "react-icons/fi";
import VIPlist from "./VIPlist";
import { FaQuestion, FaQuestionCircle } from "react-icons/fa";
import PopUpHero from "./PopUpHero";
import PopFeatureList from "./PopFeatureList";

const listStyle = {
  alignItems: "center",
  gap: "8px",
  color: "#fff",
  fontSize: "18px",
  w: { base: "280px", md: "50%" },
  pb: "5px",
};

const iconStyle = {
  fontSize: "22px",
};

const popupWidth = {
  w: { base: "100%", md: "auto" },
  minW: { base: "100%", md: "500px" },
};

export default function VIP() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack h="100vh" w="100vw" justifyContent="center">
        <Button onClick={onOpen}>VIP POP UP </Button>
      </VStack>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "lg", md: "md" }}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          background={`url('http://media.djfan.app/images/product.jpg') no-repeat center center`}
          backgroundSize="cover"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          overflow="hidden"
          borderRadius="10px"
          border="1px solid #fff"
          {...popupWidth}
        >
          <VStack
            bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
            p="0px"
            gap="0"
            position="relative"
          >
            <Flex
              position="absolute"
              right="10px"
              top="10px"
              zIndex={"8989898"}
            >
              <FiX
                color="#fff"
                onClick={onClose}
                fontSize="28px"
                cursor="pointer"
              />
            </Flex>

            <VStack position="relative" py="25px" gap="5px">
              <Heading
                color="#111"
                px="8px"
                borderRadius={"10px"}
                py="4px"
                fontSize="14px"
                lineHeight="1em"
                bg="#71fa94"
                mb="8px"
              >
                EXCLUSIVE TO NEW FANS
              </Heading>
              <Heading
                fontSize="29px"
                borderRadius="5px"
                lineHeight="1.3em"
                fontWeight="700"
                color="#fff"
                textAlign="center"
                px="20px"
                maxW="400px"
              >
                Enjoy 90% off your first VIP Membership
              </Heading>

              <Text
                w="80%"
                color="#fff"
                fontSize="20px"
                textAlign="center"
                fontWeight="500"
              >
                Start discovering exclusive content and exploring VIP perks for{" "}
                <b>only $1</b>
              </Text>
              <Button
                px="10px"
                mt="10px"
                fontSize="16px"
                color="#111"
                bg="#fff"
                border="1px solid #111"
                lineHeight="1em"
                fontWeight={"700"}
                _hover={{ bg: "#fff" }}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                CLAIM DISCOUNT
              </Button>
              <Text
                onClick={onClose}
                color="#fff"
                fontSize="14px"
                textAlign="center"
                fontWeight="500"
                cursor="pointer"
              >
                No thanks
              </Text>
            </VStack>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}

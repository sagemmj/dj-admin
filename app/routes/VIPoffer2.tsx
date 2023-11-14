import {
  Flex,
  Heading,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useBreakpointValue,
  Text,
  HStack,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import VIPofferFeatures from "~/components/VIPofferFeatures";
import { useState } from "react";
import "@fontsource/roboto-mono/300.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";

const featureStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: "600",
  w: "45%",
};

export default function WelcomeVIPoffer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bg, setBg] = useState("linear(to-r, #0e0725, #5c03bc, #e536ab)");

  const claimDiscount = () => {
    // need to add dynamic link dependent on DJ profile
  };

  const handleMouseEnter = () => setBg("#111");
  const handleMouseLeave = () =>
    setBg("linear(to-r, #0e0725, #5c03bc, #e536ab)");
  const HeaderFontSize = useBreakpointValue({ base: "26px", md: "30px" });
  return (
    <>
      <VStack h="100vh" w="100vw" justifyContent="center">
        <Button onClick={onOpen}>OPEN VIP OFFER POPUP </Button>
      </VStack>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "lg", md: "lg" }}
      >
        <ModalOverlay
          bg="#111"
          background={`url('http://media.djfan.app/images/product.jpg') no-repeat center center`}
          backgroundSize="cover"
        />
        <ModalContent
          overflow="hidden"
          borderRadius="10px"
          border="1px solid #fff"
          w={{ base: "90%", md: "500px" }}
        >
          <VStack
            id="popup"
            bg={bg}
            bgGradient={bg}
            p="0px"
            gap="0"
            position="relative"
          >
            <Flex position="absolute" right="10px" top="10px" zIndex={"999"}>
              <FiX
                color="#fff"
                onClick={onClose}
                fontSize="28px"
                cursor="pointer"
              />
            </Flex>

            <VStack pt="20px" pb="10px" gap="10px">
              <VStack gap="10px">
                <Heading
                  color="#111"
                  px="8px"
                  borderRadius={"10px"}
                  py="4px"
                  fontSize="14px"
                  lineHeight="1em"
                  bg="#71fa94"
                  fontWeight="700"
                  fontFamily="Roboto Mono"
                  style={{ wordSpacing: "-5px" }}
                >
                  <span style={{ fontWeight: "700" }}>WELCOME OFFER</span>
                </Heading>
                <Heading
                  fontSize={HeaderFontSize}
                  fontWeight="600"
                  borderRadius="5px"
                  lineHeight="1.3em"
                  color="#fff"
                  textAlign="center"
                  px="20px"
                  maxW="400px"
                  pb="5px"
                >
                  Unlock your first VIP Membership for{" "}
                  <Box fontWeight="800" display="inline">
                    only
                  </Box>{" "}
                  $1
                </Heading>
              </VStack>

              <Button
                px="10px"
                mt="0px"
                fontSize="16px"
                color="#111"
                bg="#fff"
                border="2px solid #fff"
                lineHeight="1em"
                fontWeight={"700"}
                transition="0s"
                _hover={{
                  color: "#fff",
                  bgGradient: "linear(to-r, #5c03bc, #e536ab)",
                }}
                onClick={claimDiscount}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                GO VIP FOR FREE
              </Button>
              <Text
                color="#fff"
                fontSize="14px"
                textAlign="center"
                fontWeight="600"
                display="flex"
                alignItems="center"
                gap="6px"
              >
                <FaCheckCircle color="#71fa94" />
                CANCEL ANYTIME
              </Text>

              <Text
                onClick={onClose}
                color="#fff"
                fontSize="14px"
                textAlign="center"
                fontWeight="400"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                No thanks
              </Text>
            </VStack>
            <VIPofferFeatures />
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}

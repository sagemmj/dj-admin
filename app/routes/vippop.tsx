import {
  Flex,
  Heading,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";



export default function WelcomeVIPoffer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const claimDiscount = () => {
    // need to add dynamic link dependent on DJ profile
  };
  return (
    <>
      <VStack h="100vh" w="100vw" justifyContent="center">
        <Button onClick={onOpen}>OPEN VIP OFFER POPUP </Button>
      </VStack>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "lg", md: "md" }}
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
            bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
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

            <VStack py="25px" gap="5px">
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
                pb="5px"
              >
                Enjoy 90% off your first VIP Membership
              </Heading>
              <Text
                w={{ base: "90%", md: "80%" }}
                color="#fff"
                fontSize="20px"
                textAlign="center"
                fontWeight="500"
                lineHeight="1.2em"
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
                onClick={claimDiscount}
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

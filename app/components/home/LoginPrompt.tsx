import {
  Flex,
  Heading,
  Image,
  HStack,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FiX, FiCheck } from "react-icons/fi";

export default function LoginPrompt() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          border="1px solid #fff"
          overflow="hidden"
          borderRadius="10px"
        >
          <VStack w="100%">
            <Flex position="absolute" right="10px" top="10px">
              <FiX
                color="#fff"
                onClick={onClose}
                fontSize="30px"
                cursor="pointer"
              />
            </Flex>

            <VStack bg="#111" w="100%" py="15px">
              <Image
                w="140px"
                src="https://creators.djfan.app/wp-content/uploads/2023/04/djfan-email.png"
              />
            </VStack>
            <VStack pt="20px" pb="25px">
              <Heading
                fontSize="22px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                mb="10px"
              >
                Please sign in to view these posts
              </Heading>
              <HStack>
                <Button
                  px="10px"
                  fontSize="16px"
                  height="34px"
                  color="#111"
                  bg="#fff"
                  border="1px solid #111"
                  lineHeight="1em"
                  _hover={{ bg: "#fff" }}
                  onClick={() => {
                    window.location.href = "https://auth.djfan.app/auth/signin";
                  }}
                >
                  LOGIN
                </Button>
                <Button
                  px="10px"
                  fontSize="16px"
                  height="34px"
                  iconSpacing="1"
                  bgGradient="linear(to-r, #5c03bc, #e536ab)"
                  lineHeight="1em"
                  color="#fff"
                  border="1px solid #5c03bc"
                  _hover={{ bgGradient: "linear(to-r,#e536ab, #5c03bc)" }}
                  onClick={() => {
                    window.location.href = "https://auth.djfan.app/auth/signup";
                  }}
                >
                  SIGN UP
                </Button>
              </HStack>
              <Heading
                fontSize="18px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                mt="20px"
              >
                Why create a free account?
              </Heading>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={FiCheck} color="green.500" />
                  Access to free content
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheck} color="green.500" />
                  Regular updates from DJs
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheck} color="green.500" />
                  Community features
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheck} color="green.500" />
                  30-seconds to sign up
                </ListItem>
              </List>
            </VStack>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}

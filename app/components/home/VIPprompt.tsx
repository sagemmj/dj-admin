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

const listStyle = {
  alignItems: "center",
  gap: "8px",
  color: "#fff",
  fontSize: "18px",
};
export default function VIPprompt() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>VIP Pop UpDo</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          border="1px solid #fff"
          overflow="hidden"
          borderRadius="10px"
          bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
          w={{ base: "90%", md: "500px" }}
          minW={{ base: "90%", md: "500px" }}
        >
          <VStack
            w={{ base: "100%", md: "500px" }}
            minW={{ base: "100%", md: "500px" }}
          >
            <VStack pt="20px" pb="25px" px="0px">
              <Heading
                fontSize="30px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                mb="10px"
                color="#fff"
              >
                Become a VIP for only $1
              </Heading>
              <Heading
                fontSize="18px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                mb="10px"
                color="#fff"
                textAlign="center"
              >
                Access all Richy Ahmed's VIP content & perks
              </Heading>
              <HStack>
                <Button
                  px="10px"
                  fontSize="18px"
                  height="38px"
                  color="#111"
                  bg="#fff"
                  border="1px solid #111"
                  lineHeight="1em"
                  _hover={{ bg: "#fff" }}
                  onClick={() => {
                    window.location.href = "https://auth.djfan.app/auth/signin";
                  }}
                >
                  JOIN NOW
                </Button>
              </HStack>
              <Heading
                fontSize="18px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                mt="20px"
                color="#fff"
              >
                What do VIPs get?
              </Heading>
            </VStack>
            <Flex
              w={{ base: "100%", md: "500px" }}
              minW={{ base: "100%", md: "500px" }}
              flexWrap="wrap"
              justifycontent="center"
            >
              <Popover>
                <PopoverTrigger>
                  <Flex {...listStyle} w={{ base: "80%", md: "50$" }}>
                    <FiCheck color="green.500" /> Access to free content
                  </Flex>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <Flex {...listStyle} w={{ base: "80%", md: "50$" }}>
                    <FiCheck color="green.500" /> Access to free content
                  </Flex>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Flex
              w={{ base: "100%", md: "500px" }}
              minW={{ base: "100%", md: "500px" }}
            >
              <Flex
                px="20px"
                w="100%"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Flex
                  flexDirection={"column"}
                  px="30px"
                  width={{ base: "100%", md: "50%" }}
                >
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck color="green.500" /> Access to free content
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Detailed Tour Schedule
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Private Playlists & Setlists
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Access Unreleased Music
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Preview New Tracks
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck />
                        Community Chat
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Meet & Greet Invitations
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Obtain Guestlist Places
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Purchase Tickets Esrly
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
                <Flex
                  flexDirection={"column"}
                  width={{ base: "100%", md: "50%" }}
                >
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Access Exclusive Content
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Win Backstage Passes
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> 20% Off Merch Store
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Submit Demos for Feedback
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Ticket & Merch Giveaways
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex {...listStyle}>
                        <FiCheck /> Behind-the-Scenes Content
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to have that milkshake?
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Flex>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}

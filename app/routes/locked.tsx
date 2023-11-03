import { useState } from "react";
import {
  Avatar,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  AvatarBadge,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  MenuList,
  HStack,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FiShare, FiEye, FiMoreVertical } from "react-icons/fi";
import {
  FaPlay,
  FaPause,
  FaLock,
  FaFastForward,
  FaFastBackward,
  FaVolumeUp,
} from "react-icons/fa";

type PostMenuProps = {
  icon: React.ElementType;
  label: string;
};

const PostMenu = ({ icon, label }: PostMenuProps) => (
  <MenuItem py="10px" aria-label={label}>
    <Box as={icon} size="14px" mr="8px" />
    <Text>{label}</Text>
  </MenuItem>
);

export default function Locked() {
  const [hover, setHover] = useState(false);

  return (
    <Card
      border="2px solid black"
      borderRadius="15px"
      m="20px"
      overflow="hidden"
    >
      <CardHeader borderBottom="2px solid black">
        <Flex gap={4}>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Richy Ahmed"
              border="1px solid cyan"
              src="https://creators.djfan.app/wp-content/uploads/jet-engine-forms/175/2023/05/WhatsApp-Image-2023-05-20-at-17.39.37.jpeg"
            >
              <AvatarBadge
                bg="green.500"
                boxSize="1.25rem"
                borderColor="white"
                display="block"
                justifyContent="flex-end"
              />
            </Avatar>

            <Box>
              <Link pb="2px" size="sm" fontWeight="700">
                Richy Ahmed
              </Link>
              <HStack>
                <Text fontSize="12px" color="gray.500" fontWeight="500">
                  6 hours ago
                </Text>
                <Flex align="center" gap="4px">
                  <Box as={FiEye} size="14px" color="#805ad5" />
                  <Text fontSize="14px" color="#805ad5" fontWeight="600">
                    VIP
                  </Text>
                </Flex>
              </HStack>
            </Box>
          </Flex>
          <Menu>
            <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <Box as={FiMoreVertical} size="20px" color="gray" />
            </MenuButton>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody p="0">
        <VStack justifyContent="center" height="200px" gap="15px" bg="#f6f6f6">
          <Text fontWeight="600" fontSize="20px" lineHeight="1em">
            This post is restricted to VIP members.
          </Text>
          <Button colorScheme="purple">Subscribe Now</Button>
        </VStack>
      </CardBody>
    </Card>
  );
}

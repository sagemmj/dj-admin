import { useState } from 'react';
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
  Image, 
  VStack,
} from "@chakra-ui/react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FiShare, FiEye, FiMoreVertical } from "react-icons/fi";
import { FaPlay, FaPause, FaLock, FaFastForward, FaFastBackward, FaVolumeUp } from 'react-icons/fa';

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

export default function PostCardVideo() {
  const [hover, setHover] = useState(false);

  return (
    <Card border="2px solid black" borderRadius="15px">
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
            <MenuList
              minW="max-content"
              fontSize="14px"
              bg="white"
              p="0"
              m="0"
              borderColor="gray.200"
            >
              <PostMenu icon={BiEdit} label="Edit Post" />
              <PostMenu icon={BiTrash} label="Delete Post" />
              <PostMenu icon={FiShare} label="Share Post" />
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody p="0">
      <Box position='relative'>
        <Image src={"http://media.djfan.app/images/DJ-BANNER.jpg"} width='100%' />
        <VStack
          position='absolute'
          top='0'
          left='0'
          h='full'
          w='full'
          spacing='1'
          justify='center'
          align='center'
          bg='rgba(0,0,0,0.6)'
        >
          <Flex p='15px'>
            <Box
              as='button'
              aria-label='Play button'
              p='20px'
              borderRadius='50%'
              bg={hover ? '#111' : '#ffffff91'}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? <FaLock size='30' color='#fff'/> : <FaPlay size='30' color='#fff' />}
            </Box>
          </Flex>
        </VStack>
      </Box>
      
      </CardBody>
      <CardFooter px="10px" py="0px" mb="0px" flexDirection="column">
      
        <Flex p="0" py="5px" m="0" borderTop="1px solid #bdbdbd" bg="#f6f6f6">
      <Flex
        px={{ base: "10px", md: "15px" }}
        pt="10px"
        pb="10px"
        borderRight="1px solid #bdbdbd"
      >
        <Box as={FaLock} size="18px" color="black" />
      </Flex>
      <Flex justifyContent="flex-start" align="center" gap="10px">
        <Text
          display="flex"
          ml="10px"
          gap="4px"
          color="#5C5C5C"
          fontSize="18px"
        >
          <Box color="#8A0FD2" fontWeight="400">
            Sign in
          </Box>
          or
          <Link href="/register" color="#8A0FD2" fontWeight="400">
            register
          </Link>
          to{" "}
          <Box as="span" display={{ base: "none", md: "flex" }}>
            comment or{" "}
          </Box>
          view this post.
        </Text>
        
      </Flex>
    </Flex>
      </CardFooter>
    </Card>
  );
}

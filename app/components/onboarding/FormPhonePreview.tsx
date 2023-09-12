"use client";

import { useState } from "react";
import { FiUnlock, FiUser, FiHeadphones } from "react-icons/fi";
import {
  Button,
  Heading,
  Flex,
  Center,
  FormControl,
  Box,
  FormLabel,
  Avatar,
  Input,
  HStack,
  InputGroup,
  FormHelperText,
  Textarea,
  Select,
  Stack,
  Text,
  Icon,
  InputRightElement,
  VStack,
  SkeletonText,
} from "@chakra-ui/react";
import MobileFrame from "./MobileFrame ";

const labelStyle = {
  fontSize: "12px",
  lineHeight: "1em",
  pl: "10px",
  pt: "5px",
};

export const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [DJname, setDJname] = useState("");
  const [ShortBio, setShortBio] = useState("");

  return (
    <>
      <VStack>
        <Box
          w="320px"
          h="220px"
          border="1px solid grey"
          p="10px 10px 0px 10px"
          borderRadius="30px 30px 0px 0px"
          position="relative"
          overflow="hidden"
        >
          <Center
            w="150px"
            h="20px"
            bg="white"
            position="absolute"
            top="0"
            left="50%"
            transform="translateX(-50%)"
            borderBottomRadius="20px"
            zIndex="5"
          >
            <Box w="60px" h="5px" bg="#f2f2f2" borderRadius="30px"></Box>
          </Center>

          <Box
            w="100%"
            h="100%"
            bg="black"
            borderRadius="30px 30px 0px 0px"
            overflow="hidden"
          >
            <Box w="100%" h="100%" zIndex="1">
              <Stack
                py="30px"
                alignItems="center"
                zIndex="4"
                position="relative"
                bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
              >
                <Avatar showBorder borderColor="cyan" size="lg" />
                <Text
                  lineHeight="1em"
                  fontSize="20px"
                  fontWeight="bold"
                  color="white"
                  py="5px"
                >
                  {DJname ? DJname : "Your DJ Name"}
                </Text>
                <HStack>
                  <FiHeadphones color="#fff" />
                  <Text
                    lineHeight="1em"
                    fontSize="16px"
                    color="white"
                    fontWeight="500"
                  >
                    {ShortBio ? ShortBio : "Description"}
                  </Text>
                </HStack>
              </Stack>
              <Box padding="15px" boxShadow="lg" bg="white">
                <SkeletonText noOfLines={4} spacing="4" skeletonHeight="2" />
              </Box>
            </Box>
          </Box>
        </Box>
      </VStack>
      <Stack bg="#fff" borderRadius="10px 10px 0px 0px" py="20px" px="20px">
        <FormControl mb={4}>
          <FormLabel htmlFor="djName">DJ Name</FormLabel>
          <Input
            type="text"
            id="djName"
            placeholder="Enter your DJ name"
            onChange={(e) => setDJname(e.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Short Bio</FormLabel>
          <Input
            type="text"
            placeholder="e.g. DJ & Producer"
            onChange={(e) => setShortBio(e.target.value)}
          />
        </FormControl>
      </Stack>
    </>
  );
};

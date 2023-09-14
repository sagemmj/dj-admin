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
  extendTheme,
  SkeletonText,
  ChakraProvider,
  FormErrorMessage, 
  InputLeftElement,

} from "@chakra-ui/react";
import MobileFrame from "./MobileFrame ";
import { FaHeadphones, FaUser } from "react-icons/fa";

const labelStyle = {
  fontSize: "12px",
  lineHeight: "1em",
  pl: "10px",
  pt: "10px",
};

const helpStyle = {
  fontSize: "12px",
  lineHeight: "1em",
  pt: "10px",
  pl:"10px"
};

export const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [DJname, setDJname] = useState("");
  const [Username, setUsername] = useState("");

  return (
    
      <Stack bg="#fff" pt="20px" pb="20px" px="20px" gap="15px">
        <Box textAlign="center">
        <Heading mb="5px"fontSize="20px">Welcome to DJfan</Heading>
        <Heading fontSize="14px" fontWeight="500">Add your names to complete your account.</Heading>
        </Box>
        <FormControl >
        <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <FaHeadphones color='#111' />
    </InputLeftElement>
          <Input
            type="text"
            id="djName"
            placeholder="Artist Name"
            onChange={(e) => setDJname(e.target.value)}
          />
          {/* It is important that the Label comes after the Control due to css selectors */}
          </InputGroup>
        </FormControl>
        <FormControl  >
          <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <FaUser color='#111' />
    </InputLeftElement>
          <Input
            type="text"
            id="djName"
            placeholder="Full Name"
            onChange={(e) => setDJname(e.target.value)}
          />
          </InputGroup>
          <Text {...helpStyle}>
                    100% Privacy. Only your DJ name will be public.
                  </Text>
        </FormControl>

        

        

        
        
      
      </Stack>
  );
};

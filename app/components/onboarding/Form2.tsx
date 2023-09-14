"use client";
import { useState } from "react";
import {
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Text,
  FormHelperText,
  Textarea,
  Select,
  Stack,
  Box,
  InputRightElement,
  InputLeftAddon
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
const labelStyle = {
  fontSize: "12px",
  lineHeight: "1em",
  pl: "10px",
  pt: "5px",
};
const helpStyle = {
  fontSize: "12px",
  lineHeight: "1em",
  pt: "10px",
  
  
};
export const Form2 = () => {

  const [ShortBio, setShortBio] = useState("");
  const [Username, setUsername] = useState("");
  return (
    <Stack bg="#fff" pt="20px" pb="20px" px="20px" gap="15px"><Box textAlign="center">
        <Heading mb="5px"fontSize="20px">Choose a Username</Heading>
        <Heading fontSize="14px" fontWeight="500">Your username creates your profile page link</Heading>
        </Box>
      <FormControl  >
        <InputGroup size='md'>
    <InputLeftAddon children='djfan.app/artists/' />
          <Input
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          /></InputGroup>
          
          
        </FormControl>
      
    </Stack>
  );
};

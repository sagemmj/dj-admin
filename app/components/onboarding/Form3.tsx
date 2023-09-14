"use client";
import React, { useState } from "react";
import {
  Heading,
  FormControl,
  Flex,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Stack,
  Textarea,
  FormHelperText,
  Box,
  Link,
} from "@chakra-ui/react";
import { FaInstagram, FaLink, FaSoundcloud } from "react-icons/fa";
const iconStyle = {
  borderRadius:"0px",
                borderWidth:"0",
                borderColor:"#ffffff00",
                p:"0px 2px 0px 0px",
                width:"40px",
                justifyContent:"center",
};
export const Form3 = () => {
  const [IG, setIG] = useState("");
  const [SC, setSC] = useState("");
  const [WB, setWB] = useState("");
  return (
    <Stack bg="#fff" pt="20px" pb="20px" px="20px" gap="15px">
        <Box textAlign="center">
        <Heading mb="5px"fontSize="20px">Add Profile Links</Heading>
        <Heading fontSize="14px" fontWeight="500">Link to your website & other social profiles</Heading>
        </Box>
        <FormControl>
          <Box border="2px solid #3e0080" overflow="hidden" borderRadius="5px">
            <InputGroup
              overflow="hidden"
              borderRadius="0px"
              borderWidth="0"
              borderColor="#ffffff00"
            >
              <InputLeftAddon
                bgGradient="linear(to-r,#5c03bc, #e536ab)"
                {...iconStyle}
              >
                <FaInstagram fontSize="24px" color="white" />
              </InputLeftAddon>
              <Input
                type="text"
                borderRadius="0px"
                borderWidth="0"
                borderColor="#ffffff00"
                placeholder="Instagram Username"
                focusBorderColor="#ffffff00"
                onChange={(e) => setIG(e.target.value)}
              />
            </InputGroup>
          </Box>
          {IG && (
            <Link
              href={`https://instagram.com/${IG}`}
              target="_blank"
              rel="noopener noreferrer"
              pt="10px"
              display="flex"
              pl="10px"
            >
              instagram.com/<b>{IG}</b>
            </Link>
          )}
        </FormControl>
        <FormControl >
          <Box border="2px solid #FF5500" overflow="hidden" borderRadius="5px">
            <InputGroup
              overflow="hidden"
              borderRadius="0px"
              borderWidth="0"
              borderColor="#ffffff00"
            >
              <InputLeftAddon
                bg="#FF5500"
                {...iconStyle}
              >
                <FaSoundcloud fontSize="25px" color="white" />
              </InputLeftAddon>
              <Input
                type="text"
                borderRadius="0px"
                borderWidth="0"
                borderColor="#ffffff00"
                placeholder="SoundCloud Username"
                focusBorderColor="#ffffff00"
                onChange={(e) => setSC(e.target.value)}
              />
            </InputGroup>
          </Box>
          {SC && (
            <Link
              href={`https://soundcloud.com/${SC}`}
              target="_blank"
              rel="noopener noreferrer"
              pt="10px"
              display="flex"
              pl="10px"
            >
              soundcloud.com/<b>{SC}</b>
            </Link>
          )}
        </FormControl>
        <FormControl>
          <Box border="2px solid #111" overflow="hidden" borderRadius="5px">
            <InputGroup
              overflow="hidden"
              borderRadius="0px"
              borderWidth="0"
              borderColor="#ffffff00"
            >
              <InputLeftAddon
                bg="#fff"
                {...iconStyle}
                borderRight="2px solid #111"
              >
                <FaLink fontSize="20px" color="#111" />
              </InputLeftAddon>
              <Input
                type="url"
                borderRadius="0px"
                borderWidth="0"
                borderColor="#ffffff00"
                placeholder="Website e.g. artistname.com"
                focusBorderColor="#ffffff00"
                onChange={(e) => setWB(e.target.value)}
              />
            </InputGroup>
          </Box>
          {WB && (
            <Box as="span" pt="10px" display="flex" pl="10px">
              Website:&nbsp;
              <Link
                href={`https://${WB}`}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: "underline" }}
              >
                https://<b>{WB}</b>
              </Link>
            </Box>
          )}
        </FormControl>
      </Stack>
  );
};

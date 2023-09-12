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

export const Form3 = () => {
  const [IG, setIG] = useState("");
  const [SC, setSC] = useState("");
  const [WB, setWB] = useState("");
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Profile Links
      </Heading>
      <Stack>
        <FormControl mb={4}>
          <Box border="2px solid #3e0080" overflow="hidden" borderRadius="5px">
            <InputGroup
              size="lg"
              overflow="hidden"
              borderRadius="0px"
              borderWidth="0"
              borderColor="#ffffff00"
            >
              <InputLeftAddon
                bgGradient="linear(to-r,#5c03bc, #e536ab)"
                borderRadius="0px"
                borderWidth="0"
                borderColor="#ffffff00"
                width="55px"
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
        <FormControl mb={4}>
          <Box border="2px solid #FF5500" overflow="hidden" borderRadius="5px">
            <InputGroup
              size="lg"
              overflow="hidden"
              borderRadius="0px"
              borderWidth="0"
              borderColor="#ffffff00"
            >
              <InputLeftAddon
                bg="#FF5500"
                borderRadius="0px"
                borderWidth="0"
                borderColor="#ffffff00"
                width="55px"
              >
                <FaSoundcloud fontSize="24px" color="white" />
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
        <FormControl mb={4}>
          <Box border="2px solid #111" overflow="hidden" borderRadius="5px">
            <InputGroup
              size="lg"
              overflow="hidden"
              borderRadius="0px"
              borderWidth="0"
              borderColor="#ffffff00"
            >
              <InputLeftAddon
                bg="#fff"
                borderRadius="0px"
                borderWidth="0"
                borderColor="#ffffff00"
                width="55px"
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
    </>
  );
};

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
      <Stack bg="#fff" pt="20px" pb="0px" px="20px">
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

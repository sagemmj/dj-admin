"use client";

import { useState } from "react";
import {
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Image,
  VStack,
  Text,
  Input,
} from "@chakra-ui/react";

export const PestForm3 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <FormControl mr="5%">
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Dddd name
          </FormLabel>
          <Input id="last-name" placeholder="last name" />
        </FormControl>
    </>
  );
};

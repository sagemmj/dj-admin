"use client";

import { useState } from "react";
import {
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import Facts from "./Facts";

export const PestForm2 = ({ buildingType }: { buildingType: string }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <FormControl mr="5%">
        <FormLabel htmlFor="first-name" fontWeight={"normal"}>
          Dddd name
        </FormLabel>
        <Input id="first-name" placeholder="First name" />
      </FormControl>
      {buildingType === "Commercial" && <Text>Test</Text>}
    </>
  );
};

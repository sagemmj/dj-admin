"use client";

import {
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormHelperText,
  Textarea,
  Select,
  Stack,
  InputRightElement,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export const Form4 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <Stack p="20px" bg="#fff" mt="20px" borderRadius="10px">
        <FormControl mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder=" First Name" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Last Name" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input type="text" placeholder="e.g. DJ & Producer" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Music Genre</FormLabel>
          <Input type="text" placeholder="e.g. Techno, Tech House" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Location</FormLabel>
          <Input type="text" placeholder="Enter your location" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Bookings Contact</FormLabel>
          <Input type="text" placeholder="Enter your bookings contact" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Management Contact</FormLabel>
          <Input type="text" placeholder="Enter your management contact" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>About Me</FormLabel>
          <Textarea placeholder="Write something about yourself..." />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>New Email Address</FormLabel>
          <Input type="text" placeholder="Enter only username (no link)" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Confirm Email Address</FormLabel>
          <Input type="text" placeholder="Enter only username (no link)" />
        </FormControl>

        <Button
          type="submit"
          background="#300a6e"
          color="#fff"
          fontSize="18px"
          _hover={{ background: "#111" }}
          height="45px"
        >
          UPDATE PROFILE <FaArrowRight style={{ marginLeft: "5px" }} />
        </Button>
      </Stack>
    </>
  );
};

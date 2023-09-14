"use client";
import { useState } from "react";
import {
  Button,
  Heading,
  Flex,
  Text,
  HStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { countries } from "../profilesettings/CountryList";
const helpStyle = {
  fontSize: "12px",
  lineHeight: "1em",
  pt: "10px",
  pl:"10px"
};
export const Form4 = () => {
  
  return (
    <Stack bg="#fff" pt="20px" pb="20px" px="20px" gap="15px">
      <Box textAlign="center">
        <Heading mb="5px"fontSize="20px">Basic Profile Information</Heading>
        <Box fontSize="14px" fontWeight="500">You can edit all of these later</Box>
        </Box>
        
        <FormControl>
          <FormLabel>Short Bio</FormLabel>
          <Input type="text" placeholder="e.g. DJ & Producer" />
          <Popover>
  <PopoverTrigger>
    <Box {...helpStyle} color="#a600ff" cursor="pointer"textDecoration="underline">More Examples</Box>
  </PopoverTrigger>
  <PopoverContent _focus={{boxShadow:"none"}}>
    <Stack  p="15px">
      <Heading fontSize="15px" fontWeight="600">Make it short & sweet!</Heading>
      <UnorderedList fontSize="13px"> 
  <ListItem>Label Owner & Artist</ListItem>
  <ListItem>A wild Artist from Ibiza
</ListItem>
  <ListItem>Electronic Musician</ListItem>
  <ListItem>Label Owner & Producer</ListItem>
  <ListItem>Turntablist & Sound Curator</ListItem>
</UnorderedList>
      </Stack>
    <PopoverCloseButton />
  </PopoverContent>
</Popover>
  
          

        </FormControl>

        <FormControl>
          <FormLabel>Main Location</FormLabel>
          <Input type="text" placeholder="e.g. Ibiza or London" />
        </FormControl>

        <FormControl>
        <FormLabel>Where are you from?</FormLabel>
        <Select placeholder="Select Country">
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </FormControl>

        
    </Stack>
  );
};

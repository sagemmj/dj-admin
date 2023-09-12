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
} from "@chakra-ui/react";
import Facts from "./Facts";

export const PestForm1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [buildingType, setBuildingType] = useState("");
  return (
    <>
      <FormControl id="building">
        <FormLabel textAlign="center">
          What type of building are you in?
        </FormLabel>
        <Flex direction="row" justifyContent="center" gap="20px">
          <VStack
            gap="0px"
            width="200px"
            onClick={() => setBuildingType("Commercial")}
            cursor="pointer"
            borderColor={buildingType === "Commercial" ? "green" : "grey"}
            bgColor={buildingType === "Commercial" ? "green" : "transparent"}
            color={buildingType === "Commercial" ? "white" : "black"}
            borderWidth="2px"
          >
            <Image
              src="https://dynopest.co.uk/wp-content/uploads/2023/03/commerical.jpg"
              alt="Commercial"
            />
            <Text py="10px" lineHeight="1em" textAlign="center">
              Commercial
            </Text>
          </VStack>
          <VStack
            gap="0px"
            width="200px"
            onClick={() => setBuildingType("Residential")}
            cursor="pointer"
            borderColor={buildingType === "Residential" ? "green" : "grey"}
            bgColor={buildingType === "Residential" ? "green" : "transparent"}
            color={buildingType === "Residential" ? "white" : "black"}
            borderWidth="2px"
          >
            <Image
              src="https://dynopest.co.uk/wp-content/uploads/2023/03/uk-homes-300x200-1.jpg"
              alt="Residential"
            />
            <Text py="10px" lineHeight="1em" textAlign="center">
              Residential
            </Text>
          </VStack>
        </Flex>
        {buildingType === "Commercial" && <Facts />}
      </FormControl>
    </>
  );
};

import { Card, Flex, Heading, Text, HStack } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";

export default function SubscriberStats() {
  return (
    <Flex h="100%" wrap="wrap" gap="20px" justifyContent="space-between">
      <Card
        w={{ base: "100%", md: "30%" }}
        gap="10px"
        py="25px"
        bg="#9b5de5"
        color="#ffffff"
        alignItems="center"
        lineHeight="1em"
      >
        <Text
          fontSize="18px"
          fontWeight="600"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="5px"
        >
          <FaUsers /> Total Members
        </Text>
        <Heading lineHeight="1em" fontSize="32px">
          1021
        </Heading>
      </Card>
      <Card
        alignItems="center"
        w={{ base: "100%", md: "30%" }}
        gap="10px"
        py="25px"
        bg="#ffffff"
        lineHeight="1em"
      >
        <Text fontSize="18px" fontWeight="600">
          Total Fans
        </Text>
        <Heading lineHeight="1em" fontSize="32px">
          1021
        </Heading>
      </Card>
      <Card
        w={{ base: "100%", md: "30%" }}
        gap="10px"
        py="25px"
        alignItems="center"
        lineHeight="1em"
        bg="#ffffff"
      >
        <Text fontSize="18px" fontWeight="600">
          Membership Income
        </Text>
        <HStack align="flex-end" gap="5px" justifyContent="center">
          <Heading lineHeight="1em" fontSize="32px">
            $300
          </Heading>
          <Text mb="0px" fontSize="14px" fontWeight="600" color="#9b5de5">
            per month
          </Text>
        </HStack>
      </Card>
    </Flex>
  );
}

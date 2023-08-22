import { Flex, Heading, Text, Stack, Button } from "@chakra-ui/react";
import PayoutHistory from "~/components/payouts/PayoutHistory";
import { FaStripeS, FaWallet } from "react-icons/fa";
import Header from "~/components/Header";

export default function Payouts() {
  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      flexDirection="column"
      bg="#ececec"
      pb="50px"
    >
      <Header />
      <Flex w="100%" justifyContent="center">
        <Flex
          flexDirection="column"
          gap="35px"
          w="100%"
          maxW="1000px"
          pt="25px"
          px="15px"
        >
          <Stack gap="10px">
            <Heading fontSize="30px" lineHeight="1em" alignSelf="flex-start">
              Payouts
            </Heading>
            <Text lineHeight="1em" alignSelf="flex-start">
              View and keep track of your payouts.
            </Text>
          </Stack>
          <Flex h="100%" justifyContent="space-between" wrap="wrap" gap="30px">
            <Flex
              bg="#ffffff"
              borderRadius="10px"
              overflow="hidden"
              w={{ base: "100%", md: "60%" }}
              flexDir="column"
            >
              <Flex bg="#9b5de5" px="20px" py="6px">
                <Text fontSize="18px" fontWeight="600" color="white">
                  Available for Payout
                </Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
                gap="5px"
                height="100%"
                p="20px"
              >
                <Text fontWeight="600">Balance</Text>
                <Heading>$0.00</Heading>
                <Text>
                  This is the amount you currently have in earnings, available
                  for your next payout.
                </Text>
              </Flex>
            </Flex>
            <Flex
              bg="#ffffff"
              borderRadius="10px"
              overflow="hidden"
              flexDir="column"
              w={{ base: "100%", md: "35%" }}
            >
              <Flex bg="#111111" px="20px" py="8px">
                <Text fontSize="18px" fontWeight="600" color="white">
                  Payout Account
                </Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap="15px"
                height="100%"
                p="20px"
              >
                <Button
                  leftIcon={<FaWallet />}
                  bg="#9b5de5"
                  borderColor="#9b5de5"
                  color="#ffffff"
                  _hover={{
                    bg: "#5DE59A",
                    color: "#ffffff",
                    borderColor: "#5DE59A",
                  }}
                >
                  WITHDRAW EARNINGS
                </Button>
                <Button
                  leftIcon={<FaStripeS />}
                  _hover={{
                    bg: "#111111",
                    color: "#ffffff",
                    borderColor: "#111111",
                  }}
                >
                  LINK STRIPE ACCOUNT
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Stack gap="15px">
            <Heading fontSize="24px" alignSelf="flex-start">
              Recent Payouts
            </Heading>
            <PayoutHistory />
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

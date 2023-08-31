import {
  Flex,
  Heading,
  Link,
  Text,
  Stack,
  Button,
  HStack,
} from "@chakra-ui/react";
import ConnectedAccounts from "~/components/partners/ConnectedAccounts";
import Header from "~/components/Header";
import { FaLink, FaCopy } from "react-icons/fa";
import QRcode from "~/components/partners/QRcode";
import HeaderAdmin from "~/components/HeaderAdmin";
import EarningsMenu from "~/components/payouts/EarningsMenu";

export default function Invitations() {
  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      flexDirection="column"
      bg="#ececec"
      pb="50px"
    >
      <HeaderAdmin />
      <EarningsMenu />
      <Flex w="100%" justifyContent="center">
        <Flex
          flexDirection="column"
          gap="35px"
          w="100%"
          maxW="1000px"
          pt="25px"
          px="15px"
        >
          <Flex direction="column" gap="15px">
            <Heading fontSize="24px" alignSelf="flex-start">
              Partner Link
            </Heading>
            <Flex
              bg="#ffffff"
              borderRadius="10px"
              border="2px solid #9b5de5"
              overflow="hidden"
              w="100%"
            >
              <Stack
                alignItems="flex-start"
                textAlign="left"
                gap="10px"
                height="100%"
                py="20px"
                px="20px"
              >
                <Heading fontSize="20px">Your unique invitation link: </Heading>
                <Text>
                  Simply direct DJs to sign up via this form and we will
                  automatically connect you with their account to receive
                  lifetime commissions.
                </Text>
                <Link
                  display="flex"
                  alignItems="center"
                  gap="10px"
                  fontSize="20px"
                  _hover={{
                    color: "#5DE59A",
                  }}
                >
                  <FaLink color="#9b5de5" />
                  https://djfan.app/invite?by=dmj
                </Link>
                <HStack>
                  <Button
                    rightIcon={<FaCopy />}
                    bg="#9b5de5"
                    borderWidth="0px"
                    color="#ffffff"
                    mt="10px"
                    _hover={{
                      bg: "#5DE59A",
                      color: "#ffffff",
                    }}
                  >
                    Copy Link
                  </Button>
                  <QRcode />
                </HStack>
              </Stack>
            </Flex>
          </Flex>
          <ConnectedAccounts />
        </Flex>
      </Flex>
    </Flex>
  );
}

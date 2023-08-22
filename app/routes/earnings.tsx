import {
  Flex,
  Heading,
  Text,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Header from "~/components/Header";
import SubscriberStats from "~/components/stats/SubscribersStats";
import Earnings30 from "~/components/stats/Earnings30";
import Earnings365 from "~/components/stats/Earnings365";
import EarningsAllTime from "~/components/stats/EarningsAllTime";

export default function Earnings() {
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
          maxW="1000px"
          w="100%"
          pt="25px"
          px="15px"
        >
          <Flex flexDirection="column" gap="20px">
            <Stack gap="10px">
              <Heading fontSize="30px" lineHeight="1em" alignSelf="flex-start">
                Statistics
              </Heading>
              <Text lineHeight="1em" alignSelf="flex-start">
                Here are your statistics at a glance...
              </Text>
            </Stack>
            <SubscriberStats />
          </Flex>
          <Flex flexDirection="column" gap="15px">
            <Heading fontSize="30px" lineHeight="1em" alignSelf="flex-start">
              Earnings
            </Heading>
            <Tabs variant="soft-rounded" colorScheme="green" w="100%">
              <TabList>
                <Tab p="5px" px="10px">
                  Last 30 Days
                </Tab>
                <Tab p="5px" px="10px">
                  Last 365 Days
                </Tab>
                <Tab p="5px" px="10px">
                  All Time
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel p="0" pt="20px">
                  <Earnings30 />
                </TabPanel>
                <TabPanel p="0" pt="20px">
                  <Earnings365 />
                </TabPanel>
                <TabPanel p="0" pt="20px">
                  <EarningsAllTime />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

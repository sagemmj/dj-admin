import {
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import FanTable from "~/components/fans/FanTable";
import GoldTable from "~/components/fans/GoldTable";
import VIPTable from "~/components/fans/VIPTable";
import HeaderAdmin from "~/components/HeaderAdmin";

const tabStyle = {
  fontSize: "20px",
  fontWeight: "600",
  _selected: { color: "white", background: "#8338ec" },
};

export default function Fans() {
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
      <Flex w="100%" justifyContent="center" flexDirection="column">
        <Flex
          direction="column"
          maxW="1000px"
          px={{ base: "15px", md: "25px" }}
          w="100%"
          alignSelf="center"
          gap="15px"
          pt="15px"
        >
          <Text fontSize="28px" fontWeight="bold">
            Your Fans
          </Text>
          <Tabs
            variant="unstyled"
            bg="white"
            borderRadius="5px"
            overflow="hidden"
          >
            <TabList bg="#111" color="#fff">
              <Tab {...tabStyle}>All</Tab>
              <Tab {...tabStyle}>Gold</Tab>
              <Tab {...tabStyle}>VIP</Tab>
            </TabList>

            <TabPanels>
              <TabPanel p="0">
                <FanTable />
              </TabPanel>
              <TabPanel p="0">
                <GoldTable />
              </TabPanel>
              <TabPanel p="0">
                <VIPTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
}

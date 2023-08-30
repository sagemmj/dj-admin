import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import UserStats from "~/components/userstats/userstats";
import FanTable from "~/components/userstats/FanTable";
import Header from "~/components/Header";
import HeaderAdmin from "../HeaderAdmin";

type StatData = {
  total: number;
  last7Days: number;
};

const Card = ({
  title,
  total,
  last7Days,
}: {
  title: string;
  total: number;
  last7Days: number;
}) => {
  return (
    <Box
      p={4}
      bg="white"
      shadow="md"
      borderRadius="md"
      width={{ base: "70%", md: "30%" }}
      mb={4}
    >
      <Text fontWeight="bold" mb={2} fontSize="22px">
        {title}
      </Text>
      <Flex justifyContent="space-between" gap="20px">
        <Box>
          <Text fontSize="26px">{total}</Text>
          <Text fontSize="20px" color="gray.500">
            Total
          </Text>
        </Box>
        <Box>
          <Text fontSize="26px">{last7Days}</Text>
          <Text fontSize="20px" fontWeight="500" color="#03c700">
            Last 7 Days
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Stats = () => {
  const [fanStats, setFanStats] = useState<StatData>({
    total: 0,
    last7Days: 0,
  });
  const [creatorStats, setCreatorStats] = useState<StatData>({
    total: 0,
    last7Days: 0,
  });
  const [partnerStats, setPartnerStats] = useState<StatData>({
    total: 0,
    last7Days: 0,
  });

  useEffect(() => {
    // Simulating API calls to fetch user data
    setTimeout(() => {
      setFanStats({ total: 100, last7Days: 10 });
      setCreatorStats({ total: 50, last7Days: 10 });
      setPartnerStats({ total: 20, last7Days: 10 });
    }, 1000);
  }, []);

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
      <Flex w="100%" justifyContent="center">
        <Flex
          direction="column"
          maxW="700px"
          w="100%"
          alignSelf="center"
          gap="10px"
          pt="20px"
          pb="20px"
        >
          <Text fontSize="22px" fontWeight="bold">
            User Statistics
          </Text>
          <Flex flexWrap="wrap" gap="20px" justifyContent="center">
            <Card
              title="Fans"
              total={fanStats.total}
              last7Days={fanStats.last7Days}
            />
            <Card
              title="Creators"
              total={creatorStats.total}
              last7Days={creatorStats.last7Days}
            />
            <Card
              title="Partners"
              total={partnerStats.total}
              last7Days={partnerStats.last7Days}
            />
          </Flex>
        </Flex>

        <Flex
          direction="column"
          maxW="700px"
          w="100%"
          alignSelf="center"
          gap="10px"
        >
          <Text fontSize="22px" fontWeight="bold">
            User Accounts
          </Text>
          <Tabs
            variant="unstyled"
            bg="white"
            borderRadius="5px"
            overflow="hidden"
          >
            <TabList bg="#111" color="#fff">
              <Tab _selected={{ color: "white", background: "blue" }}>Fans</Tab>
              <Tab _selected={{ color: "white", background: "blue" }}>DJs</Tab>
              <Tab _selected={{ color: "white", background: "blue" }}>
                Partners
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel p="0">
                <FanTable />
              </TabPanel>
              <TabPanel p="0">
                <FanTable />
              </TabPanel>
              <TabPanel p="0">
                <FanTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Stats;

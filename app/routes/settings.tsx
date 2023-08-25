import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
//import Layout from "../../layout/Layout";

import ProfileSettings from "~/components/settings/ProfileSettings";
import AccountSettings from "~/components/settings/AccountSettings";
import BillingSettings from "~/components/settings/BillingSettings";
import Memberships from "~/components/settings/Memberships";
import Notifications from "~/components/settings/Notifications";
import HeaderFan from "~/components/HeaderFan";
import NoPurchases from "~/components/settings/NoPurchases";
import NoSubscriptions from "~/components/settings/NoSubscriptions";
import Post from "~/components/posts";
import PostCardVideo from "~/components/Content";

export default function Settings() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabProps = {
    as: Button,
    variant: "unstyled",
    fontSize: { base: "15px", sm: "16px" },
    fontWeight: "500",
    _selected: { color: "#8338ec", fontWeight: "500", bg: "white" },
  };
  const panelProps = { bg: "white", mt: "20px", borderRadius: "15px" };
  return (
    // <Layout>
    <Box>
      <HeaderFan />
      <Flex
        bg="gray.200"
        mx="auto"
        py="0px"
        px="10px"
        pb="60px"
        flexDirection="column"
        align="center"
        minHeight="100vh"
      >
        <Tabs
          index={tabIndex}
          onChange={setTabIndex}
          pt="15px"
          variant="soft-rounded"
          colorScheme="green"
          w={{ base: "100%", sm: "600px" }}
        >
          <Box bg="white" px="10px" py="10px" borderRadius="15px">
            <TabList justifyContent="center">
              <Tab {...tabProps}>Account</Tab>
              <Tab {...tabProps}>Purchases</Tab>
              <Tab {...tabProps}>Subscriptions</Tab>
            </TabList>
          </Box>
          <TabPanels>
            <TabPanel {...panelProps}>
              <PostCardVideo />
            </TabPanel>
            <TabPanel {...panelProps}>
              <NoPurchases />
            </TabPanel>
            <TabPanel {...panelProps}>
              <NoSubscriptions />
            </TabPanel>
            <TabPanel {...panelProps}>
              <BillingSettings />
            </TabPanel>
            <TabPanel {...panelProps}>
              <Notifications />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
    //</Layout>
  );
}

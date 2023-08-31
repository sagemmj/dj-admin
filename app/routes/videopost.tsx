import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Select,
  Stack,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaArrowRight, FaImages } from "react-icons/fa";
import FormFooter from "~/components/forms/formfooter";
import HeaderAdmin from "~/components/HeaderAdmin";

export default function VideoPost() {
  const [selectedButton, setSelectedButton] = React.useState("");
  const [bgColor, setBgColor] = React.useState("");

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
    setBgColor(buttonId === "single" || buttonId === "multiple" ? "black" : "");
  };
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
          flexDirection="column"
          w="100%"
          maxW="1000px"
          pt="25px"
          px="15px"
          alignItems="center"
        >
          <Flex
            gap="10px"
            bg="#fff"
            flexDirection="column"
            w={{ base: "100%", sm: "500px" }}
            borderRadius="10px"
            overflow="hidden"
          >
            <Flex background="#300a6e" justifyContent="center">
              <Heading
                color="#fff"
                fontSize="20px"
                display="flex"
                alignItems="center"
                py="15px"
              >
                Create Video Post
              </Heading>
            </Flex>
            <Stack px="20px" pt="10px" pb="20px">
              <Box
                color="#111"
                fontSize="16px"
                fontWeight="600"
                lineHeight="1em"
                mb="5px"
              >
                Select Post Type
              </Box>
              <HStack mb={4}>
                <Button
                  onClick={() => handleButtonClick("single")}
                  bg={selectedButton === "single" ? "black" : "#300a6e"}
                  color={selectedButton === "single" ? "white" : "white"}
                  _hover={{ bg: "#6000fc" }}
                >
                  Video Link
                </Button>
                <Button
                  onClick={() => handleButtonClick("multiple")}
                  bg={selectedButton === "multiple" ? "black" : "#300a6e"}
                  color={selectedButton === "multiple" ? "white" : "white"}
                  _hover={{ bg: "#6000fc" }}
                >
                  Upload Video
                </Button>
              </HStack>
              <FormControl mb={4}>
                <Textarea placeholder="Write something about this post..." />
              </FormControl>
              <FormControl
                mb={4}
                id="single"
                style={{
                  display: selectedButton === "single" ? "block" : "none",
                }}
              >
                <FormLabel>Video Link</FormLabel>
                <Input
                  type="text"
                  placeholder="e.g. https://www.youtube.com/watch?..."
                />
                <Box lineHeight="1em" fontSize="12px" mt="10px">
                  YouTube & Vimeo links accepted
                </Box>
              </FormControl>
              <FormControl
                mb={4}
                id="multiple"
                style={{
                  display: selectedButton === "multiple" ? "block" : "none",
                }}
              >
                <FormLabel>Upload Video</FormLabel>
                <Input borderWidth="0px" p="2px" type="file" accept="video/*" />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Who can view this post?</FormLabel>
                <Select placeholder="Select privacy option">
                  <option value="everyone">Everyone</option>
                  <option value="gold">Gold Members</option>
                  <option value="vip">VIP Members</option>
                </Select>
              </FormControl>
              <Button
                type="submit"
                background="#300a6e"
                color="#fff"
                fontSize="18px"
                _hover={{ background: "#111" }}
                height="45px"
              >
                CREATE POST <FaArrowRight style={{ marginLeft: "5px" }} />
              </Button>
            </Stack>
          </Flex>
          <FormFooter />
        </Flex>
      </Flex>
    </Flex>
  );
}

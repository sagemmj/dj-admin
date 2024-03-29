import React from "react";
import ReactPlayer from "react-player";
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
  Textarea,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import HeaderAdmin from "~/components/HeaderAdmin";
import FormFooter from "~/components/forms/formfooter";

export default function AudioPost() {
  const [selectedButton, setSelectedButton] = React.useState("");
  const [bgColor, setBgColor] = React.useState("");
  const [audioLink, setAudioLink] = React.useState("");

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
                gap="6px"
                py="15px"
              >
                Create Audio Post
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
                  Audio Link
                </Button>
                <Button
                  onClick={() => handleButtonClick("multiple")}
                  bg={selectedButton === "multiple" ? "black" : "#300a6e"}
                  color={selectedButton === "multiple" ? "white" : "white"}
                  _hover={{ bg: "#6000fc" }}
                >
                  Upload Audio
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
                <FormLabel>Audio Link</FormLabel>
                <Input
                  type="text"
                  name="audiolink"
                  placeholder="e.g. https://soundcloud.com/..."
                  value={audioLink} // Bind the value to the state variable
                  onChange={(e) => setAudioLink(e.target.value)} // 2. Update the state variable on change
                />
                <Box lineHeight="1em" fontSize="12px" mt="10px">
                  <b>Accepted links</b>: Soundcloud, Spotify, Mixcloud.
                </Box>
              </FormControl>
              <FormControl
                mb={4}
                id="multiple"
                style={{
                  display: selectedButton === "multiple" ? "block" : "none",
                }}
              >
                <FormLabel>Upload Audio File</FormLabel>
                <input type="file" accept="audio/*" />
              </FormControl>
              {audioLink && (
                <Flex id="embedPreview" p="0" mb={4} flexDirection="column">
                  <Text pb="10px" fontSize="14px" fontWeight="600" color="#111">
                    Audio Embed Preview
                  </Text>
                  <Flex>
                    <ReactPlayer
                      width="100%"
                      height="180px"
                      w="100%"
                      url={audioLink}
                    />
                  </Flex>
                  <Popover>
                    <PopoverTrigger>
                      <Text
                        pt="10px"
                        fontSize="14px"
                        cursor="pointer"
                        fontWeight="600"
                        textAlign="right"
                      >
                        Not working?
                      </Text>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverCloseButton fontSize="12px" />
                      <Stack p="15px">
                        <Text fontSize="16px" fontWeight="600">
                          Common Fixes
                        </Text>
                        <Text fontSize="14px">
                          1. Try again to copy & paste the link
                        </Text>
                        <Text fontSize="14px">
                          2. Confirm the track is not set to private.
                        </Text>
                      </Stack>
                    </PopoverContent>
                  </Popover>
                </Flex>
              )}
              <FormControl mb={4}>
                <FormLabel color="#111" fontSize="16px" fontWeight="600">
                  Who can view this post?
                </FormLabel>
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
                CREATE POST
                <FaArrowRight fontSize="14px" style={{ marginLeft: "5px" }} />
              </Button>
            </Stack>
          </Flex>

          <FormFooter />
        </Flex>
      </Flex>
    </Flex>
  );
}

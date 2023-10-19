import React from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Input,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { FiLock, FiShoppingBag } from "react-icons/fi";
import HeaderAdmin from "~/components/HeaderAdmin";
import FormFooter from "~/components/forms/formfooter";

export default function EmbedCheck() {
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
                Embed Checker
              </Heading>
            </Flex>
            <Stack px="20px" pt="10px" pb="20px">
              <FormControl mb={4} id="single">
                <FormLabel>Video / Audio Link</FormLabel>
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
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

import {
    Flex,
    Link,
    Box,
    AspectRatio,
    Text,
    Image,
    VStack,
    Avatar,
    HStack,
  } from "@chakra-ui/react";
  import {
    FaFacebookSquare,
    FaHeadphones,
    FaInstagram,
    FaMusic,
    FaSoundcloud,
    FaSpotify,
    FaYoutube,
    FaYoutubeSquare,
  } from "react-icons/fa";
  const buttonStyle = {
    color: "#111",
    background: "#fff",
    px: "15px",
    gap: "8px",
    py: "10px",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    width: "190px",
  };
  const textStyle = {
    fontSize: "18px",
    fontWeight: "600",
  };
  const iconStyle = {
    fontSize: "28px",
    color: "#fff",
  };
  
  export default function Bio() {
    return (
      <Flex
        w="100%"
        h="100%"
        minH="100vh"
        flexDirection="column"
        alignItems="center"
        bg="#111"
        pt="40px"
        px="10px"
      >
        
            <iframe src="https://www.foxyapps.com/embed/1503c20b-8f42-4326-9604-2eae2cb8adf9"
 width="95%" height="700px"
 style={{borderRadius:"0.5rem",border:"none", maxWidth:"400px"}}
 allow="clipboard-read; clipboard-write"/>
      </Flex>
    );
  }
  
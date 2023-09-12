import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { keyframes } from "@emotion/react"; // or 'styled-components'
const moveUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const moveDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100px);
    opacity: 0;
  }
`;
export default function Facts() {
  const [isVisible, setIsVisible] = useState(true);
  const [animation, setAnimation] = useState(moveUp);

  const hideFooter = () => {
    setAnimation(moveDown);
    setTimeout(() => {
      setIsVisible(false);
    }, 1500); // match the duration of your animation
  };

  if (!isVisible) {
    return null;
  }

  return (
    isVisible && (
      <Flex
        animation={`${animation} 1.5s ease-out`}
        position="fixed"
        bottom="0px"
        width="100%"
        left="0px"
        bg="black"
        p="0"
        flexDirection="column"
        justifyContent="center"
        py="10px"
        px="20px"
        gap="10px"
        
      >
          <Heading
            fontSize={{ base: "22px", md: "28px" }}
            color="#fff"
            lineHeight="1em"
            textAlign="center"
          >
            Did you know?
          </Heading>
          <Box textAlign="center"color="#fff">Bed bugs are hematophagous, which means blood is their only food
source. Unlike many of their insect brethren, they aren’t interested in
human food. Just humans as food.</Box>
          
      </Flex>
    )
  );
}

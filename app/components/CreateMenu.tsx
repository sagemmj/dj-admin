import { Flex, Link, Text, Image, VStack } from "@chakra-ui/react";
const boxes = [
  {
    text: "Image Post",
    imageUrl: "https://media.djfan.app/images/imagepost.png",
    linkUrl: "/imagepost",
  },
  {
    text: "Video Post",
    imageUrl: "https://media.djfan.app/images/videopost.png",
    linkUrl: "/videopost",
  },
  {
    text: "Audio Post",
    imageUrl: "https://media.djfan.app/images/audiopost.png",
    linkUrl: "/audiopost",
  },
  {
    text: "Tour Date",
    imageUrl: "https://media.djfan.app/images/tourdate.png",
    linkUrl: "/tourdate",
  },
  {
    text: "New Product",
    imageUrl: "https://media.djfan.app/images/product.png",
    linkUrl: "/product",
  },
  {
    text: "Text Post",
    imageUrl: "https://media.djfan.app/images/textpost.png",
    linkUrl: "/textpost",
  },
];
export default function CreateMenu() {
  return (
    <Flex
      borderRadius="15px 15px 0px 0px"
      border="3px solid #111"
      h="100%"
      p="0"
      justifyContent="center"
      wrap="wrap"
      gap="0px"
      overflow="hidden"
    >
      {boxes.map((box, index) => (
        <Link
          key={index}
          href={box.linkUrl}
          w="50%"
          _hover={{ textDecoration: "none" }}
          _focus={{
            boxShadow: "0px 0px 0px black",
          }}
        >
          <VStack
            border="1px solid #dddddd"
            transition="all 0.3s ease-in-out"
            bg="#fff"
            py="20px"
            _hover={{ bg: "#5affce", border: "1px solid #5affce" }}
            gap="10px"
          >
            <Image width="40px" src={box.imageUrl} />
            <Text fontSize="20px" color="#111" fontWeight="600">
              {box.text}
            </Text>
          </VStack>
        </Link>
      ))}
    </Flex>
  );
}

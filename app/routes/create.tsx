import { Flex, Link, Text, Image, VStack } from "@chakra-ui/react";
import HeaderAdmin from "~/components/HeaderAdmin";
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
export default function Create() {
  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      flexDirection="column"
      bg="#111"
      pb="50px"
    >
      <HeaderAdmin />
      <Flex w="100%" justifyContent="center">
        <Flex
          flexDirection="column"
          gap="25px"
          w="100%"
          maxW="600px"
          pt="25px"
          px="15px"
        >
          <Text
            color="#fff"
            lineHeight="1em"
            fontSize="28px"
            fontWeight="600"
            textAlign="center"
            w="100%"
          >
            Create a new post
          </Text>
          <Flex h="100%" justifyContent="space-evenly" wrap="wrap" gap="20px">
            {boxes.map((box, index) => (
              <Link
                key={index}
                href={box.linkUrl}
                w={{ base: "45%", md: "30%" }}
              >
                <VStack bg="#fff" py="20px" gap="10px" borderRadius="15px">
                  <Image width="40px" src={box.imageUrl} />
                  <Text fontSize="20px" color="#111" fontWeight="600">
                    {box.text}
                  </Text>
                </VStack>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

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
                py="10px"
              >
                <FaImages fontSize="16px" /> Create Video Post
              </Heading>
            </Flex>
            <Stack p="20px">
              <FormControl mb={4}>
                <Textarea placeholder="Write something about this post..." />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Upload Video</FormLabel>
                <Input borderWidth="0px" p="2px" type="file" accept="video/*" />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Video Link</FormLabel>
                <Input
                  type="text"
                  placeholder="e.g. https://www.youtube.com/watch?..."
                />
                <Box lineHeight="1em" fontSize="12px" mt="10px">
                  YouTube & Vimeo links accepted
                </Box>
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

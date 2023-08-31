import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import HeaderAdmin from "~/components/HeaderAdmin";
import FormFooter from "~/components/forms/formfooter";

export default function TextPost() {
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
                Create Text Post
              </Heading>
            </Flex>
            <Stack px="20px" pt="10px" pb="20px">
              <FormControl mb={4}>
                <Textarea placeholder="Write something about this post..." />
              </FormControl>

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
                CREATE POST{" "}
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

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import FormFooter from "~/components/forms/formfooter";
import HeaderAdmin from "~/components/HeaderAdmin";

export default function TourDate() {
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
                Create Tour Date
              </Heading>
            </Flex>
            <Stack px="20px" pt="10px" pb="20px">
              <FormControl isRequired mb={4}>
                <FormLabel>Event Name</FormLabel>
                <Input type="text" placeholder="Enter name of event" />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Event Description</FormLabel>
                <Textarea placeholder="Write something about this event..." />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel>Release Date</FormLabel>
                <Input type="date" placeholder="Select a date" />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel>Start Time</FormLabel>
                <Input type="time" />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel>End Time</FormLabel>
                <Input type="time" />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel>Venue</FormLabel>
                <Input type="text" placeholder="e.g. Pacha" />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>City / Location</FormLabel>
                <Input type="text" placeholder="e.g. London or Ibiza" />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel>Event Artwork</FormLabel>
                <Input p="2px" type="file" accept="image/*" border="0px" />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Link to book or buy tickets</FormLabel>
                <Input type="url" placeholder="https://" />
              </FormControl>

              <Button
                type="submit"
                background="#300a6e"
                color="#fff"
                fontSize="18px"
                _hover={{ background: "#111" }}
                height="45px"
              >
                CREATE EVENT{" "}
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

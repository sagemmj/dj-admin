import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Input,
  Textarea,
  Divider,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { countries } from "./CountryList";
import ProfileImages from "./ProfileImages";

export default function ProfileSettings() {
  return (
    <Stack p="20px" bg="#fff" mt="20px" borderRadius="10px">
      <ProfileImages />
      <Box py="10px">
        <Divider borderColor="#858585" />
      </Box>
      <FormControl mb={4}>
        <FormLabel>DJ Name</FormLabel>
        <Input type="text" placeholder="Enter your DJ name" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Title</FormLabel>
        <Input type="text" placeholder="e.g. DJ & Producer" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Music Genre</FormLabel>
        <Input type="text" placeholder="e.g. Techno, Tech House" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Location</FormLabel>
        <Input type="text" placeholder="Enter your location" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Country</FormLabel>
        <Select placeholder="Select Country">
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Bookings Contact</FormLabel>
        <Input type="text" placeholder="Enter your bookings contact" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Management Contact</FormLabel>
        <Input type="text" placeholder="Enter your management contact" />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>About Me</FormLabel>
        <Textarea placeholder="Write something about yourself..." />
      </FormControl>

      <Button
        type="submit"
        background="#300a6e"
        color="#fff"
        fontSize="18px"
        _hover={{ background: "#111" }}
        height="45px"
      >
        UPDATE PROFILE <FaArrowRight style={{ marginLeft: "5px" }} />
      </Button>
    </Stack>
  );
}

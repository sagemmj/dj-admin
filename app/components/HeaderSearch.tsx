import {
  Input,
  InputLeftElement,
  InputGroup,
  Icon,
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
  PopoverBody,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function HeaderSearch() {
  return (
    <Flex gap={5}>
      <Popover>
        <PopoverTrigger>
          <InputGroup w={{ base: "100%", sm: "150px", md: "200px" }}>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="on-accent" boxSize="6" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              variant="filled"
              style={{
                backgroundColor: "white",
              }}
            />
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent w={{ base: "100%", sm: "150px", md: "200px" }}>
          <PopoverBody></PopoverBody>
        </PopoverContent>
      </Popover>
      <Button colorScheme="blue">Search</Button>
    </Flex>
  );
}

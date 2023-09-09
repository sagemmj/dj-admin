import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Input,
} from "@chakra-ui/react";
import { FaArrowRight, FaLock, FaUserLock } from "react-icons/fa";

export default function AccountSettings() {
  const handleResetPassword = () => {
    window.open("/reset-password", "_blank");
  };

  return (
    <>
      <Stack p="20px" bg="#fff" mt="20px" borderRadius="10px" gap="15px">
        <Heading textAlign="center" fontSize="20px">
          Want to reset your password?
        </Heading>
        <Button
          background="#300a6e"
          color="#fff"
          fontSize="18px"
          _hover={{ background: "#111" }}
          height="45px"
          onClick={handleResetPassword}
        >
          RESET PASSWORD{" "}
          <FaLock fontSize="14px" style={{ marginLeft: "5px" }} />
        </Button>
      </Stack>
      <Stack p="20px" bg="#fff" mt="20px" borderRadius="10px">
        <FormControl mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder=" First Name" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Last Name" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>New Email Address</FormLabel>
          <Input type="text" placeholder="Enter only username (no link)" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Confirm Email Address</FormLabel>
          <Input type="text" placeholder="Enter only username (no link)" />
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
      <Stack
        p="20px"
        bg="#fff"
        mt="20px"
        borderRadius="10px"
        alignItems="flex-start"
        gap="15px"
      >
        <Heading fontSize="20px">Want to delete your account?</Heading>
        <Button
          type="submit"
          background="#9d9d9d"
          color="#fff"
          fontSize="18px"
          _hover={{ background: "#111" }}
          height="45px"
        >
          Delete Account
        </Button>
      </Stack>
    </>
  );
}

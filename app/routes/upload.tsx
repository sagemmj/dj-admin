import React, { useRef } from "react";
import useForm from "~/components/useForm";
import { FormLabel, FormControl, Input, Button } from "@chakra-ui/react";

const FORM_ENDPOINT = "https://www.formbackend.com/f/f52d3da92b449362"; // You can update this to your specific endpoint

const Form: React.FC = () => {
  const formElement = useRef<HTMLFormElement>(null);

  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    additionalData,
  });

  if (status === "success") {
    return (
      <>
        <FormControl>Thank you!</FormControl>
        <FormControl>{message}</FormControl>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <FormControl>Something bad happened!</FormControl>
        <FormControl>{message}</FormControl>
      </>
    );
  }

  return (
    <form
      ref={formElement}
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="image">Image</FormLabel>
        <Input type="file" name="image" id="image" accept="image/*" />
      </FormControl>

      {status !== "loading" && (
        <FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </FormControl>
      )}
    </form>
  );
};

export default Form;

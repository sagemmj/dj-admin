"use client";

import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  HStack,
  Button,
  Stack,
  Flex,
  VStack,
  Step,
  Image,
  Text,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Form1 } from "~/components/onboarding/Form1";
import { Form2 } from "~/components/onboarding/Form2";
import { Form3 } from "~/components/onboarding/Form3";
import { Form4 } from "~/components/onboarding/Form4";
import { Form5 } from "~/components/onboarding/Form5";

export default function CreateAccount() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
    // Add more steps if needed
  ];
  const activeStepText = steps[step].description;

  return (
    <Flex
      bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
      minHeight="100vh"
      flexDirection="column"
    >
      <Flex
        bg="#111"
        borderBottom="1px solid #ffffff"
        w="100%"
        justifyContent="center"
        py="5px"
      >
        <HStack
          maxW="1000px"
          p="10px"
          pr="15px"
          bg="#111"
          justifyContent="space-between"
        >
          <Box as="a" href="/">
            <Image
              id="logo"
              w="120px"
              src="https://media.djfan.app/images/djfan-logo-beta.png"
            />
          </Box>
          <Box color="#fff" fontSize="20px" fontWeight="600">
            Complete DJ Profile
          </Box>
        </HStack>
      </Flex>

      <VStack>
        <Stack>
          <Stepper size="sm" index={step - 1}>
            {steps.map((_, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
          <Text
            w="100%"
            textAlign="center"
            color="#fff"
            fontWeight="600"
            mb="5px"
          >
            {steps[step - 1].title}: <b>{steps[step - 1].description}</b>
          </Text>
        </Stack>

        <Box
          width="100%"
          bg="#fff"
          maxWidth={600}
          m="15px"
          as="form"
          overflow="hidden"
          display="flex"
          flexDirection="column"
          borderRadius="10px"
          border="solid 2px cyan"
        >
          {step === 1 ? (
            <Form1 />
          ) : step === 2 ? (
            <Form2 />
          ) : step === 3 ? (
            <Form3 />
          ) : step === 4 ? (
            <Form4 />
          ) : (
            <Form5 />
          )}

          <Box
            position="relative"
            bgColor="#111"
            p="15px"
            borderTop="2px solid cyan"
          >
            <Flex w="100%" bgColor="#111" justifyContent="space-between">
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 20);
                }}
                isDisabled={step === 1}
                bg="#fff"
                color="#111"
                w="7rem"
              >
                Back
              </Button>

              {step !== 5 ? (
                <Button
                  w="7rem"
                  isDisabled={step === 5}
                  onClick={() => {
                    if (step < 5) {
                      setStep(step + 1);
                      setProgress(progress + 20);
                    }
                  }}
                  bg="#fff"
                  color="#111"
                  variant="solid"
                  opacity="1"
                >
                  Next
                </Button>
              ) : (
                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  onClick={() => {
                    toast({
                      title: "Account created.",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Submit
                </Button>
              )}
            </Flex>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}

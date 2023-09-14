"use client";

import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  ChakraProvider,
  HStack,
  Button,
  Stack,
  Flex,
  VStack,
  Step,
  extendTheme,
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
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 25,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
});

export default function CreateAccount() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const steps = [
    { title: "1", description: "Names" },
    { title: "2", description: "Username" },
    { title: "3", description: "Basics" },
    { title: "4", description: "Links" },
    { title: "5", description: "Photos" },
    // Add more steps if needed
  ];

  return (
    <ChakraProvider theme={theme}>
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
        </HStack>
      </Flex>

      <VStack pt="20px">
        <Stack pb="10px">
          <Stepper size="sm" index={step - 1}>
            {steps.map((_, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} 
              />
                </StepIndicator>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
          
        </Stack>

        <Box
          width="100%"
          bg="#fff"
          maxWidth="400px"
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
            <Form4 />
          ) : step === 4 ? (
            <Form3 />
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
                  Continue
                </Button>
              ) : (
                <Button
                  w="7rem"
                  colorScheme="green"
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
                  FINISH
                </Button>
              )}
            </Flex>
          </Box>
        </Box>
      </VStack>
    </Flex>
    </ChakraProvider>
  );
}

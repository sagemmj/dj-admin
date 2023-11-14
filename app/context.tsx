// context.tsx
import type { ReactNode } from "react";
import React, { createContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme"; // Adjust the path as needed

export interface ServerStyleContextData {
  key: string;
  ids: Array<string>;
  css: string;
}

export const ServerStyleContext = createContext<
  ServerStyleContextData[] | null
>(null);

export interface ClientStyleContextData {
  reset: () => void;
}

export const ClientStyleContext = createContext<ClientStyleContextData | null>(
  null
);

// Define an interface for the component props
interface ContextProps {
  children: ReactNode;
}

// Apply the type to the Context component
export const Context = ({ children }: ContextProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

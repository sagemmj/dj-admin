import { HStack } from "@chakra-ui/react";

import BioAvatar from "./BioAvatar";

export default function UserProfile() {
  return (
    <HStack gap="0px">
      <BioAvatar />
    </HStack>
  );
}

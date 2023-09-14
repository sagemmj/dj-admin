import { useState } from "react";
import {
  Button,
  Heading,
  Flex,
  VStack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Image,
  IconButton,
  HStack,
  Text, Avatar
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { countries } from "../profilesettings/CountryList";

const helpStyle = {
  fontSize: "12px",
  lineHeight: "1em",
  pt: "10px",
  pl:"10px"
};

export const Form5 = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState("");

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProfilePreview(reader.result);
      };
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setCoverPreview(reader.result);
      };
    }
  };

  const handleRemoveProfileImage = () => {
    setProfileImage(null);
    setProfilePreview("");
  };

  const handleRemoveCoverImage = () => {
    setCoverImage(null);
    setCoverPreview("");
  };

  return (
    <Stack bg="#fff" pt="20px" pb="20px" px="20px" gap="15px">
      <Box textAlign="center">
        <Heading mb="5px"fontSize="20px">Profile & Cover Photos</Heading>
        <Heading fontSize="14px" fontWeight="500">Finally, let's add some photos!</Heading>
        </Box>
      
        <FormControl>
        <FormLabel>Upload Profile Avatar</FormLabel>
        <HStack position="relative">
          <label>
            <Input type="file" accept="image/*" onChange={handleProfileImageChange} style={{ display: 'none' }} />
            <Button as="span">Select Image</Button>
          </label>
        </HStack>
      </FormControl>

      <FormControl>
        <FormLabel>Upload Cover Photo</FormLabel>
        <HStack position="relative">
          <label>
            <Input type="file" accept="image/*" onChange={handleCoverImageChange} style={{ display: 'none' }} />
            <Button as="span">Select Image</Button>
          </label>
        </HStack>
      </FormControl>

      
      <Box position="relative" mt="2">
          <Stack py="30px" alignItems="center" position="relative" bgImage={coverPreview} bgSize="cover" bgColor="grey" bgRepeat="no-repeat" bgPos="center" opacity="0.7" >
          {coverPreview && (
            <Box zIndex="10" aria-label="Remove image" position="absolute" bg="black" top="10px" right="10px" onClick={handleRemoveCoverImage} borderRadius="100%" p="2px">
            <FaTimes color="white" />
           </Box>
            )}
            <VStack position="relative">
            {profilePreview && (
            <Box aria-label="Remove image" position="absolute" bg="black" top="-5px" right="-15px" onClick={handleRemoveProfileImage} borderRadius="100%" p="2px">
             <FaTimes color="white" />
            </Box>
            )}
              <Avatar bg="black" src={profilePreview} showBorder borderColor="cyan" size="lg" />
             
            </VStack>
          </Stack>
          <Text {...helpStyle}>Begin uploading to preview your profile images.</Text>
        </Box>
    </Stack>
  );
};

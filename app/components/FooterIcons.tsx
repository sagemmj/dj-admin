import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Stack,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CreateMenu from "./CreateMenu";

const linkStyle = {
  fontSize: "18px",
  lineHeight: "1em",
};

export default function FooterIcons() {
  const [username, setUsername] = useState("richyahmed");

  useEffect(() => {
    // Fetch data from API
    // This is a placeholder and should be replaced with your actual API call
    fetch("https://api.example.com/user/" + username)
      .then((response) => response.json())
      .then((data) => setUsername(data.username));
  }, []);
  return (
    <Flex
      display={{ base: "flex", sm: "none" }}
      width="100%"
      bg="#111"
      justifyContent="space-around"
      alignItems="center"
      position="fixed"
      height="70px"
      bottom="0px"
      borderTop="2px solid cyan"
    >
      <Icon
        id="profile"
        viewBox="0 0 24 24"
        width="30px"
        height="30px"
        color="white"
        cursor="pointer"
        onClick={() =>
          window.open(
            `https://djfan.app/artists/${username}?tab=posts`,
            "_blank"
          )
        }
      >
        <path
          fill="currentColor"
          d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
        />
      </Icon>
      <Icon
        id="payouts"
        viewBox="0 0 24 24"
        width="33px"
        height="33px"
        color="white"
        cursor="pointer"
        onClick={() => (window.location.href = "/payouts")}
      >
        <path
          fill="currentColor"
          d="M14.648,5.493c.873-.701,1.772-1.643,2.228-2.789,.238-.598,.161-1.277-.205-1.816-.377-.556-1.002-.888-1.671-.888h-6c-.669,0-1.294,.332-1.671,.888-.366,.539-.442,1.218-.205,1.816,.456,1.145,1.355,2.088,2.228,2.789C4.696,7.221,1,13.159,1,18c0,3.309,2.691,6,6,6h10c3.309,0,6-2.691,6-6,0-4.841-3.696-10.779-8.352-12.507Zm.369-3.528c-.516,1.297-2.094,2.393-3.019,2.91-.923-.513-2.495-1.6-2.999-2.875l6.018-.035Zm1.982,20.035H7c-2.206,0-4-1.794-4-4,0-5.243,4.71-11,9-11s9,5.757,9,11c0,2.206-1.794,4-4,4Zm-5,0c-.552,0-1-.448-1-1v-1h-.268c-1.068,0-2.063-.574-2.598-1.499-.276-.478-.113-1.089,.365-1.366,.476-.277,1.089-.114,1.366,.365,.178,.308,.511,.5,.867,.5h2.268c.551,0,1-.449,1-1,0-.378-.271-.698-.644-.76l-3.042-.507c-1.341-.223-2.315-1.373-2.315-2.733,0-1.654,1.346-3,3-3v-1c0-.552,.448-1,1-1s1,.448,1,1v1h.268c1.067,0,2.063,.575,2.598,1.5,.276,.478,.113,1.089-.365,1.366-.477,.277-1.089,.114-1.366-.365-.179-.309-.511-.5-.867-.5h-2.268c-.551,0-1,.449-1,1,0,.378,.271,.698,.644,.76l3.042,.507c1.341,.223,2.315,1.373,2.315,2.733,0,1.654-1.346,3-3,3v1c0,.552-.448,1-1,1Z"
        />
      </Icon>
      <Popover>
        <PopoverTrigger>
          <Icon
            id="create"
            viewBox="0 0 24 24"
            width="40px"
            height="40px"
            color="white"
            cursor="pointer"
            _hover={{ transform: "scale(1.1)" }}
            transition="all 0.3s ease-in-out"
          >
            <path
              fill="currentColor"
              d="M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"
            />
          </Icon>
        </PopoverTrigger>
        <PopoverContent
          _focus={{
            boxShadow: "0px 0px 0px black",
          }}
          p="0"
          mx="20px"
          m="0"
          bg="unset"
          border="unset"
          width="100vw"
          overflow="hidden"
        >
          <CreateMenu />
        </PopoverContent>
      </Popover>

      <Icon
        id="statistics"
        viewBox="0 0 24 24"
        width="30px"
        height="30px"
        color="white"
        cursor="pointer"
        onClick={() => (window.location.href = "/earnings")}
      >
        <path
          fill="currentColor"
          d="M23,22H5a3,3,0,0,1-3-3V1A1,1,0,0,0,0,1V19a5.006,5.006,0,0,0,5,5H23a1,1,0,0,0,0-2Z"
        />
        <path
          fill="currentColor"
          d="M6,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,6,20Z"
        />
        <path
          fill="currentColor"
          d="M10,10v9a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z"
        />
        <path
          fill="currentColor"
          d="M15,13v6a1,1,0,0,0,2,0V13a1,1,0,0,0-2,0Z"
        />
        <path fill="currentColor" d="M20,9V19a1,1,0,0,0,2,0V9a1,1,0,0,0-2,0Z" />
        <path
          fill="currentColor"
          d="M6,9a1,1,0,0,0,.707-.293l3.586-3.586a1.025,1.025,0,0,1,1.414,0l2.172,2.172a3,3,0,0,0,4.242,0l5.586-5.586A1,1,0,0,0,22.293.293L16.707,5.878a1,1,0,0,1-1.414,0L13.121,3.707a3,3,0,0,0-4.242,0L5.293,7.293A1,1,0,0,0,6,9Z"
        />
      </Icon>
      <Icon
        id="settings"
        viewBox="0 0 24 24"
        width="30px"
        height="30px"
        color="white"
        cursor="pointer"
        onClick={() => (window.location.href = "/settings")}
      >
        <path
          fill="currentColor"
          d="M1,4.75H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2ZM7.333,2a1.75,1.75,0,1,1-1.75,1.75A1.752,1.752,0,0,1,7.333,2Z"
        />
        <path
          fill="currentColor"
          d="M23,11H20.264a3.727,3.727,0,0,0-7.194,0H1a1,1,0,0,0,0,2H13.07a3.727,3.727,0,0,0,7.194,0H23a1,1,0,0,0,0-2Zm-6.333,2.75A1.75,1.75,0,1,1,18.417,12,1.752,1.752,0,0,1,16.667,13.75Z"
        />
        <path
          fill="currentColor"
          d="M23,19.25H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2ZM7.333,22a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,22Z"
        />
      </Icon>
    </Flex>
  );
}

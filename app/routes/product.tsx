import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Textarea,
  Input,
  NumberInput,
  NumberInputField,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight, FaMusic, FaVideo, FaFile } from "react-icons/fa";
import HeaderAdmin from "~/components/HeaderAdmin";
import FileChoices from "~/components/product/FileChoices";
import VideoFileChoices from "~/components/product/VideoFileChoices";
import FileChoices2 from "~/components/product/FileChoice2";

export default function Product() {
  const [releaseName, setReleaseName] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [releaseArtwork, setReleaseArtwork] = useState("");
  const [price, setPrice] = useState(0);
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [recordLabel, setRecordLabel] = useState("");
  const [featuredArtists, setFeaturedArtists] = useState("");
  const [downloadableTrackFile, setDownloadableTrackFile] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      flexDirection="column"
      bg="#ececec"
      pb="50px"
    >
      <HeaderAdmin />
      <Flex w="100%" justifyContent="center">
        <Flex
          flexDirection="column"
          gap="35px"
          w="100%"
          maxW="1000px"
          pt="25px"
          px="15px"
          alignItems="center"
        >
          <Flex
            gap="10px"
            bg="#fff"
            flexDirection="column"
            w={{ base: "100%", sm: "500px" }}
            borderRadius="10px"
            overflow="hidden"
            border="1px solid #300a6e"
          >
            <Flex background="#300a6e" justifyContent="center">
              <Heading
                color="#fff"
                fontSize="20px"
                display="flex"
                alignItems="center"
                gap="6px"
                py="15px"
              >
                Create Product
              </Heading>
            </Flex>
            <Tabs>
              <TabList>
                <Tab gap="6px" fontWeight="600">
                  <FaMusic />
                  Track
                </Tab>
                <Tab gap="6px" fontWeight="600">
                  <FaVideo />
                  Video
                </Tab>
                <Tab gap="6px" fontWeight="600">
                  <FaFile /> File
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel p={0}>
                  <Stack px="20px" pt="20px" pb="20px">
                    <Text fontSize="18px" fontWeight="600">
                      Create Track Product
                    </Text>
                    <FormControl isRequired mb={4}>
                      <FormLabel>Release Name</FormLabel>
                      <Input
                        type="text"
                        value={releaseName}
                        placeholder="Name of Release / Track"
                        onChange={(e) => setReleaseName(e.target.value)}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        value={description}
                        placeholder="Write something about this release"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Release Artwork</FormLabel>
                      <Input
                        type="file"
                        accept="image/*"
                        border="0px"
                        p="2px"
                        onChange={(e) => setReleaseArtwork(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Price ($ USD)</FormLabel>
                      <NumberInput
                        value={price}
                        onChange={(value) => setPrice(Number(value))}
                        placeholder="e.g. 2.00"
                      >
                        <NumberInputField />
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Genre</FormLabel>
                      <Input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        placeholder="e.g. Tech House"
                      />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Release Date</FormLabel>
                      <Input
                        type="date"
                        value={releaseDate}
                        placeholder="Select a date"
                        onChange={(e) => setReleaseDate(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Record Label</FormLabel>
                      <Input
                        type="text"
                        placeholder="Name of Record Label"
                        value={recordLabel}
                        onChange={(e) => setRecordLabel(e.target.value)}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel>Featured Artists</FormLabel>
                      <Input
                        type="text"
                        placeholder="All Featured Artists"
                        value={featuredArtists}
                        onChange={(e) => setFeaturedArtists(e.target.value)}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel>Downloadable File Name</FormLabel>
                      <Input type="text" placeholder="e.g. song-name.wav" />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Downloadable Track File</FormLabel>
                      <Input
                        type="file"
                        accept=".mp3"
                        border="0px"
                        p="2px"
                        onChange={(e) =>
                          setDownloadableTrackFile(e.target.value)
                        }
                      />
                    </FormControl>
                    <FileChoices />

                    <Button
                      mt={4}
                      type="submit"
                      background="#300a6e"
                      color="#fff"
                      fontSize="18px"
                      _hover={{ background: "#111" }}
                      height="45px"
                    >
                      CREATE PRODUCT{" "}
                      <FaArrowRight
                        fontSize="14px"
                        style={{ marginLeft: "5px" }}
                      />
                    </Button>
                  </Stack>
                </TabPanel>
                <TabPanel p={0}>
                  <Stack px="20px" pt="20px" pb="20px">
                    <Text fontSize="18px" fontWeight="600">
                      Create Video Product
                    </Text>
                    <FormControl isRequired mb={4}>
                      <FormLabel>Product Name</FormLabel>
                      <Input
                        type="text"
                        value={productName}
                        placeholder="Name of Video Product"
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        value={description}
                        placeholder="Write something about this product"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Product Artwork</FormLabel>
                      <Input
                        type="file"
                        accept="image/*"
                        border="0px"
                        p="2px"
                        onChange={(e) => setReleaseArtwork(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Price ($ USD)</FormLabel>
                      <NumberInput
                        value={price}
                        onChange={(value) => setPrice(Number(value))}
                        placeholder="e.g. 2.00"
                      >
                        <NumberInputField />
                      </NumberInput>
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel>Downloadable File Name</FormLabel>
                      <Input type="text" placeholder="e.g. video-name.mp4" />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Downloadable Video File</FormLabel>
                      <Input
                        type="file"
                        accept=".mp3"
                        border="0px"
                        p="2px"
                        onChange={(e) =>
                          setDownloadableTrackFile(e.target.value)
                        }
                      />
                    </FormControl>
                    <VideoFileChoices />

                    <Button
                      mt={4}
                      type="submit"
                      background="#300a6e"
                      color="#fff"
                      fontSize="18px"
                      _hover={{ background: "#111" }}
                      height="45px"
                    >
                      CREATE PRODUCT{" "}
                      <FaArrowRight
                        fontSize="14px"
                        style={{ marginLeft: "5px" }}
                      />
                    </Button>
                  </Stack>
                </TabPanel>
                <TabPanel p={0}>
                  <Stack px="20px" pt="20px" pb="20px">
                    <Text fontSize="18px" fontWeight="600">
                      Create File Product
                    </Text>
                    <FormControl isRequired mb={4}>
                      <FormLabel>Product Name</FormLabel>
                      <Input
                        type="text"
                        value={productName}
                        placeholder="Name of File Product"
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        value={description}
                        placeholder="Write something about this product"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Product Artwork</FormLabel>
                      <Input
                        type="file"
                        accept="image/*"
                        border="0px"
                        p="2px"
                        onChange={(e) => setReleaseArtwork(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Price ($ USD)</FormLabel>
                      <NumberInput
                        value={price}
                        onChange={(value) => setPrice(Number(value))}
                        placeholder="e.g. 2.00"
                      >
                        <NumberInputField />
                      </NumberInput>
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel>Downloadable File Name</FormLabel>
                      <Input type="text" placeholder="e.g. file-name.zip" />
                    </FormControl>

                    <FormControl isRequired mb={4}>
                      <FormLabel>Downloadable File</FormLabel>
                      <Input
                        type="file"
                        accept=".mp3"
                        border="0px"
                        p="2px"
                        onChange={(e) =>
                          setDownloadableTrackFile(e.target.value)
                        }
                      />
                    </FormControl>
                    <FileChoices2 />

                    <Button
                      mt={4}
                      type="submit"
                      background="#300a6e"
                      color="#fff"
                      fontSize="18px"
                      _hover={{ background: "#111" }}
                      height="45px"
                    >
                      CREATE PRODUCT{" "}
                      <FaArrowRight
                        fontSize="14px"
                        style={{ marginLeft: "5px" }}
                      />
                    </Button>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

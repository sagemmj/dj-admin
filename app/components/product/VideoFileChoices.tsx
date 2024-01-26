import { Box, HStack, Stack, Tooltip } from "@chakra-ui/react";

// Define the props for the FileTag component
interface FileTagProps {
  fileType: string;
  tooltipDescription: string;
}

// Create a reusable FileTag component
const FileTag = ({ fileType, tooltipDescription }: FileTagProps) => {
  return (
    <Tooltip label={tooltipDescription}>
      <Box
        color="#fff"
        bg="#9b5de5"
        borderRadius="5px"
        px="5px"
        py="3px"
        fontSize="12px"
        lineHeight="1em"
      >
        {fileType}
      </Box>
    </Tooltip>
  );
};

const VideoFileChoices = () => {
  // Define the file types and their descriptions
  const fileTypes = [
    { type: "mp4", description: "MP4 video format" },
    { type: "mov", description: "MOV video format" },
  ];

  return (
    <Stack>
      <HStack>
        <Box fontSize="14px" lineHeight="1em">
          <b>Allowed file types</b>:
        </Box>
        {fileTypes.map((file) => (
          <FileTag
            key={file.type}
            fileType={file.type}
            tooltipDescription={file.description}
          />
        ))}
      </HStack>
      <Box fontSize="14px" lineHeight="1em">
        <b>Maximum file size</b>: 1GB
      </Box>
    </Stack>
  );
};

export default VideoFileChoices;

import { Text, Box, HStack,Button, Image, VStack, Flex, IconButton, Circle } from '@chakra-ui/react';
import { FaPlay, FaPause, FaLock, FaFastForward, FaFastBackward, FaVolumeUp } from 'react-icons/fa';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { useState } from 'react';

interface VideoPostProps {
  videoThumbnailUrl?: string,
  videoTitle?: string,
}

export default function VideoPost({
  videoThumbnailUrl = 'http://media.djfan.app/images/DJ-BANNER.jpg',
  videoTitle = 'Placeholder Video Title',
}: VideoPostProps) {
  const [hover, setHover] = useState(false);

  return (
    <Box maxW='sm' mx='auto'>
      <Box position='relative'>
        <Image src={videoThumbnailUrl} alt={videoTitle} width='100%' />
        <VStack
          position='absolute'
          top='0'
          left='0'
          h='full'
          w='full'
          spacing='1'
          justify='center'
          align='center'
          bg='rgba(0,0,0,0.6)'
        >
          <Flex p='15px'>
            <Box
              as='button'
              aria-label='Play button'
              p='20px'
              borderRadius='50%'
              bg={hover ? '#111' : '#ffffff91'}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? <FaLock size='30' color='#fff'/> : <FaPlay size='30' color='#fff' />}
            </Box>
          </Flex>
        </VStack>
      </Box>
      
      <Box bgColor='#f2f2f2' p='10px'>
        <HStack>
            <FaLock/>
        <Text fontSize='xl' mb='10px'>
          
         
          Sign in or reigster to play this video
        </Text>
        
        </HStack>
        <Text> All posts have this prompt.</Text>
      </Box>
    </Box>
  );
}

'use client';
import type { AppProps } from 'next/app';
import { ChakraProvider, Box, Portal, useDisclosure, Heading } from '@chakra-ui/react';
import theme from '@/theme/theme';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import '@/styles/App.css';
import '@/styles/Contact.css';
import '@/styles/Plugins.css';
import '@/styles/MiniCalendar.css';
import MicrophoneButton from './MicrophoneButton';

function App({ Component, pageProps }: AppProps<{}>) {
  const pathname = usePathname();
  const [apiKey, setApiKey] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const initialKey = localStorage.getItem('apiKey');
    if (initialKey?.includes('sk-') && apiKey !== initialKey) {
      setApiKey(initialKey);
    }
  }, [apiKey]);

  return (
    <ChakraProvider theme={theme}>
      <Heading as='h1' size='xl' pl = "30px" pt = "90px" noOfLines={1} pt="10px">The Feynmann Project</Heading>
      <Box pt={{ base: '0px', md: '20px' }} // Adjusted padding-top here
           float="center"
           minHeight="80vh"
           height="50%"
           overflow="auto"
           position="relative"
           maxHeight="50%"
           w={{ base: '100%', xl: 'calc(100% - 290px)' }}
           maxWidth={{ base: '100%', xl: 'calc(100% - 290px)' }}
           transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
           transitionDuration=".2s, .2s, .35s"
           transitionProperty="top, bottom, width"
           transitionTimingFunction="linear, linear, ease"
      >
        <Box mx="auto" p={{ base: '20px', md: '30px' }} pe="20px" minH="1vh" pt="0px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit facilis ex vitae dolore. Obcaecati quas sint illo consectetur explicabo officiis quaerat perspiciatis, fuga qui officia quis dignissimos nobis. Exercitationem? 
          <MicrophoneButton></MicrophoneButton>

          <Component apiKeyApp={apiKey} {...pageProps} />


        </Box>
      </Box>

    </ChakraProvider>
  );
}

export default App;

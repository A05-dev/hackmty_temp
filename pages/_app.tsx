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
      <Heading as='h1' size='2xl' noOfLines={1} pt="10px">The Feynmann Project</Heading>
      <Box pt={{ base: '10px', md: '20px' }} // Adjusted padding-top here
           float="right"
           minHeight="90vh"
           height="100%"
           overflow="auto"
           position="relative"
           maxHeight="100%"
           w={{ base: '100%', xl: 'calc(100% - 290px)' }}
           maxWidth={{ base: '100%', xl: 'calc(100% - 290px)' }}
           transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
           transitionDuration=".2s, .2s, .35s"
           transitionProperty="top, bottom, width"
           transitionTimingFunction="linear, linear, ease"
      >
        <Box mx="auto" p={{ base: '20px', md: '30px' }} pe="20px" minH="100vh" pt="50px">
          <Component apiKeyApp={apiKey} {...pageProps} />
        </Box>
        <Box></Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

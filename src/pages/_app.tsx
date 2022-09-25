import { MantineProvider, Stack, Text } from '@mantine/core';
import useDocumentIsReady from 'hooks/useDocumentIsReady';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  const isReady = useDocumentIsReady();

  return (
    <>
      <Head>
        <title>Beautiful To Do</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <GlobalStyles />
        {isReady ? (
          <Component {...pageProps} />
        ) : (
          <Stack align="center" justify="center" style={{ height: '100vh' }}>
            <Text>The page is loading</Text>
          </Stack>
        )}
      </MantineProvider>
    </>
  );
};

export default App;

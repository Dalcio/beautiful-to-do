import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Layout } from 'components';
import { APP_NAME } from 'constants/config';
import { getCookie } from 'cookies-next';
import useDocumentIsReady from 'hooks/useDocumentIsReady';
import useToggleColorScheme from 'hooks/useToggleColorScheme';
import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const { colorScheme, toggleColorScheme } = useToggleColorScheme(props.colorScheme);
  const isReady = useDocumentIsReady();

  if (!isReady) return null;

  return (
    <>
      <Head>
        <title>Beautiful To Do App</title>
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            ...theme,
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <GlobalStyles />
          <Layout>{isReady ? <Component {...pageProps} /> : <h1>Document is Loading</h1>}</Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie(APP_NAME, ctx) || 'light',
});

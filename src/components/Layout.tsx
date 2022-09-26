import { createStyles, Image, Stack } from '@mantine/core';
import useDevice from 'hooks/useDevice';
import { NextPage } from 'next';

type LayoutProps = {
  children: NextPage | JSX.Element;
};

const useLayoutStyles = createStyles(({ colorScheme, colors, white, spacing }) => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    background: colorScheme === 'dark' ? colors.blue[1] : white,
  },
  wrapper: {
    position: 'absolute',
    inset: 0,
    display: 'grid',
    justifyItems: 'center',
  },
  innerWrapper: {
    width: 'min(100%, 600px)',
    paddingTop: `${4 * spacing.xl}px`,
    paddingBottom: `${3 * spacing.xl}px`,
  },
}));

const Layout = ({ children }: LayoutProps) => {
  const {
    classes,
    theme: { colorScheme },
  } = useLayoutStyles();
  const { isMobile } = useDevice('max-xs');

  return (
    <div className={classes.container}>
      {isMobile ? (
        <Image
          src={`/images/${colorScheme === 'dark' ? 'bg-mobile-dark.jpg' : 'bg-mobile-light.jpg'}`}
          alt="bg"
          width="100%"
          height={261}
          //   height={346}
        />
      ) : (
        <Image
          src={`/images/${colorScheme === 'dark' ? 'bg-desktop-dark.jpg' : 'bg-desktop-light.jpg'}`}
          alt="bg"
          width="100%"
          height={261}
          //   height={346}
        />
      )}
      <div className={classes.wrapper}>
        <Stack className={classes.innerWrapper} px="lg">
          {children}
        </Stack>
      </div>
    </div>
  );
};

export default Layout;

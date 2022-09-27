import { createStyles, Image, Stack } from '@mantine/core';
import useDevice from 'hooks/useDevice';
import { NextPage } from 'next';

type LayoutProps = {
  children: NextPage | JSX.Element;
};

const useLayoutStyles = createStyles(({ spacing }) => ({
  wrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  innerWrapper: {
    width: 'min(100%, 738px)',
    height: '100vh',
    padding: `${spacing.xl}px`,
  },
}));

const Layout = ({ children }: LayoutProps) => {
  const {
    classes,
    theme: { colorScheme },
  } = useLayoutStyles();
  const { isMobile } = useDevice('max-xs');

  return (
    <div>
      {isMobile ? (
        <Image
          src={`/images/${colorScheme === 'dark' ? 'bg-mobile-dark.jpg' : 'bg-mobile-light.jpg'}`}
          alt="bg"
          width="100%"
          height={261}
        />
      ) : (
        <Image
          src={`/images/${colorScheme === 'dark' ? 'bg-desktop-dark.jpg' : 'bg-desktop-light.jpg'}`}
          alt="bg"
          width="100%"
          height={261}
        />
      )}
      <div className={classes.wrapper}>
        <Stack className={classes.innerWrapper}>{children}</Stack>
      </div>
    </div>
  );
};

export default Layout;

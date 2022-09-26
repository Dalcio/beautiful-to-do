import { useMantineColorScheme, createStyles, ActionIcon, Image } from '@mantine/core';

const useHeaderStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: `${2 * theme.spacing.xl}px`,
  },
  title: {
    letterSpacing: 8,
    color: theme.white,
  },
  toggleColorSchemeBtn: {
    '&:hover': {
      background: 'transparent',
      cursor: 'pointer',
      opacity: 0.5,
    },
  },
}));

const Header = () => {
  const { classes } = useHeaderStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.container}>
      <h1 className={classes.title}>TODO</h1>
      <ActionIcon className={classes.toggleColorSchemeBtn} onClick={() => toggleColorScheme()}>
        {colorScheme === 'dark' ? (
          <Image src="/images/icon-moon.svg" />
        ) : (
          <Image src="/images/icon-sun.svg" />
        )}
      </ActionIcon>
    </header>
  );
};

export default Header;

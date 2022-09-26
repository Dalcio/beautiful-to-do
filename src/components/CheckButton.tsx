import { Button, createStyles, Image } from '@mantine/core';
import React from 'react';

type CheckButtonProps = {
  status: boolean;
  onClick?: () => void;
};

const useCheckButtonStyles = (status: boolean) =>
  createStyles(({ colors, colorScheme, white }) => ({
    container: {
      width: '36px',
      height: '36px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: status
        ? colors.checkBackground[colorScheme === 'dark' ? 0 : 1]
        : colors.lightGrayishBlue[1],

      '&:hover': {
        background: colors.checkBackground[colorScheme === 'dark' ? 0 : 1],
      },
    },
    circle: {
      width: '34px',
      height: '34px',
      borderRadius: '100%',
      background: colorScheme === 'dark' ? colors.blue[2] : white,
    },
  }))();

const CheckButton = ({ onClick, status }: CheckButtonProps) => {
  const { classes } = useCheckButtonStyles(status);

  return (
    <Button radius="xl" className={classes.container} onClick={onClick}>
      {status ? (
        <Image src="/images/icon-check.svg" width={18} />
      ) : (
        <div className={classes.circle} />
      )}
    </Button>
  );
};

export default CheckButton;

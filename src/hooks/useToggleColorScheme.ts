import { ColorScheme } from '@mantine/core';
import { APP_NAME } from 'constants/config';
import { setCookies } from 'cookies-next';
import { useState } from 'react';

const useToggleColorScheme = (defaultColorScheme: ColorScheme) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value ?? (colorScheme === 'dark' ? 'light' : 'dark');

    setColorScheme(nextColorScheme);
    setCookies(APP_NAME, nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return {
    colorScheme,
    toggleColorScheme,
  };
};

export default useToggleColorScheme;

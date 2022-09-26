import { Global, MantineTheme } from '@mantine/core';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={({ fn, colors, colorScheme }: MantineTheme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
        fontSize: '18px',
      },

      body: {
        ...fn.fontStyles(),
        background: colorScheme === 'dark' ? colors.blue[1] : colors.lightGrayishBlue[0],
      },
    })}
  />
);

export default GlobalStyles;

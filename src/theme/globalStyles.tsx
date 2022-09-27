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

      '*::-webkit-scrollbar': {
        width: '10px',
      },

      '*::-webkit-scrollbar-track': {
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        background: '#c9cacc',
      },

      '*::-webkit-scrollbar-track:hover': {
        background: '#78797a',
      },
      '*::-webkit-scrollbar-thumb': {
        background: colors.checkBackground[colorScheme === 'dark' ? 2 : 3],
      },

      '.scroll-bar::-webkit-scrollbar-thumb:hover': {
        background: '#01143b',
      },

      body: {
        ...fn.fontStyles(),
        background: colorScheme === 'dark' ? colors.blue[1] : colors.lightGrayishBlue[0],
      },
    })}
  />
);

export default GlobalStyles;

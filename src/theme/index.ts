import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colors: {
    //     ### Primary
    blue: [
      'hsl(220, 98%, 61%)', // - Bright Blue:
      'hsl(235, 21%, 11%)', // - Very Dark Blue:
      'hsl(235, 24%, 19%)', // - Very Dark Desaturated Blue:
    ],
    lightGrayishBlue: [
      'hsl(236, 33%, 92%)', // - Very Light Grayish Blue: (Light mode)
      'hsl(233, 11%, 84%)', // - Light Grayish Blue: (Light mode)
      'hsl(234, 39%, 85%)', // - Light Grayish Blue: (Dark mode)
      'hsl(236, 33%, 92%)', // - Light Grayish Blue (hover):(Dark mode)
    ],
    darkGrayishBlue: [
      'hsl(236, 9%, 61%)', // - Dark Grayish Blue: (Light mode)
      'hsl(235, 19%, 35%)', // - Very Dark Grayish Blue: (Light mode)
      'hsl(234, 11%, 52%)', // - Dark Grayish Blue:  (Dark mode)
      'hsl(233, 14%, 35%)', // - Very Dark Grayish Blue:  (Dark mode)
      'hsl(237, 14%, 26%)', // - Very Dark Grayish Blue:  (Dark mode)
    ],
    gray: [
      'hsl(0, 0%, 98%)', // - Very Light Gray: (Light mode)
    ],
    checkBackground: [
      'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      'linear-gradient(to right, hsl(280, 87%, 65%), hsl(192, 100%, 67%))',
    ],
  },
  fontFamily: "'Josefin Sans', sans-serif",
  fontSizes: {
    md: 18,
  },
};

export default theme;

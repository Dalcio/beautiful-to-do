import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colors: {
    cyan: ['hsl(180, 66%, 49%)'],
    veryDarkBlue: ['hsl(255, 11%, 22%)'],
    gray: ['hsl(0, 0%, 75%)', 'hsl(230, 25%, 95%)'],
    red: ['hsl(0, 87%, 67%)'],

    // (Dark, Grayish, Very Dark) Violet
    violet: ['hsl(257, 27%, 26%)', 'hsl(257, 7%, 63%)', 'hsl(260, 8%, 14%)'],

    //     ### Primary

    // - Bright Blue: hsl(220, 98%, 61%)
    // - Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

    // ### Neutral

    // ### Light Theme

    // - Very Light Gray: hsl(0, 0%, 98%)
    // - Very Light Grayish Blue: hsl(236, 33%, 92%)
    // - Light Grayish Blue: hsl(233, 11%, 84%)
    // - Dark Grayish Blue: hsl(236, 9%, 61%)
    // - Very Dark Grayish Blue: hsl(235, 19%, 35%)

    // ### Dark Theme

    // - Very Dark Blue: hsl(235, 21%, 11%)
    // - Very Dark Desaturated Blue: hsl(235, 24%, 19%)
    // - Light Grayish Blue: hsl(234, 39%, 85%)
    // - Light Grayish Blue (hover): hsl(236, 33%, 92%)
    // - Dark Grayish Blue: hsl(234, 11%, 52%)
    // - Very Dark Grayish Blue: hsl(233, 14%, 35%)
    // - Very Dark Grayish Blue: hsl(237, 14%, 26%)
  },
  fontFamily: "'Nunito Sans', sans-serif",
};

export default theme;

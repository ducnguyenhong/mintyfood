import { extendTheme } from '@chakra-ui/react';

const BreakpointConfig = {
  breakpoints: {
    xs: '320px', // mobile
    sm: '480px',
    md: '768px', // tablet
    lg: '992px',
    xl: '1280px', // desktop
    '2xl': '1600px'
  }
};

const ColorConfig = {
  colors: {
    primary: { 1: '#36af5c', 2: '#309c52', 3: '#28714d' },
    navBar: { 1: '#3cb863' },
    text: { 1: '#292D32', 2: '#828282' }
  }
};

export const chakraTheme = extendTheme({
  // ...ComponentsTheme,
  // ...FontConfig,
  ...ColorConfig,
  ...BreakpointConfig
  // ...MiscConfig,
  // ...GlobalConfig
});

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
    primary: { 1: '#38A169', 2: '#2f855a', 3: '#28714d' },
    navBar: { 1: '#3cb863' }
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

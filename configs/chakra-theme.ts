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
    text: { 1: '#292D32', 2: '#828282' },
    cmsBg: { 1: '#1F2937', 2: '#F3F4F6', 3: '#111827' },
    cmsText: { 1: '#6B7280', 2: '#4B5563', 3: '#70b8ff' }
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

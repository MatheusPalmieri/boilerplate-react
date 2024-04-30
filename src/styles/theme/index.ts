import { createTheme } from '@mantine/core';
import { colors } from './colors';
import { components } from './components';

export const theme = createTheme({
  colors: colors,
  components: components,

  // Other theme properties
  fontFamily: "'Quicksand', sans-serif",
});

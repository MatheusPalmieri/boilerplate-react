import { Button } from '@mantine/core';

export const components = {
  Button: Button.extend({
    defaultProps: {
      variant: 'filled',
      h: '50px',
      color: 'primary.5',
      radius: 'md',
      style: {
        transition: '.3s all ease-in-out',
      },
    },
  }),
};

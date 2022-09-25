import { Stack, StackProps } from '@mantine/core';
import React from 'react';

export const Row = ({ style, ...props }: StackProps) => (
  <Stack
    {...props}
    style={{
      ...style,
      flexDirection: 'row',
    }}
  />
);

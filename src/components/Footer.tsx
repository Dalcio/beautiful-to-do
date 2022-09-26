import { Text } from '@mantine/core';

const Footer = () => (
  <Text
    align="center"
    sx={({ colors }) => ({
      color: colors.darkGrayishBlue[0],
    })}
    py="lg"
  >
    Drag and drop to reorder list
  </Text>
);

export default Footer;

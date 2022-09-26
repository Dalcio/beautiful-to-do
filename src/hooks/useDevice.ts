import { MantineSizes, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

type TSize = 'min-xs' | 'min-sm' | 'min-md' | 'min-lg' | 'max-xs' | 'max-sm' | 'max-md' | 'max-lg';

const useDevice = (size: TSize) => {
  const { breakpoints } = useMantineTheme();

  const isMobile = useMediaQuery(
    size.match(/^(max)/)
      ? `(max-width: ${breakpoints[size.replace('max-', '') as keyof MantineSizes]}px)`
      : `(min-width: ${breakpoints[size.replace('min-', '') as keyof MantineSizes]}px)`,
    true,
    { getInitialValueInEffect: true }
  );

  return { isMobile };
};

export default useDevice;

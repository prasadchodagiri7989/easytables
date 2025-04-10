
import { useState, useEffect } from 'react';

type Theme = 'light';

export function useTheme() {
  const [theme] = useState<Theme>('light');

  return { theme };
}

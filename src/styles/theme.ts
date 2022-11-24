import { createTheme } from '@mui/material/styles';
import { Inter } from '@next/font/google';

export const inter = Inter({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

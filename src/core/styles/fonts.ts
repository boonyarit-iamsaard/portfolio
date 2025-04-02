import { Noto_Sans_Thai as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'thai'],
});

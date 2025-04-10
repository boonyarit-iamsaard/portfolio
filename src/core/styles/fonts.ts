import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from 'next/font/google';

export const fontSans = FontSans({
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const fontMono = FontMono({
  variable: '--font-mono',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

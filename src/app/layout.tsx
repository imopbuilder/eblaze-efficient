import { APP } from '@/constants/app';
import '@/styles/main.scss';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import localFont from 'next/font/local';

const nunito = Nunito({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-nunito' });

const clashDisplay = localFont({
  src: [
    {
      path: '../lib/assets/clash-display-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../lib/assets/clash-display-regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
});

export const metadata: Metadata = {
  title: {
    template: `${APP.template} - %s`,
    default: APP.default,
  },
  description: 'Join Our Electrifying Lineup of Events and Gatherings.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} ${nunito.variable} ${clashDisplay.variable}`}>{children}</body>
    </html>
  );
}

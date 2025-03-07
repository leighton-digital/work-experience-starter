import type { Metadata } from 'next';
import { Box, Flex, Theme } from '@radix-ui/themes';
import Link from 'next/link';

import '@radix-ui/themes/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'EMAPI - the Electronic Movie API access tool',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className='bg-transparent fixed top-0 left-0 w-full z-10 outline-none' style={{ display: 'flex', alignItems: 'flex-start', width: '100%', border:'none', outline:'none', boxShadow:'none'}}>
          <Link legacyBehavior href = '/'>
          <img src='/Header.png' alt='Website Logo' className = 'outline-none' style={{ width: '20%', height: 'auto', objectFit: 'contain', cursor: 'pointer', border:'none', outline:'none' }}/>
          </Link>
          <img src='/Bar.png' alt='Website Banner' className='outline-none' style={{ width: '80%', height: 'auto', objectFit: 'contain', border:'none', outline:'none' }}/>
        </header>
        <Theme>
          <div className='bg-slate-600 pt-[45px] md:pt-[90px] lg:pt-[125px]' style={{ minHeight: '100vh', border:'none', outline:'none' }}>
            {children}
          </div></Theme>
          <footer className="bg-transparent p-0 fixed bottom-0 left-0 w-[52px] z-10">
        <Flex>
          <Box>

        <Link legacyBehavior href="/Watchlist" className='w-[52px]'>
          <img
            src="/Footer.png"
            alt="Logo in the bottom corner that redirects to the watchlist"
            style={{ cursor: 'pointer' }}/></Link>
            </Box>
            </Flex>
          </footer>
      </body>
    </html>
  );
}

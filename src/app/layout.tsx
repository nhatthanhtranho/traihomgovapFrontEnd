import React, { ReactNode } from 'react';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DEFAULT_METADATA } from '@/constants/constant';
import ZaloChat from '@/components/ZaloChat/ZaloChat';
import BackToHomeButton from '@/components/BackToHome/BackToHome';
import SimpleSlider from '@/components/ImageSlider/ImageSlider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = DEFAULT_METADATA;

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V6FTNPPV36"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V6FTNPPV36');
            `,
          }}
        />
        {/* End Google tag */}
      </head>
      <body className="font-sans overflow-x-hidden bg-white" suppressHydrationWarning>
        <div className="relative">
          <a href="tel:0913673661">
            <div className="fixed bottom-0 left-0 z-[100] p-5 flex flex-row justify-center items-center cursor-pointer">
              <i className="Phone is-animating"></i>
              <div className="hidden sm:inline-block bg-[#837500] rounded-lg pl-4 pr-3 ml-[-12px] py-1">
                <p className="text-white font-medium text-base">0913 673 661</p>
              </div>
            </div>
          </a>

          {/* Zalo chat button */}
          <div className="fixed bottom-0 right-5 z-[100]">
            <ZaloChat />
          </div>

          {/* Header */}
          <div className="w-full z-[100]">
            <Header />
          </div>
          <SimpleSlider />
          {/* Main content */}
          <div className="container mx-auto mb-4 px-4 md:mb-8 mt-8">
            <BackToHomeButton />
          </div>
          {children}
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

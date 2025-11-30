// app/layout.tsx
import type { Metadata, Viewport } from "next";
import '@/assets/styles/main.scss';
import styles from './layout.module.scss';
import Providers from "./providers";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Matrix One",
  description: "",
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  themeColor: '#101010',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={styles.layout}>
      <head>
        <link rel="icon" href="/images/logo/base.png" />
        <meta name="theme-color" content="#101010" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-navbutton-color" content="#101010" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* Скрипт для предотвращения мерцания при загрузке */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                var currentTheme = theme || systemTheme;
                document.documentElement.setAttribute('data-theme', currentTheme);
                document.body.setAttribute('data-theme', currentTheme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <Providers>
            <Header />
            <main className={styles.container} role="main" aria-label="Основной контент">
              <div className={styles.content}>{children}</div>
            </main>
            <Footer />
        </Providers>
      </body>
    </html>
  );
}
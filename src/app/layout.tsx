// app/layout.tsx
import type { Metadata, Viewport } from "next";
import '@/assets/styles/main.scss';
import styles from './layout.module.scss';
import Providers from "./providers";
import { TopBar } from "./components/top-bar/top-bar";
import { RightBar } from "./components/right-bar/right-bar";
import { LeftBar } from "./components/left-bar/left-bar";
import { BottomBar } from "./components/bottom-bar/bottom-bar";
import { ThemeInitializer } from './theme-initializer';

export const metadata: Metadata = {
  title: "Matrix One - Рабочее пространство.",
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

// Инлайн скрипт для предотвращения мерцания
const themeScript = `
  (function() {
    try {
      // Устанавливаем тему ДО рендеринга страницы
      var savedTheme = localStorage.getItem('theme');
      var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var theme = savedTheme || systemTheme;
      
      // Применяем сразу, чтобы не было мерцания
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
      
      // Обновляем meta theme-color
      var metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#101010' : '#ffffff');
      }
    } catch (e) {
      // При ошибке ставим темную тему по умолчанию
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={styles.layout} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo/base.png" />
        <meta name="theme-color" content="#101010" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-navbutton-color" content="#101010" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* Критически важный скрипт - устанавливает тему ДО рендеринга */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeInitializer />
        <Providers>
            <TopBar />
            <LeftBar />
            <RightBar />
            <BottomBar />
            <main className={styles.container} role="main" aria-label="Основной контент">
              {children}
            </main>
        </Providers>
      </body>
    </html>
  );
}
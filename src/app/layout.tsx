// app/layout.tsx
import type { Metadata, Viewport } from "next";
import '@/assets/styles/main.scss';
import styles from './layout.module.scss';
import Providers from "./providers";
import { TopBar } from "./components/top-bar/top-bar";
import { RightBar } from "./components/right-bar/right-bar";
import { LeftBar } from "./components/left-bar/left-bar";
import { BottomBar } from "./components/bottom-bar/bottom-bar";

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
        
        {/* Скрипт для предотвращения мерцания с предпочтением светлой темы */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  // Светлая тема по умолчанию, если нет сохраненной темы
                  var theme = savedTheme || 'light';
                  
                  // Применяем тему к documentElement и body
                  document.documentElement.setAttribute('data-theme', theme);
                  document.body.setAttribute('data-theme', theme);
                  
                  // Обновляем meta theme-color динамически
                  var metaThemeColor = document.querySelector('meta[name="theme-color"]');
                  if (metaThemeColor) {
                    // Здесь можно задать разные цвета для разных тем
                    if (theme === 'dark') {
                      metaThemeColor.setAttribute('content', '#101010');
                    } else if (theme === 'light') {
                      metaThemeColor.setAttribute('content', '#ffffff');
                    }
                  }
                } catch (e) {
                  // Если произошла ошибка, устанавливаем светлую тему
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.body.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
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
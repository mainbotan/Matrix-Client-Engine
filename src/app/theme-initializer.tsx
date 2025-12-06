// app/theme-initializer.tsx
'use client';

import { useEffect, useState } from 'react';

export function ThemeInitializer() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const theme = savedTheme || systemTheme;
      
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
      
      // Обновляем meta theme-color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#101010' : '#ffffff');
      }
    } catch (e) {
      console.error('Error setting theme:', e);
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Не рендерим детей пока тема не инициализирована
  if (!isInitialized) {
    return null;
  }

  return null;
}
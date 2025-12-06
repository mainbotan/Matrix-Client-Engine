'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './page.module.scss';
import { themesConfig } from './themes.config';

export default function Page() {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');

  // Инициализация темы при загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;
    
    setCurrentTheme(theme);
    applyTheme(theme);
  }, []);

  // Функция применения темы
  const applyTheme = (themeId: string) => {
    document.documentElement.setAttribute('data-theme', themeId);
    document.body.setAttribute('data-theme', themeId);
    localStorage.setItem('theme', themeId);
  };

  // Обработчик переключения темы
  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.focus}>
        <section className={styles.section}>
          <div className={styles.capture}>Окружение</div>
          <div className={styles.themes}>
            {themesConfig.map((theme) => (
              <div
                key={theme.id}
                className={clsx(
                  styles.item,
                  currentTheme === theme.id && styles.active
                )}
                onClick={() => handleThemeChange(theme.id)}
                role="button"
                tabIndex={0}
                aria-label={`Переключить тему на ${theme.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleThemeChange(theme.id);
                  }
                }}
              >
                <div 
                  className={styles.overview}
                  style={{
                    backgroundImage: theme.overview 
                      ? `url(${theme.overview})`
                      : undefined
                  }}
                ></div>
                <div className={styles.name}>{theme.name}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>  
  );
}
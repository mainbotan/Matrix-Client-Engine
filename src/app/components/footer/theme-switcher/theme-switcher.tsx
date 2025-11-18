// components/theme-switcher/theme-switcher.tsx
'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './theme-switcher.module.scss';
import Sun from '@/assets/ui-kit/icons/sun';
import Moon from '@/assets/ui-kit/icons/moon';

export default function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

    // Инициализация темы при загрузке
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = savedTheme || systemTheme;
        
        setCurrentTheme(theme);
        applyTheme(theme);
    }, []);

    // Функция применения темы
    const applyTheme = (theme: 'light' | 'dark') => {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Переключение темы
    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setCurrentTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <button 
            className={styles.switcher}
            onClick={toggleTheme}
            aria-label={`Переключить на ${currentTheme === 'light' ? 'тёмную' : 'светлую'} тему`}
        >
            <span className={clsx(styles.box, currentTheme === 'light' && styles.active)}>
                <Sun className={styles.svg} />
            </span>
            <span className={clsx(styles.box, currentTheme === 'dark' && styles.active)}>
                <Moon className={styles.svg} />
            </span>
        </button>
    );
}
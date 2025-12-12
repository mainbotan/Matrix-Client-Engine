import React from 'react';
import styles from './loading-quads.module.scss';

interface LoadingQuadsProps {
  /** Размер в em (умножается на базовый размер 16px) */
  size?: number;
  /** Цвет квадратов */
  color?: string;
  /** Дополнительный класс для контейнера */
  className?: string;
}

export default function LoadingQuads({ 
  size = 1, 
  color = "currentColor",
  className = ""
}: LoadingQuadsProps) {
  return (
    <div 
      className={`${styles.container} ${className}`}
      style={{
        fontSize: `${size}em`,
        color: color
      }}
      aria-label="Загрузка"
      role="status"
    >
      <div className={styles.quads}>
        <div className={styles.quad}></div>
        <div className={styles.quad}></div>
        <div className={styles.quad}></div>
        <div className={styles.quad}></div>
      </div>
    </div>
  );
}
'use client';

import styles from './components/loading/canvas.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.focus}>
        <div className={styles.code}>404</div>
        <div className={styles.capture}>Сука я походу попал...</div>
      </div>
    </div>
  );
}
import { ReactNode } from 'react';
import styles from './container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Container({ 
  children, 
  className = '', 
  fullWidth = false 
}: ContainerProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.focus} ${fullWidth ? styles.fullWidth : ''}`}>
        {children}
      </div>
    </div>
  );
}
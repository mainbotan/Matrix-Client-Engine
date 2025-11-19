import Cloud from '@/assets/ui-kit/icons/cloud';
import styles from './message.module.scss';
import clsx from 'clsx';

interface MessageProps {
  title: string;
  status?: 'success' | 'error' | 'problem' | 'default';
  isActive?: boolean;
}

export function Message({ title, status = 'default', isActive = true }: MessageProps) {
  return (
    <div className={clsx(
      styles.container,
      styles[status],
      isActive && styles.active
    )}>
      <div className={styles.icon}><Cloud className={styles.svg} /></div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
}
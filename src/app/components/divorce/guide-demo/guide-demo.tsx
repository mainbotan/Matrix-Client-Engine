'use client';

import Cursor from '@/assets/ui-kit/icons/cursor';
import Settings from '@/assets/ui-kit/icons/settings';
import styles from './guide-demo.module.scss';

export default function GuideDemo() {
  return (
    <div className={styles.simpleDemo}>
      <div className={styles.demoScene}>
        <div className={styles.demoElement}>
        </div>
        
        <Cursor className={styles.animatedCursor} />
        
        <div className={styles.animatedTooltip}>
          <div className={styles.tooltipContent}>
          </div>
        </div>
      </div>
    </div>
  );
}
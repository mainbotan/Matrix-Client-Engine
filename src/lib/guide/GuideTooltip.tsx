'use client';

import { useEffect, useState } from 'react';
import { getIconComponent } from './GuideRegistry';
import { GuideTooltipProps } from './types';
import styles from './styles/guide.module.scss';
import clsx from 'clsx';
import Cloud from '@/assets/ui-kit/icons/cloud';

const TOOLTIP_OFFSET = 10; // px

export default function GuideTooltip({ 
  about, 
  icon, 
  targetRect, 
  visible,
  position = 'right'
}: GuideTooltipProps) {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const IconComponent = icon ? getIconComponent(icon) : null;

  useEffect(() => {
    if (!visible || !targetRect) {
      setMounted(false);
      return;
    }

    setMounted(true);
    
    const calculatePosition = () => {
      const scrollX = window.pageXOffset;
      const scrollY = window.pageYOffset;
      
      let top = 0;
      let left = 0;

      switch (position) {
        case 'top':
          top = targetRect.top + scrollY - TOOLTIP_OFFSET;
          left = targetRect.left + scrollX + (targetRect.width / 2);
          break;
        case 'bottom':
          top = targetRect.bottom + scrollY + TOOLTIP_OFFSET;
          left = targetRect.left + scrollX + (targetRect.width / 2);
          break;
        case 'left':
          top = targetRect.top + scrollY + (targetRect.height / 2);
          left = targetRect.left + scrollX - TOOLTIP_OFFSET;
          break;
        case 'right':
        default:
          top = targetRect.top + scrollY + (targetRect.height / 2);
          left = targetRect.right + scrollX + TOOLTIP_OFFSET;
          break;
      }

      setTooltipPosition({ top, left });
    };

    calculatePosition();
    
    // Обновляем позицию при скролле и ресайзе
    const handleScroll = () => calculatePosition();
    const handleResize = () => calculatePosition();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [visible, targetRect, position]);

  if (!visible || !mounted) return null;

  return (
    <div 
      className={clsx(styles.tooltip, styles[position])}
      style={{
        top: `${tooltipPosition.top}px`,
        left: `${tooltipPosition.left}px`,
      }}
      role="tooltip"
      aria-live="polite"
    >
      <div className={styles.tooltipContent}>
        {IconComponent ? (
          <div className={styles.iconWrapper}>
            <IconComponent className={styles.icon} />
          </div>
        ) : (
          <div className={styles.iconWrapper}>
            <Cloud className={styles.icon} />
          </div>
        )}
        <div className={styles.text}>{about}</div>
      </div>
      <div className={styles.tooltipArrow} />
    </div>
  );
}
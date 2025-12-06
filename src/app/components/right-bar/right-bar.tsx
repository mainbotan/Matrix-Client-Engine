'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './right-bar.module.scss';
import { sectionsConfig } from './sections.config';
import { isSectionActive } from '@/assets/utils/sections';

export function RightBar() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {sectionsConfig.map((section) => {
          const isActive = isSectionActive(pathname, section);
          const IconComponent = section.icon;
          
          // Безопасное создание className
          let className = styles.box;
          if (isActive && styles.active) {
            className += ` ${styles.active}`;
          }

          return (
            <Link
              key={section.slug || section.href}
              href={section.href}
              className={className}
              title={section.slug ? `Перейти к ${section.slug}` : ''}
            >
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.svg} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
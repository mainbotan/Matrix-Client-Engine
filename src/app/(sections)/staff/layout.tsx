'use client';

import styles from './layout.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { sectionsConfig } from './sections.map';
import { isSectionActive } from '@/assets/utils/sections';
import Button from '@/assets/ui-kit/button/button';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.focus}>
          <div className={styles.panel}>
            <section className={styles.sections}>
              {sectionsConfig.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Link 
                    key={section.slug || 'all'} 
                    href={section.href} 
                    className={clsx(
                      styles.section, 
                      isSectionActive(pathname, section) && styles.active
                    )}
                  >
                    <div className={styles.icon}>
                      <IconComponent className={styles.svg} />
                    </div>
                    <div className={styles.title}>{section.title}</div>
                  </Link>
                );
              })}
            </section>
            {/* <section className={styles.actions}>
                <Link href='/staff/new-worker'><Button className={styles.action} variant='accent' fullWidth>Новый сотрудник</Button></Link>
            </section> */}
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
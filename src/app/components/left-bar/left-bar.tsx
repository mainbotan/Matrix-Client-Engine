'use client';

import Copy from '@/assets/ui-kit/icons/copy';
import styles from './left-bar.module.scss';
import Team from '@/assets/ui-kit/icons/team';
import clsx from 'clsx';
import Chart from '@/assets/ui-kit/icons/chart';
import Collection from '@/assets/ui-kit/icons/collection';
import Plus from '@/assets/ui-kit/icons/plus';
import Link from 'next/link';
import { useSimpleContextMenu } from '@/lib/context-menu/useContextMenu';

export function LeftBar() {
    const actions = [
        {
            id: 'copy',
            label: 'Открыть в новой вкладке',
            icon: '',
            handler: () => {
                window.location.href = '/organization/company-slug';
            },
        }
    ];
    const { onContextMenu } = useSimpleContextMenu(actions);

    return (
        <div className={clsx(styles.container, styles.compact)}>
            <div className={styles.grid}>
                <section className={styles.sections}>
                    <Link href='/account/organizations' className={clsx(styles.section, styles.active)}>
                        <Collection className={styles.svg} />
                        <span className={styles.capture}>Организации</span>
                    </Link>
                </section>
                <section className={styles.organizations}>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item, styles.active)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <section className={styles.add}>
                        <Plus className={styles.svg} />
                    </section>
                </section>
            </div>
        </div>
    )
}
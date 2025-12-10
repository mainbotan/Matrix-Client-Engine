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
                <section
                    data-guide-about="Раздел для управления сотрудниками"
                    data-guide-icon="Team"
                    data-guide-id="team-management-section"
                    data-guide-priority="high"
                    data-guide-position="bottom"
                className={styles.sections}>
                    <Link href='/account/organizations' className={clsx(styles.section, styles.active)}>
                        <Collection className={styles.svg} />
                        <span className={styles.capture}>Организации</span>
                    </Link>
                </section>
                <section className={styles.organizations}>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item, styles.active)}>
                        <span className={clsx(styles.icon, styles.shaking)} style={{backgroundImage: 'url(https://avatars.githubusercontent.com/u/87086734?s=200&v=4)'}}><span className={styles.news}>6</span></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item)}>
                        <span className={styles.icon} style={{backgroundImage: 'url(https://avatars.mds.yandex.net/i?id=e2d18d9333d5c26e044d19c9df0218d803ee062ab3de4165-5236580-images-thumbs&n=13)'}}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item)}>
                        <span className={styles.icon} style={{backgroundImage: 'url(https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png)'}}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item)}>
                        <span className={styles.icon} style={{backgroundImage: 'url(https://avatars.githubusercontent.com/u/1246387?v=4)'}}></span>
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
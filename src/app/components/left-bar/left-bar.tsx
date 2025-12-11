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
                    data-guide-about="Здесь находятся все организации, в которых вы состоите. Вы так же можете использовать иконки организаций для быстрого перемещения между рабочими пространствами."
                    data-guide-icon="Collection"
                className={styles.sections}>
                    <Link href='/account/organizations' className={clsx(styles.section, styles.active)}>
                        <Collection className={styles.svg} />
                        <span className={styles.capture}>Организации</span>
                    </Link>
                </section>
                <section className={styles.organizations}>
                    <Link href='/organization/company-slug' onContextMenu={(e) => onContextMenu(e, '')} className={clsx(styles.item, styles.active)}>
                        <span className={clsx(styles.icon, styles.shaking)} style={{backgroundImage: 'url(https://avatars.mds.yandex.net/i?id=e2d18d9333d5c26e044d19c9df0218d803ee062ab3de4165-5236580-images-thumbs&n=13)'}}><span className={styles.news}>6</span></span>
                        <span className={styles.marker} />
                    </Link>
                    <section className={styles.inter}><span className={styles.line} /></section>
                    <Link href='/organization/create' className={styles.add}
                        data-guide-about="Создание нового рабочего пространства для организации."
                        data-guide-icon="Plus"
                    >
                        <Plus className={styles.svg} />
                    </Link>
                </section>
            </div>
        </div>
    )
}
'use client';

import Team from '@/assets/ui-kit/icons/team';
import styles from './right-bar.module.scss';
import Eye from '@/assets/ui-kit/icons/eye';
import Puzzle from '@/assets/ui-kit/icons/puzzle';
import Tools from '@/assets/ui-kit/icons/tools';
import Themization from '@/assets/ui-kit/icons/themization';
import Account from '@/assets/ui-kit/icons/account';
import Settings from '@/assets/ui-kit/icons/settings';
import Link from 'next/link';
import { useContextMenu, useSimpleContextMenu } from '@/lib/context-menu/useContextMenu';
import Cloud from '@/assets/ui-kit/icons/cloud';
import Copy from '@/assets/ui-kit/icons/copy';
import { useRouter } from 'next/router';

export function RightBar() {

    const actions = [
        {
            id: 'copy',
            label: 'Настройки',
            icon: <Tools />,
            handler: () => {
                window.location.href = '/settings';
            },
        }
    ];
    const { onContextMenu } = useSimpleContextMenu(actions);

    return (
        <div className={styles.container} onContextMenu={(e) => onContextMenu(e, '')}>
            <div className={styles.grid}>
                <Link href='/account' className={styles.box}>
                    <Account className={styles.svg} />
                </Link>
                <Link href='/settings' className={styles.box}>
                    <Settings className={styles.svg} />
                </Link>
                <Link href='/settings/environment' className={styles.box}>
                    <Themization className={styles.svg} />
                </Link>
            </div>
        </div>
    )
}
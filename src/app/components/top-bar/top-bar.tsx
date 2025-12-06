'use client';

import Arrow from '@/assets/ui-kit/icons/arrow';
import styles from './top-bar.module.scss';
import Link from 'next/link';
import Button from '@/assets/ui-kit/button/button';
import clsx from 'clsx';
import Plus from '@/assets/ui-kit/icons/plus';
import { useSimpleContextMenu } from '@/lib/context-menu/useContextMenu';
import Input from '@/assets/ui-kit/input/input';

export function TopBar() {
    const actions = [
        {
            id: 'account',
            label: 'Аккаунт',
            icon: '',
            handler: () => {
                window.location.href = '/account';
            },
        },
        {
            id: 'environment',
            label: 'Оформление',
            icon: '',
            handler: () => {
                window.location.href = '/environment';
            },
        },
        {
            id: 'environment',
            label: 'Пригласить',
            icon: '',
            handler: () => {
                window.location.href = '/account/invite';
            },
        }
    ];
    const { onContextMenu } = useSimpleContextMenu(actions);
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <Link href='/' className={styles.logo}>
                    <img src='/images/logo/base.png' className={styles.icon} />
                    <span className={styles.name}>Matrix</span>
                </Link>
                <section className={styles.sections}>
                    <span className={styles.section}>Рабочий стол</span>
                    <span className={styles.section}>Документация</span>
                </section>
                {/* <section className={styles.workspace}>
                    <span className={styles.icon}><div className={styles.label}>E</div></span>
                    <span className={styles.name}>Easy Service</span>
                    <span className={styles.action}><Arrow className={styles.svg} /></span>
                </section> */}
                <section className={styles.search}>
                    <span className={styles.shortcut}>Ctrl+K</span>
                    <Input className={styles.input} placeholder='Поиск по организации...' />
                </section>
                <section className={styles.actions}>
                    <Button variant='contrast' className={clsx(styles.action, styles.invite)}>
                        <Plus className={styles.svg} />
                        <span className={styles.span}>Пригласить</span>
                    </Button>
                </section>
                <section onClick={(e) => onContextMenu(e, '')} className={styles.account}>
                    <span className={styles.name}>Serafim</span>
                    <span className={styles.icon}><div className={styles.label}>S</div></span>
                </section>
            </div>
            <div className={styles.el} />
        </div>
    )
}
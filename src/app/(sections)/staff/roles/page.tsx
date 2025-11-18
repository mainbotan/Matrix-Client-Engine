'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import Input from '@/assets/ui-kit/input/input';
import Button from '@/assets/ui-kit/button/button';
import SearchPlug from '@/app/components/search-plug/search-plug';

export default function Page() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.search}>
                <Input className={styles.input} variant='default' placeholder='Название, ID...' />
                <Link href='/staff/roles/create'><Button className={styles.action} variant='accent'>Новая роль</Button></Link>
            </div>
            <div className={styles.roles}>
                <Link href='/staff/roles/meneger' className={styles.role}>
                    <div className={styles.info}>
                        <div className={styles.name}>Менеджер</div>
                        <div className={styles.description}>Сосёт хуй</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>13</div>
                            <div className={styles.title}>Сотрудников</div>
                        </div>
                    </div>
                </Link>
                <Link href='/staff/roles/master' className={styles.role}>
                    <div className={styles.info}>
                        <div className={styles.name}>Мастер</div>
                        <div className={styles.description}>Готовит хуй</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>33</div>
                            <div className={styles.title}>Сотрудников</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
}
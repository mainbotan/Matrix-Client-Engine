'use client';

import Input from '@/assets/ui-kit/input/input';
import styles from './page.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

export default function Page() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <div className={clsx(styles.value, styles.normal)}>2</div>
                    <div className={styles.capture}>Сотрудника</div>
                    <div className={styles._meta}>В штате</div>
                </div>
                <div className={styles.block}>
                    <div className={clsx(styles.value, styles.positive)}>1</div>
                    <div className={styles.capture}>Новый</div>
                    <div className={styles._meta}>В этом месяце</div>
                </div>
                <div className={styles.block}>
                    <div className={clsx(styles.value, styles.positive)}>0</div>
                    <div className={styles.capture}>Увольнений</div>
                    <div className={styles._meta}>В этом месяце</div>
                </div>
                <div className={styles.block}>
                    <div className={styles.value}>2</div>
                    <div className={styles.capture}>Роли</div>
                    <div className={styles._meta}>Всего</div>
                </div>
            </div>
            <div className={styles.search}>
                <Input className={styles.input} variant='default' placeholder='Имя, ID...' />
            </div>
            <div className={styles.cards}>
                <Link href='/staff/0x12391-kfna-32323' className={styles.card}>
                    <div className={styles.tags}>
                        <div className={clsx(styles.tag, styles.role)}>Менеджер</div>
                        <div className={clsx(styles.tag, styles.id)}>0x12391-kfna-32323</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Виталий Сергеевич</div>
                        <div className={styles.description}>Хуесос знатный, но работает нормально, приносит нам лям стабильно каждый ебаный месяц.</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>0ч</div>
                            <div className={styles.title}>за неделю</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>0ч</div>
                            <div className={styles.title}>за неделю</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>0ч</div>
                            <div className={styles.title}>за неделю</div>
                        </div>
                    </div>
                </Link>
                <Link href='/staff/0x12391-kfna-32323' className={styles.card}>
                    <div className={styles.tags}>
                        <div className={clsx(styles.tag, styles.role)}>Менеджер</div>
                        <div className={clsx(styles.tag, styles.id)}>0x12391-kfna-32323</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Виталий Сергеевич</div>
                        <div className={styles.description}>Хуесос знатный, но работает нормально, приносит нам лям стабильно каждый ебаный месяц.</div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.value}>0ч</div>
                            <div className={styles.title}>за неделю</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>0ч</div>
                            <div className={styles.title}>за неделю</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.value}>0ч</div>
                            <div className={styles.title}>за неделю</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
}
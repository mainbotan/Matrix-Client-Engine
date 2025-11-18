'use client';

import Input from '@/assets/ui-kit/input/input';
import styles from './page.module.scss';
import clsx from 'clsx';

export default function Page() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.search}>
                <Input className={styles.input} variant='default' placeholder='Имя, ID...' />
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.tags}>
                        <div className={clsx(styles.tag, styles.role)}>Менеджер</div>
                        <div className={clsx(styles.tag, styles.id)}>1923-1233-2031</div>
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
                </div>
                <div className={styles.card}>
                    <div className={styles.tags}>
                        <div className={clsx(styles.tag, styles.role)}>Мастер</div>
                        <div className={clsx(styles.tag, styles.id)}>1923-1233-2031</div>
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
                </div>
            </div>
        </div>
        </>
    );
}
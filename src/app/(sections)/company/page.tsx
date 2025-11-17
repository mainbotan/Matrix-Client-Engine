'use client';

import Arrow from '@/assets/ui-kit/icons/arrow';
import styles from './page.module.scss';
import Container from "@/app/components/container/container";
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import Input from '@/assets/ui-kit/input/input';

export default function Page() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.focus}>
                    <div className={styles.header}>
                        <div className={styles.title}>Данные организации</div>
                    </div>
                    <div className={styles.navigation}>
                        <section className={clsx(styles.section, styles.active)}>Общие данные</section>
                        <section className={styles.section}>Налогооблажение</section>
                    </div>
                    <section className={styles.sections}>
                        <section className={styles.section}>
                            <div className={styles.capture}>Наименование</div>
                            <div className={styles.basic}>
                                <div className={styles.info}>
                                    <div className={styles.title}>Форма налогооблажения</div>
                                    <div className={styles.about}>Форма налогооблажения</div>
                                </div>
                                <div className={styles.value}>
                                    <Input className={styles.input} value='ООО' />
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}
'use client';

import { useRouter } from 'next/navigation';
import Arrow from '@/assets/ui-kit/icons/arrow';
import styles from './page.module.scss';
import Textarea from '@/assets/ui-kit/textarea/textarea';
import clsx from 'clsx';
import Close from '@/assets/ui-kit/icons/close';
import Button from '@/assets/ui-kit/button/button';
import Input from '@/assets/ui-kit/input/input';

export default function Page() {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.back}>
                    <div className={styles.circle} onClick={handleBackClick}>
                        <Arrow className={styles.svg} />
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>Менеджер <span className={styles.secondary}>роль</span></div>
                </div>
            </div>
            <div className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.capture}>Описание обязанностей</div>
                    <div className={styles.description}>До 3000 символов</div>
                    <Textarea variant='leader' fullWidth className={styles.textarea} placeholder='' />
                </section>
                <section className={clsx(styles.section, styles.permissions)}>
                    <div className={styles.capture}>Разрешения</div>
                    <div className={styles.search}>
                        <Input className={styles.input} variant='leader' placeholder='Название или ID разрешения' />
                        <div className={clsx(styles.modal)}>
                            <div className={styles.grid}>
                                <div className={styles.item}>
                                    <div className={styles.title}>deals.create</div>
                                    <div className={styles.description}>Создание мастер-сделок</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.activePermissions}>
                        <div className={styles.permission}>
                            <div className={styles.info}>
                                <div className={styles.id}>crm.*</div>
                                <div className={styles.about}>Все возможности модуля CRM</div>
                            </div>
                            <div className={styles.actions}>
                                <Button variant='leader' className={styles.action}>Удалить</Button>
                            </div>
                        </div>
                        <div className={styles.permission}>
                            <div className={styles.info}>
                                <div className={styles.id}>crm.*</div>
                                <div className={styles.about}>Все возможности модуля CRM</div>
                            </div>
                            <div className={styles.actions}>
                                <Button variant='leader' className={styles.action}>Удалить</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
}
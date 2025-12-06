import { ST } from 'next/dist/shared/lib/utils';
import { Loading } from '../../components/loading/canvas';
import styles from './page.module.scss';
import Input from '@/assets/ui-kit/input/input';
import Account from '@/assets/ui-kit/icons/account';
import clsx from 'clsx';
import Mail from '@/assets/ui-kit/icons/mail';
import Id from '@/assets/ui-kit/icons/id';
import Keyhole from '@/assets/ui-kit/icons/keyhole';
import TwoCards from '@/assets/ui-kit/icons/two-cards';
import Eye from '@/assets/ui-kit/icons/eye';

export default function Page() {
    return (
        <>
        <div className={styles.title}>
            <span className={styles.name}>Serafim,</span> ваш аккаунт
        </div>
        <section className={styles.sections}>
            <section className={styles.title}>
                Доступ и безопасность
            </section>
            <section className={styles.item}>
                <div className={styles.icon}>
                    <span className={styles.frame}><Mail className={styles.svg} /></span>
                </div>
                <div className={styles.info}>
                    <div className={styles.capture}>Почта</div>
                    <div className={clsx(styles.description, styles.success)}>Подтверждена 06.12.2025</div>
                </div>
                <div className={styles.value}>
                    <Input className={styles.input} placeholder='' value='ned.serafim@gmail.com' readOnly />
                </div>
            </section>
            <section className={styles.item}>
                <div className={styles.icon}>
                    <span className={styles.frame}><Id className={styles.svg} /></span>
                </div>
                <div className={styles.info}>
                    <div className={styles.capture}>Идентификатор аккаунта</div>
                    <div className={clsx(styles.description)}>Используется в редких случаях при общении с поддержкой.</div>
                </div>
                <div className={styles.value}>
                    <Input className={styles.input} placeholder='' value='4430ff99-b25b-4ca6-91f1-a30b4aaa9782' readOnly />
                </div>
            </section>
            <section className={styles.item}>
                <div className={styles.icon}>
                    <span className={styles.frame}><TwoCards className={styles.svg} /></span>
                </div>
                <div className={styles.info}>
                    <div className={styles.capture}>Способ авторизации</div>
                </div>
                <div className={clsx(styles.value, styles.text)}>
                    Пароль
                </div>
            </section>
            <section className={styles.item}>
                <div className={styles.icon}>
                    <span className={styles.frame}><Keyhole className={styles.svg} /></span>
                </div>
                <div className={styles.info}>
                    <div className={styles.capture}>Смена пароля</div>
                </div>
                <div className={clsx(styles.value, styles.text)}>
                    Изменить
                </div>
            </section>
        </section>
        <section className={styles.sections}>
            <section className={styles.title}>
                Глобальная видимость
            </section>
            <section className={styles.item}>
                <div className={styles.icon}>
                    <span className={styles.frame}><Eye className={styles.svg} /></span>
                </div>
                <div className={styles.info}>
                    <div className={styles.capture}>Могут ли организации приглашать вас?</div>
                </div>
                <div className={clsx(styles.value, styles.text)}>
                    Могут
                </div>
            </section>
        </section>
        <div className={styles.afterword}>
            Аккаунт создан 6 декабря, 2025г.
        </div>
        </>
    )
}
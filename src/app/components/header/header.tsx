import clsx from 'clsx';
import styles from './header.module.scss';
import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import Arrow from '@/assets/ui-kit/icons/arrow';
import Menu from '@/assets/ui-kit/icons/menu';
import Button from '@/assets/ui-kit/button/button';
import CheckMark from '@/assets/ui-kit/icons/check-mark';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className={styles.container}>
                <div className={styles.focus}>
                    <Link href='/' className={clsx(styles.box, styles.logo)}>Matrix</Link>
                    <section className={clsx(styles.box, styles.sections)}>
                        <section className={clsx(styles.section, styles.marker)}><Arrow className={styles.svg} /></section>
                        <Link href='/modules' className={styles.section}>Модули</Link>
                        <Link href='/integrations' className={styles.section}>Интеграции</Link>
                        <Link href='/pricing' className={styles.section}>Тарифы</Link>
                        <Link href='/docs' className={styles.section}>Документация</Link>
                        <Link href='/dev' className={styles.section}>Разработчикам</Link>
                    </section>
                    <section className={clsx(styles.box, styles.account)}>
                        <div className={styles.avatar}><span className={styles.img} /></div>
                        <div className={styles.info}>
                            <span className={styles.name}>Matrix 2301-234</span>
                            <span className={clsx(styles.status, styles.active)}><span>Вход выполнен</span></span>
                        </div>
                    </section>
                    <section className={clsx(styles.box, styles.actions)}>
                        <Button className={styles.action} variant='brand'>Войти</Button>
                        <Button className={styles.action}>Создать аккаунт</Button>
                    </section>
                    <section className={clsx(styles.box, styles.burger)}><span className={styles.frame}><Menu className={styles.svg}></Menu></span></section>
                </div>
            </header>
            <div className={styles.inter} />
        </>
    );
}
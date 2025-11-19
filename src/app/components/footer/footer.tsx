import clsx from 'clsx';
import styles from './footer.module.scss';
import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import Arrow from '@/assets/ui-kit/icons/arrow';
import Menu from '@/assets/ui-kit/icons/menu';
import Button from '@/assets/ui-kit/button/button';
import ThemeSwitcher from './theme-switcher/theme-switcher';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <div className={styles.focus}>
                    <section className={clsx(styles.logo)}>Matrix</section>
                    <section className={styles.sections}>
                        <section className={styles.section}><span className={styles.title}>Больше о Matrix</span></section>
                        <section className={styles.section}><span className={styles.title}>Поддержка</span></section>
                        <section className={styles.section}><span className={styles.title}>Блог</span></section>
                        <Link href='/design' className={styles.section}><span className={styles.title}>Дизайн</span></Link>
                    </section>
                    <section className={styles.status}>
                        <span className={clsx(styles.span, styles.normal)}>Повреждений не обнаружено</span>
                    </section>
                    <section className={styles.switcher}><ThemeSwitcher /></section>
                </div>
            </footer>
        </>
    );
}
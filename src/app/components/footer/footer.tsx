import clsx from 'clsx';
import styles from './footer.module.scss';
import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import Arrow from '@/assets/ui-kit/icons/arrow';
import Menu from '@/assets/ui-kit/icons/menu';
import Button from '@/assets/ui-kit/button/button';

export default function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <div className={styles.focus}>
                    <section className={clsx(styles.box, styles.logo)}><MatrixFullLogo /></section>
                    <section className={clsx(styles.box, styles.sections)}>
                        <div className={styles.col}>
                            <section className={clsx(styles.section, styles.capture)}>Нишевые решения</section>
                            <section className={clsx(styles.section)}>Ебать</section>
                            <section className={clsx(styles.section)}>Автосервисы</section>
                            <section className={clsx(styles.section)}>Это</section>
                            <section className={clsx(styles.section)}>ебаная залупа</section>
                            <section className={clsx(styles.section)}>По секрету</section>
                            <section className={clsx(styles.section)}>Вам</section>
                            <section className={clsx(styles.section)}>Скажу</section>
                        </div>
                        <div className={styles.col}>
                            <section className={clsx(styles.section, styles.capture)}>Нишевые решения</section>
                            <section className={clsx(styles.section)}>Ебать</section>
                            <section className={clsx(styles.section)}>Автосервисы</section>
                            <section className={clsx(styles.section)}>Это</section>
                            <section className={clsx(styles.section)}>ебаная залупа</section>
                            <section className={clsx(styles.section)}>По секрету</section>
                            <section className={clsx(styles.section)}>Вам</section>
                            <section className={clsx(styles.section)}>Скажу</section>
                        </div>
                        <div className={styles.col}>
                            <section className={clsx(styles.section, styles.capture)}>Нишевые решения</section>
                            <section className={clsx(styles.section)}>Ебать</section>
                            <section className={clsx(styles.section)}>Автосервисы</section>
                            <section className={clsx(styles.section)}>Это</section>
                            <section className={clsx(styles.section)}>ебаная залупа</section>
                            <section className={clsx(styles.section)}>По секрету</section>
                            <section className={clsx(styles.section)}>Вам</section>
                            <section className={clsx(styles.section)}>Скажу</section>
                        </div>
                        <div className={styles.col}>
                            <section className={clsx(styles.section, styles.capture)}>Нишевые решения</section>
                            <section className={clsx(styles.section)}>Ебать</section>
                            <section className={clsx(styles.section)}>Автосервисы</section>
                            <section className={clsx(styles.section)}>Это</section>
                            <section className={clsx(styles.section)}>ебаная залупа</section>
                            <section className={clsx(styles.section)}>Автосервисы</section>
                            <section className={clsx(styles.section)}>Это</section>
                            <section className={clsx(styles.section)}>ебаная залупа</section>
                            <section className={clsx(styles.section)}>По секрету</section>
                            <section className={clsx(styles.section)}>Вам</section>
                            <section className={clsx(styles.section)}>Скажу</section>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    );
}
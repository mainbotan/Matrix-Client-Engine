import Arrow from '@/assets/ui-kit/icons/arrow';
import styles from './top-bar.module.scss';
import Link from 'next/link';

export function TopBar() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <Link href='/' className={styles.logo}>
                    <img src='/images/logo/base.png' className={styles.icon} />
                    <span className={styles.name}>Matrix</span>
                </Link>
                <section className={styles.workspace}>
                    <span className={styles.icon}><div className={styles.label}>E</div></span>
                    <span className={styles.name}>Easy Service</span>
                    <span className={styles.action}><Arrow className={styles.svg} /></span>
                </section>
                <section className={styles.actions}></section>
                <section className={styles.account}>
                    <span className={styles.name}>Serafim</span>
                    <span className={styles.icon}><div className={styles.label}>S</div></span>
                </section>
            </div>
            <div className={styles.el} />
        </div>
    )
}
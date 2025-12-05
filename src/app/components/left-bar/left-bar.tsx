import Copy from '@/assets/ui-kit/icons/copy';
import styles from './left-bar.module.scss';
import Team from '@/assets/ui-kit/icons/team';
import clsx from 'clsx';
import Chart from '@/assets/ui-kit/icons/chart';

export function LeftBar() {
    return (
        <div className={clsx(styles.container, styles.compact)}>
            <div className={styles.grid}>
                <section className={styles.sections}>
                    <section className={styles.section}>
                        <div className={styles.icon}><Team className={styles.svg} /></div>
                        <div className={styles.text}>
                            <div className={styles.capture}>Сделки</div>
                        </div>
                    </section>
                </section>
            </div>
            <div className={styles.el} />
        </div>
    )
}
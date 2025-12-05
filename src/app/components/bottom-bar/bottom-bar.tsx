import Copy from '@/assets/ui-kit/icons/copy';
import styles from './bottom-bar.module.scss';
import Team from '@/assets/ui-kit/icons/team';
import clsx from 'clsx';

export function BottomBar() {
    return (
        <div className={clsx(styles.container)}>
            <div className={styles.grid}>
                <section className={styles.box}>
                    Рабочая область
                </section>
                <section className={clsx(styles.box, styles.version)}>
                    Сборка 0.1x
                </section>
            </div>
        </div>
    )
}
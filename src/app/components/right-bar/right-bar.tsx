import Team from '@/assets/ui-kit/icons/team';
import styles from './right-bar.module.scss';
import Copy from '@/assets/ui-kit/icons/copy';
import Eye from '@/assets/ui-kit/icons/eye';

export function RightBar() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <section className={styles.box}>
                    <Copy className={styles.svg} />
                </section>
                <section className={styles.box}>
                    <Team className={styles.svg} />
                </section>
                <section className={styles.box}>
                    <Eye className={styles.svg} />
                </section>
            </div>
        </div>
    )
}
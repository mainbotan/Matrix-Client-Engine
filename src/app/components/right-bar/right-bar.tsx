import Team from '@/assets/ui-kit/icons/team';
import styles from './right-bar.module.scss';
import Copy from '@/assets/ui-kit/icons/copy';
import Eye from '@/assets/ui-kit/icons/eye';
import Puzzle from '@/assets/ui-kit/icons/puzzle';
import Tools from '@/assets/ui-kit/icons/tools';
import Themization from '@/assets/ui-kit/icons/themization';
import Account from '@/assets/ui-kit/icons/account';
import Settings from '@/assets/ui-kit/icons/settings';

export function RightBar() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <section className={styles.box}>
                    <Account className={styles.svg} />
                </section>
                <section className={styles.box}>
                    <Settings className={styles.svg} />
                </section>
                <section className={styles.box}>
                    <Themization className={styles.svg} />
                </section>
            </div>
        </div>
    )
}
import Copy from '@/assets/ui-kit/icons/copy';
import styles from './left-bar.module.scss';
import Team from '@/assets/ui-kit/icons/team';
import clsx from 'clsx';
import Chart from '@/assets/ui-kit/icons/chart';
import Collection from '@/assets/ui-kit/icons/collection';
import Plus from '@/assets/ui-kit/icons/plus';
import Link from 'next/link';

export function LeftBar() {
    return (
        <div className={clsx(styles.container, styles.compact)}>
            <div className={styles.grid}>
                <section className={styles.sections}>
                    <section className={clsx(styles.section, styles.active)}>
                        <Collection className={styles.svg} />
                        <span className={styles.capture}>Организации</span>
                    </section>
                </section>
                <section className={styles.organizations}>
                    <Link href='/organization/company-slug' className={clsx(styles.item, styles.active)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' className={clsx(styles.item)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' className={clsx(styles.item)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' className={clsx(styles.item)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <Link href='/organization/company-slug' className={clsx(styles.item)}>
                        <span className={styles.icon}></span>
                        <span className={styles.marker} />
                    </Link>
                    <section className={styles.add}>
                        <Plus className={styles.svg} />
                    </section>
                </section>
            </div>
        </div>
    )
}
import clsx from 'clsx';
import styles from './page.module.scss';
import Clients from '@/assets/ui-kit/icons/clients';
import Kanban from '@/assets/ui-kit/icons/kanban';
import Plus from '@/assets/ui-kit/icons/plus';

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.single}>
                    <div className={styles.ray}>
                        <span className={styles.point}>Huly Platform</span>
                        <span className={styles.inter}>/</span>
                        <span className={clsx(styles.point)}>CRM</span>
                        <span className={styles.inter}>/</span>
                        <span className={clsx(styles.point, styles.active)}>Канбан</span>
                    </div>
                    <div className={styles.title}>CRM</div>
                </div>
                <section className={styles.sections}>
                    <div className={styles.grid}>
                        <section className={clsx(styles.section, styles.active)}>
                            <div className={styles.icon}><Kanban className={styles.svg} /></div>
                            <div className={styles.capture}>Канбан</div>
                            <span className={styles.marker} />
                        </section>
                        <section className={clsx(styles.section)}>
                            <div className={styles.icon}><Clients className={styles.svg} /></div>
                            <div className={styles.capture}>Клиентская база</div>
                            <span className={styles.marker} />
                        </section>
                        <section className={clsx(styles.section)}>
                            <div className={styles.icon}><Clients className={styles.svg} /></div>
                            <div className={styles.capture}>Сроки</div>
                            <span className={styles.marker} />
                        </section>
                    </div>
                </section>
            </div>
            <div className={styles.content}>
                <div className={styles.canvas}>
                    <div className={styles.grid}>
                        <div className={styles.col}>
                            <div className={styles.top}>
                                <span className={styles.marker} />
                                <span className={styles.name}>Ожидают</span>
                            </div>
                            <div className={styles.add}><Plus className={styles.svg} /></div>
                            <div className={styles.block}></div>
                            <div className={styles.block}></div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.top}>
                                <span className={styles.marker} />
                                <span className={styles.name}>Согласование</span>
                            </div>
                            <div className={styles.add}><Plus className={styles.svg} /></div>
                            <div className={styles.block}></div>
                            <div className={styles.block}></div>
                            <div className={styles.block}></div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.top}>
                                <span className={styles.marker} />
                                <span className={styles.name}>В работе</span>
                            </div>
                            <div className={styles.add}><Plus className={styles.svg} /></div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.top}>
                                <span className={styles.marker} />
                                <span className={styles.name}>Завершены</span>
                            </div>
                            <div className={styles.add}><Plus className={styles.svg} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
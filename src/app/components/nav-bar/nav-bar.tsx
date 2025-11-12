import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import styles from './nav-bar.module.scss';
import clsx from 'clsx';
import Cloud from '@/assets/ui-kit/icons/cloud';
import Filter from '@/assets/ui-kit/icons/filter';
import Team from '@/assets/ui-kit/icons/team';
import Chart from '@/assets/ui-kit/icons/chart';
import Clients from '@/assets/ui-kit/icons/clients';
import Deal from '@/assets/ui-kit/icons/deal';
import Warehouse from '@/assets/ui-kit/icons/warehouse';
import Graph from '@/assets/ui-kit/icons/graph';

export default function NavBar() {
    return (
        <div data-theme="light" className={styles.container}>
            <div className={styles.label}>
                <div className={styles.matrix}>Matrix</div>
            </div>
            <div className={styles.company}>
                <div className={styles.label}>
                    <div className={styles.info}>
                        {/* <div className={styles.counter}>183 <span className={styles.secondary}>дня</span></div> */}
                        <div className={styles.name}>Easy Service</div>
                        <div className={styles._meta}>Starter Kit</div>
                    </div>
                </div>
            </div>
            <section className={styles.sections}>
                <div className={styles.grid}>
                    <section className={clsx(styles.section, styles.active)}>
                        <div className={styles.icon}><Clients className={styles.svg} /></div>
                        <div className={styles.info}>
                            <div className={styles.title}>CRM</div>
                            <div className={styles._meta}>Управление клиентами</div>
                        </div>
                    </section>
                    <section className={clsx(styles.section, styles.active)}>
                        <div className={styles.icon}><Deal className={styles.svg} /></div>
                        <div className={styles.info}>
                            <div className={styles.title}>Сделки</div>
                        </div>
                    </section>
                    <section className={clsx(styles.section, styles.active)}>
                        <div className={styles.icon}><Warehouse className={styles.svg} /></div>
                        <div className={styles.info}>
                            <div className={styles.title}>Складской учёт</div>
                        </div>
                    </section>
                    <section className={clsx(styles.section, styles.active)}>
                        <div className={styles.icon}><Team className={styles.svg} /></div>
                        <div className={styles.info}>
                            <div className={styles.title}>Сотрудники</div>
                        </div>
                    </section>
                    <section className={clsx(styles.section, styles.active)}>
                        <div className={styles.icon}><Filter className={styles.svg} /></div>
                        <div className={styles.info}>
                            <div className={styles.title}>Воронка продаж</div>
                        </div>
                    </section>
                    <section className={clsx(styles.section, styles.active)}>
                        <div className={styles.icon}><Graph className={styles.svg} /></div>
                        <div className={styles.info}>
                            <div className={styles.title}>Отчёты & Аналитика</div>
                        </div>
                    </section>
                </div>
            </section>
            <div className={styles.widgets}>
                <div className={styles.widget}>

                </div>
                <div className={styles.widget}>
                    
                </div>
                <div className={styles.widget}>
                    
                </div>
            </div>
            <div className={styles.account}>
                <div className={styles.upgrade}>
                    Upgrade to 
                    <span className={styles.primary}>Extended Kit</span>
                </div>
                <div className={styles.personality}>
                    <div className={styles.avatar}><span className={styles.picture} /></div>
                    <div className={styles.info}>
                        <div className={styles.name}>Игорь</div>
                        <div className={styles._meta}>Вход выполнен</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
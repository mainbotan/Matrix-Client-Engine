import Cloud from '@/assets/ui-kit/icons/cloud';
import styles from './layout.module.scss';
import Team from '@/assets/ui-kit/icons/team';
import Deal from '@/assets/ui-kit/icons/deal';
import Clients from '@/assets/ui-kit/icons/clients';
import Warehouse from '@/assets/ui-kit/icons/warehouse';
import Button from '@/assets/ui-kit/button/button';
import Thunder from '@/assets/ui-kit/icons/thunder';
import History from '@/assets/ui-kit/icons/history';
import clsx from 'clsx';
import LogLine from '@/assets/ui-kit/svgs/log-line/log-line';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <div className={styles.grid}>
                  <div className={styles.label}>

                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>My Project</div>
                    <div className={styles.description}>89 сотрудников</div>
                  </div>
                  <section className={styles.sections}>
                    <section className={styles.section}>
                      <div className={styles.icon}><Team className={styles.svg} /></div>
                      <div className={styles.name}>Сотрудники</div>
                    </section>
                    <section className={styles.section}>
                      <div className={styles.icon}><Deal className={styles.svg} /></div>
                      <div className={styles.name}>Сделки</div>
                    </section>
                    <section className={styles.section}>
                      <div className={styles.icon}><Clients className={styles.svg} /></div>
                      <div className={styles.name}>CRM</div>
                    </section>
                    <section className={styles.section}>
                      <div className={styles.icon}><Warehouse className={styles.svg} /></div>
                      <div className={styles.name}>Склад</div>
                    </section>
                  </section>
                  <div className={styles.widgets}>
                    <section className={styles.widget}>

                    </section>
                    <section className={styles.widget}>
                      
                    </section>
                    <section className={styles.widget}>
                      
                    </section>
                  </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.actions}>
                  <div className={styles.grid}>
                    <div className={styles.label}>
                      <Thunder className={styles.svg} />
                      <span className={styles.capture}>Быстрые действия</span>
                    </div>
                    <Button className={styles.action}>Новая сделка</Button>
                    <Button className={styles.action}>Отчёт за месяц</Button>
                  </div>
                </div>
                {children}
            </div>
            <div className={styles.history}>
              <div className={clsx(styles.inner)}>
                <div className={styles.grid}>
                  <div className={styles.top}>
                    <div className={styles.icon}><History className={styles.svg} /></div>
                    <div className={styles.name}>История</div>
                  </div>
                  <div className={styles.logs}>
                    <section className={styles.log}>
                      <div className={styles.base}>
                        <div className={styles.marker}><span className={styles.circle} /></div>
                        <div className={styles.info}>
                          <div className={styles.action}>Создание сотрудника</div>
                        </div>
                      </div>
                      <div className={styles.details}>
                        <div className={styles.way}><span className={styles.line} /></div>
                        <div className={styles.info}>
                            <div className={styles.stroke}>07.12.2025</div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
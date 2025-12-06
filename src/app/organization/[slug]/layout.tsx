import Cloud from '@/assets/ui-kit/icons/cloud';
import styles from './layout.module.scss';
import Team from '@/assets/ui-kit/icons/team';
import Deal from '@/assets/ui-kit/icons/deal';
import Clients from '@/assets/ui-kit/icons/clients';
import Warehouse from '@/assets/ui-kit/icons/warehouse';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <div className={styles.label}>

                </div>
                <div className={styles.info}>
                  <div className={styles.name}>Организация</div>
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
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.notes}>
              
            </div>
        </div>
    )
}
import Team from '@/assets/ui-kit/icons/team';
import styles from './layout.module.scss';
import Hiring from '@/assets/ui-kit/icons/hiring';
import Branching from '@/assets/ui-kit/icons/branching';
import Star from '@/assets/ui-kit/icons/star';
import Roles from '@/assets/ui-kit/icons/roles';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
     <>
        <div className={styles.container}>
            <div className={styles.focus}>
                <div className={styles.panel}>
                    <section className={styles.sections}>
                        <section className={styles.section}>
                            <div className={styles.icon}><Team className={styles.svg} /></div>
                            <div className={styles.title}>Все сотрудники</div>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.icon}><Branching className={styles.svg} /></div>
                            <div className={styles.title}>Отделы & Команды</div>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.icon}><Star className={styles.svg} /></div>
                            <div className={styles.title}>Рейтинг</div>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.icon}><Roles className={styles.svg} /></div>
                            <div className={styles.title}>Роли & Обязанности</div>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.icon}><Hiring className={styles.svg} /></div>
                            <div className={styles.title}>Источники наёма</div>
                        </section>
                    </section>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
     </>
   );
}
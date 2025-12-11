import styles from '@/app/components/fork-divorce/fork-divorce.module.scss';
import Button from '@/assets/ui-kit/button/button';
import Team from '@/assets/ui-kit/icons/team';
import Input from '@/assets/ui-kit/input/input';
import clsx from 'clsx';

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.focus}>
                <div className={clsx(styles.col, styles.info, styles.start)}>
                    <div className={styles.icon}><Team className={clsx(styles.svg, styles.accent)} /></div>
                    <h2>Создание организации</h2>
                    <div className={styles.description}>
                        Создайте рабочее пространство для всей команды и используйте возможности вашего тарифного плана.
                    </div>
                    <div className={styles.hint}>
                        <span className={styles.marker} />
                        <h2>Пробный период</h2>
                        <div className={styles.text}>
                            Мы предоставляем пробный период на 14 дней тарифа <span className={styles.accent}>Enter+</span>, включающий функционал всех модулей системы.
                            После окончания этого срока вы сможете продлить подписку или перейти на другой тариф без потери уже сохранённых данных.
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <Button className={styles.action} variant='accent' disabled>Создать</Button>
                    </div>
                </div>
                <div className={styles.inter}><span className={clsx(styles.line)} /></div>
                <div className={clsx(styles.col, styles.content, styles.start)}>
                    <h3>Данные организации</h3>
                    <section className={styles.form}>
                        <section>
                            <Input className={styles.input} fullWidth />
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}
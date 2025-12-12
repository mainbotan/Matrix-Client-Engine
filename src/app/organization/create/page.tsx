import styles from '@/app/components/fork-divorce/fork-divorce.module.scss';
import Button from '@/assets/ui-kit/button/button';
import CheckMark from '@/assets/ui-kit/icons/check-mark';
import Team from '@/assets/ui-kit/icons/team';
import Input from '@/assets/ui-kit/input/input';
import Select from '@/assets/ui-kit/select/select';
import clsx from 'clsx';
import { Plans } from './plans/plans';

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
                        <Button className={clsx(styles.action)} variant='contrast' disabled>Создать</Button>
                    </div>
                </div>
                <div className={styles.inter}><span className={clsx(styles.line)} /></div>
                <div className={clsx(styles.col, styles.content, styles.start)}>
                    <div className={styles.grid}>
                        <h3>Данные организации</h3>
                        <section className={styles.form}>
                            <section className={styles.section}>
                                <div className={styles.top}>
                                    <div className={styles.capture}>
                                        Название компании
                                    </div>
                                    <div className={clsx(styles.status, styles.success)}>
                                        <span className={styles.icon}><span className={styles.circle}><CheckMark className={styles.svg} /></span></span>
                                        <span className={styles.text}>Допустимое значение</span>
                                    </div>
                                </div>
                                <Input className={styles.input} fullWidth />
                                <div className={styles.description}>Используется для брендинга рабочего пространства.</div>
                            </section>
                            <div className={clsx(styles.group, styles.half)}>
                                <section className={styles.section}>
                                    <div className={styles.top}>
                                        <div className={styles.capture}>
                                            Тип
                                        </div>
                                        <div className={clsx(styles.status, styles.success)}>
                                            <span className={styles.icon}><span className={styles.circle}><CheckMark className={styles.svg} /></span></span>
                                            {/* <span className={styles.text}>Допустимое значение</span> */}
                                        </div>
                                    </div>
                                    <Select className={styles.input} fullWidth options={[
                                        { value: 'closed', label: 'Закрытая' }, 
                                        { value: 'open', label: 'Открытая' }
                                    ]}/>
                                    <div className={styles.description}>Правовые документы.</div>
                                </section>
                                <section className={styles.section}>
                                    <div className={styles.top}>
                                        <div className={styles.capture}>
                                            Размер <span className={styles.secondary}>(организации)</span>
                                        </div>
                                        <div className={clsx(styles.status, styles.success)}>
                                            <span className={styles.icon}><span className={styles.circle}><CheckMark className={styles.svg} /></span></span>
                                            {/* <span className={styles.text}>Допустимое значение</span> */}
                                        </div>
                                    </div>
                                    <Select className={styles.input} fullWidth options={[
                                        { value: 'small', label: 'До 10 сотрудников' }, 
                                        { value: 'middle', label: '10 - 100 сотрудников' }, 
                                        { value: 'big', label: 'Более 100 сотрудников' }
                                    ]}/>
                                    <div className={styles.description}>Конфигурация модулей.</div>
                                </section>
                            </div>
                            <Plans />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
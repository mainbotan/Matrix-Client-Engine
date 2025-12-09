import clsx from 'clsx';
import styles from './page.module.scss';
import Clients from '@/assets/ui-kit/icons/clients';
import Kanban from '@/assets/ui-kit/icons/kanban';
import Plus from '@/assets/ui-kit/icons/plus';
import Source from '@/assets/ui-kit/icons/source';
import Wallet from '@/assets/ui-kit/icons/wallet';

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
                            <div className={styles.block}>
                                <div className={styles.start}>
                                    <div className={styles.icon}>
                                        <span style={{backgroundImage: 'url(https://avatars.githubusercontent.com/u/132403496?v=4)'}} className={styles.circle} />
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Client X Y Z</div>
                                        <div className={styles.description}>Создано 08.12.2025</div>
                                    </div>
                                </div>
                                <div className={styles.center}>
                                    <div className={styles.comment}>
                                        Модальных окошек? Траверса к царге на футорку...
                                        Вопрос НЕ риторический. Вложены не малые деньги для вывода компании на рынок, информацию люди ищут на сайте, уже идут обращения! Встречают по одёжке , а у нас всё криво. Задача сайта рассказать о производстве и товарах и вызвать желание купить!
                                        Как мы можем говорить о серьезности нашего предприятия если вид настроить не можем. 
                                        Работы по 1С не видны и совсем не волнуют посетителей, а их не мало, я не случайно спрашивал про счётчик.

                                        <div className={styles.by}>Добавлено <span className={styles.name}>ned.serafim@gmail.com</span></div>
                                    </div>
                                </div>
                                <div className={styles.sections}>
                                    <section className={styles.section}>
                                        <div className={styles.icon}><Source className={styles.svg} /></div>
                                        <div className={styles.info}>
                                            <div className={styles.capture}>Источник трафика</div>
                                            <div className={styles.text}>
                                                Авито: <span className={styles.name}>Главный аккаунт</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section className={styles.section}>
                                        <div className={styles.icon}><Wallet className={styles.svg} /></div>
                                        <div className={styles.info}>
                                            <div className={styles.capture}>Возможная выручка</div>
                                            <div className={styles.count}>
                                                <span className={styles.primary}>45 000</span>
                                                -
                                                <span className={styles.primary}>52 000</span>
                                                &#8381;
                                            </div>
                                        </div>
                                    </section>
                                    <section className={styles.section}>
                                        <div className={styles.icon}><div style={{backgroundImage: 'url(https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png)'}} className={styles.avatar} /></div>
                                        <div className={styles.info}>
                                            <div className={styles.capture}>Serafim</div>
                                            <div className={styles.text}>
                                                ned.serafim@gmail.com
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className={styles.flags}>
                                    <span className={clsx(styles.flag, styles.normal)}>Ожидает</span>
                                    <span className={clsx(styles.flag, styles.critical)}>Критично</span>
                                    <span className={clsx(styles.flag, styles.problem)}>Проблема</span>
                                    <span className={clsx(styles.flag, styles.good)}>Хорошо</span>
                                </div>
                            </div>
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
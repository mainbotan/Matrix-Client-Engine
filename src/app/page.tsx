import Cube from '@/assets/ui-kit/icons/cube';
import styles from './components/divorce/divorce.module.scss';
import clsx from 'clsx';
import Cloud from '@/assets/ui-kit/icons/cloud';
import Wallet from '@/assets/ui-kit/icons/wallet';
import Plus from '@/assets/ui-kit/icons/plus';
import TwoCards from '@/assets/ui-kit/icons/two-cards';
import Keyhole from '@/assets/ui-kit/icons/keyhole';
import Team from '@/assets/ui-kit/icons/team';
import Code from '@/assets/ui-kit/icons/code';
import Id from '@/assets/ui-kit/icons/id';
import Themization from '@/assets/ui-kit/icons/themization';
import Settings from '@/assets/ui-kit/icons/settings';
import Server from '@/assets/ui-kit/icons/server';
import Book from '@/assets/ui-kit/icons/book';
import Switch from '@/assets/ui-kit/switch/switch';
import Button from '@/assets/ui-kit/button/button';

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.focus}>
                <div className={styles.media}>
                    <div className={styles.icon}>
                        <Cube className={styles.svg} />
                    </div>
                </div>
                <div className={styles.top}>
                    <div className={styles.capture}>Рабочее пространство</div>
                    <div className={styles.description}>
                        Собрали для вас вспомогательные разделы и действия, которые помогут
                        быстро привыкнуть к Matrix.
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.sections}>
                        <div className={styles.col}>
                            <section className={styles.title}>
                                Впервые здесь?
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Plus className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Создание организации</div>
                                </span>
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <TwoCards className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Выбор тарифа</div>
                                </span>
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Keyhole className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Разграничение доступа</div>
                                </span>
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Team className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Приглашение сотрудников</div>
                                </span>
                            </section>
                        </div>
                        <div className={styles.col}>
                            <section className={styles.title}>
                                Аккаунт
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Id className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Управление аккаунтом</div>
                                </span>
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Themization className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Настройка окружения</div>
                                </span>
                            </section>
                        </div>
                        <div className={styles.col}>
                            <section className={styles.title}>
                                Дополнительно
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Book className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Документация</div>
                                </span>
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Code className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>DEV Platform</div>
                                </span>
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Wallet className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Ценообразвание тарифов</div>
                                </span>
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Settings className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Сторонним разработчикам</div>
                                </span>
                            </section>
                            <section className={styles.section}>
                                <span className={styles.icon}>
                                    <Server className={styles.svg} />
                                </span>
                                <span className={styles.info}>
                                    <div className={styles.name}>Использование ресурсов</div>
                                </span>
                            </section>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.actions}>
                    <div className={styles.action}>
                        <div className={styles.icon}>
                            <Plus className={styles.svg} />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>Создать новую организацию</div>
                            <div className={styles.description}>Тестовый период на 7 дней</div>
                        </div>
                        <div className={styles.steps}>
                            <Button variant='accent' className={styles.step}>Создать</Button>
                        </div>
                    </div>
                </div> */}
                <div className={styles.guide}>
                    <div className={styles.preview}>
                    </div>
                    <div className={styles.base}>
                        <div className={styles.capture}>
                            Использовать гид ознакомления - <span className={styles.secondary}>при наведении на важные элементы интерфейса будем показывать их предназначение.</span>
                        </div>
                        <div className={styles.action}>
                            <Switch className={styles.switch} variant='accent' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
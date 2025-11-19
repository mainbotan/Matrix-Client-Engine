'use client';

import { useRouter } from 'next/navigation';
import Arrow from '@/assets/ui-kit/icons/arrow';
import styles from './page.module.scss';
import Textarea from '@/assets/ui-kit/textarea/textarea';
import clsx from 'clsx';
import Close from '@/assets/ui-kit/icons/close';
import Button from '@/assets/ui-kit/button/button';
import Input from '@/assets/ui-kit/input/input';
import Upload from '@/assets/ui-kit/icons/upload';
import { Calendar } from './load-block/calendar/calendar';
import { LoadDynamics } from './load-block/load-dynamics/load-dynamics';
import { LoadBlock } from './load-block/load-block';
import Select from '@/assets/ui-kit/select/select';
import { Message } from '@/app/components/message/message';
import { useMessage } from '@/app/components/message/context';

export default function Page() {
    const router = useRouter();
    const { showMessage } = useMessage();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.back}>
                    <div className={styles.circle} onClick={handleBackClick}>
                        <Arrow className={styles.svg} />
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>Виталий Сергеевич <span className={styles.secondary}>0x12391-kfna-32323</span></div>
                </div>
            </div>
            <div className={styles.content}>
                <section><LoadBlock /></section>
                <section className={styles.section}>
                    <div className={styles.capture}>Имя</div>
                    <Input variant='leader' fullWidth className={styles.input} placeholder='' value='Виталий Сергеевич' />
                </section>
                <section className={clsx(styles.section, styles.row)}>
                    <div className={styles.info}>
                        <div className={styles.capture}>Тип</div>
                        <div className={styles.description}>Условия наёма</div>
                    </div>
                    <Select variant='leader' className={styles.input} options={[ {value: 'Постоянный', label: 'Постоянный'}, {value: 'Наёмный / Аутсорс', label: 'Наёмный / Аутсорс'} ]} />
                </section>
                <section className={styles.section}>
                    <div className={styles.capture}>Почта</div>
                    <div className={styles.description}>Сотрудник сможет авторизоваться по данной почте, предварительно её подтвердив.</div>
                    <Input variant='leader' fullWidth className={styles.input} placeholder='' />
                    <div className={styles.extraActions}>
                        <Button variant='contrast' className={styles.action}>Выслать приглашение. <span className={styles.secondary}>2 / 5</span></Button>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.capture}>Описание</div>
                    <div className={styles.description}>До 3000 символов</div>
                    <Textarea variant='leader' fullWidth className={styles.textarea} placeholder='' />
                </section>
                <section className={clsx(styles.section, styles.permissions)}>
                    <div className={styles.capture}>Отдел / группа</div>
                    <div className={styles.description}>Сотрудник может состоять сразу в нескольких отделах.</div>
                    <div className={styles.search}>
                        <Input className={styles.input} variant='leader' placeholder='Название или ID отдела.' />
                        <div className={clsx(styles.modal)}>
                            <div className={styles.grid}>
                                <div className={styles.item}>
                                    <div className={styles.title}>Разработка</div>
                                    <div className={styles.description}>Разработка внутренних инструментов...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.activePermissions}>
                        <div className={styles.permission}>
                            <div className={styles.info}>
                                <div className={styles.id}>Разработка</div>
                                <div className={styles.about}>Разработка внутренних инструментов...</div>
                            </div>
                            <div className={styles.actions}>
                                <Button variant='leader' className={styles.action}>Выгнать</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={clsx(styles.section, styles.permissions)}>
                    <div className={styles.capture}>Роли</div>
                    <div className={styles.description}>Сотрудник может выполнять сразу несколько ролей.</div>
                    <div className={styles.search}>
                        <Input className={styles.input} variant='leader' placeholder='Название или ID роли' />
                        <div className={clsx(styles.modal)}>
                            <div className={styles.grid}>
                                <div className={styles.item}>
                                    <div className={styles.title}>Менеджер</div>
                                    <div className={styles.description}>Администрация сделок...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.activePermissions}>
                        <div className={styles.permission}>
                            <div className={styles.info}>
                                <div className={styles.id}>Менеджер</div>
                                <div className={styles.about}>Администрация сделок...</div>
                            </div>
                            <div className={styles.actions}>
                                <Button variant='leader' className={styles.action}>Удалить</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={clsx(styles.section, styles.permissions)}>
                    <div className={styles.capture}>Уникальные разрешения</div>
                    <div className={styles.description}>На случай, если сотруднику нужны специфичные разрешения.</div>
                    <div className={styles.search}>
                        <Input className={styles.input} variant='leader' placeholder='Название или ID разрешения' />
                        <div className={clsx(styles.modal)}>
                            <div className={styles.grid}>
                                <div className={styles.item}>
                                    <div className={styles.title}>deals.create</div>
                                    <div className={styles.description}>Создание мастер-сделок</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.activePermissions}>
                        <div className={styles.permission}>
                            <div className={styles.info}>
                                <div className={styles.id}>analysis.reports.create</div>
                                <div className={styles.about}>Создание отчётов</div>
                            </div>
                            <div className={styles.actions}>
                                <Button variant='leader' className={styles.action}>Удалить</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={clsx(styles.section, styles.documents)}>
                    <div className={styles.capture}>Документы</div>
                    <div className={styles.description}>Резюме, подтверждения выплат...</div>
                    <div className={styles.upload}>
                        <Upload className={styles.icon} />
                        <div className={styles.text}>Загрузить</div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <div className={styles.info}>
                                <div className={styles.title}>Выплата зарплаты 01.10.2025 - 01.11.2025</div>
                                <div className={styles._meta}>Загружено 1 декабря, 2025 г.</div>
                            </div>
                            <div className={styles.actions}>
                                <Button className={styles.action} variant='contrast'>Открыть</Button>
                                <Button className={clsx(styles.action, styles.delete)}>Удалить</Button>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.info}>
                                <div className={styles.title}>Резюме</div>
                                <div className={styles._meta}>Загружено 19 ноября, 2025 г.</div>
                            </div>
                            <div className={styles.actions}>
                                <Button className={styles.action} variant='contrast'>Открыть</Button>
                                <Button className={clsx(styles.action, styles.delete)}>Удалить</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={clsx(styles.section, styles.dangerZone)}>
                    <section className={styles.row}>
                        <div className={styles.info}>
                            <div className={styles.capture}>Уволить сотрудника</div>
                            <div className={styles.description}>
                                Сотрудник выйдет из всех команд, потеряет все роли, разрешения и доступ к аккаунту компании, не будет участвовать в отчётах и статистике.
                                <br /><br />
                                Увольнение сопровождается письмом на почту сотрудника о потере доступа к аккаунту.
                                <br /><br />
                                Восстановление доступно в любое время.
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <Button variant='contrast' onClick={() => showMessage('Сотрудник уволен', 'default')} className={styles.action}>Уволить</Button>
                        </div>
                    </section>
                </section>
            </div>
        </div>
        </>
    );
}
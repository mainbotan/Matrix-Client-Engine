'use client';

import Arrow from '@/assets/ui-kit/icons/arrow';
import styles from './page.module.scss';
import Container from "@/app/components/container/container";
import clsx from 'clsx';
import MatrixOverlay from './matrix-overlay/matrix-overlay';

export default function Page() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.focus}>
                    <div className={styles.title}>Приятной работы, <span className={styles.secondary}>Игорь</span></div>
                    <div className={styles.topics}>
                        <div className={styles.capture}>Часто используете</div>
                        <div className={styles.items}>
                                <div className={clsx(styles.topic, styles.contrast)}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Клиенты</div>
                                        <div className={styles._meta}>Смотрите текущее состояние клиентской базы.</div>
                                    </div>
                                    <div className={styles.actions}>
                                        <div className={styles.action}><Arrow className={styles.svg} /></div>
                                    </div>
                                </div>
                                <div className={styles.topic}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Клиенты</div>
                                        <div className={styles._meta}>Смотрите текущее состояние клиентской базы.</div>
                                    </div>
                                    <div className={styles.actions}>
                                        <div className={styles.action}><Arrow className={styles.svg} /></div>
                                    </div>
                                </div>
                                <div className={styles.topic}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Клиенты</div>
                                        <div className={styles._meta}>Смотрите текущее состояние клиентской базы.</div>
                                    </div>
                                    <div className={styles.actions}>
                                        <div className={styles.action}><Arrow className={styles.svg} /></div>
                                    </div>
                                </div>
                                <div className={styles.topic}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Клиенты</div>
                                        <div className={styles._meta}>Смотрите текущее состояние клиентской базы.</div>
                                        <div className={styles.link}>
                                            <span className={styles.text}>Что нового в версии 2.4x</span>
                                            <span className={styles.icon}><Arrow className={styles.svg} /></span>
                                        </div>
                                    </div>
                                    <div className={styles.actions}>
                                        <div className={styles.action}><Arrow className={styles.svg} /></div>
                                    </div>
                                </div>
                                <div className={styles.topic}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Клиенты</div>
                                        <div className={styles._meta}>Смотрите текущее состояние клиентской базы.</div>
                                    </div>
                                    <div className={styles.actions}>
                                        <div className={styles.action}><Arrow className={styles.svg} /></div>
                                    </div>
                                </div>
                                <div className={styles.topic}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Клиенты</div>
                                        <div className={styles._meta}>Смотрите текущее состояние клиентской базы.</div>
                                    </div>
                                    <div className={styles.actions}>
                                        <div className={styles.action}><Arrow className={styles.svg} /></div>
                                    </div>
                                </div>
                                <div className={styles.topic}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Клиенты</div>
                                        <div className={styles._meta}>Смотрите текущее состояние клиентской базы.</div>
                                    </div>
                                    <div className={styles.actions}>
                                        <div className={styles.action}><Arrow className={styles.svg} /></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className={styles.widgets}>
                        <div className={styles.grid}>
                            <div className={clsx(styles.widget, styles.positive)}>
                                <div className={styles.indicator} />
                                <div className={styles.content}>
                                    <div className={clsx(styles.value, styles.sm)}>1 220 234 <span className={styles.secondary}>&#8381;</span></div>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Принесли продажи</div>
                                        <div className={styles._meta}>За последний месяц</div>
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(styles.widget, styles.negative)}>
                                <div className={styles.indicator} />
                                <div className={styles.content}>
                                    <div className={styles.value}>400</div>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Сделок обработано</div>
                                        <div className={styles._meta}>За последний месяц</div>
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(styles.widget, styles.stagnation)}>
                                <div className={styles.indicator} />
                                <div className={styles.content}>
                                    <div className={styles.value}>29</div>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Новых клиентов</div>
                                        <div className={styles._meta}>За последний месяц</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.matrix}>
                        <div className={styles.block}><MatrixOverlay /></div>
                    </div>
                </div>
            </div>
        </>
    );
}
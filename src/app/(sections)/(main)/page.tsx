'use client';

import Arrow from '@/assets/ui-kit/icons/arrow';
import styles from './page.module.scss';
import Container from "@/app/components/container/container";
import clsx from 'clsx';

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
                </div>
            </div>
        </>
    );
}
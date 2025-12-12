import Button from '@/assets/ui-kit/button/button';
import styles from './page.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import Input from '@/assets/ui-kit/input/input';
import Keyhole from '@/assets/ui-kit/icons/keyhole';

// Функция для генерации точек
const generatePoints = () => {
    const activeCount = Math.floor(Math.random() * 15); // 0-14
    
    return Array.from({ length: 14 }, (_, index) => (
        <span
            key={index}
            className={clsx(
                styles.point,
                index < activeCount && styles.active
            )}
        />
    ));
};

export default function Page() {
    const itemsCount = 9;

    return (
        <div className={styles.container}>
            <div className={styles.focus}>
                <div className={styles.search}>
                    <Input className={styles.input} variant='default' fullWidth placeholder='Название или ID организации' />
                </div>
                <div className={styles.items}>
                    {Array.from({ length: itemsCount }, (_, index) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.base}>
                                <div className={styles.icon}>
                                    <div className={styles.square} style={{ backgroundImage: 'url(https://avatars.mds.yandex.net/i?id=e2d18d9333d5c26e044d19c9df0218d803ee062ab3de4165-5236580-images-thumbs&n=13)' }}></div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.name}>Platform {index + 1}</div>
                                    <div className={styles.description}>
                                        Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inter}><span className={styles.line} /></div>
                            <div className={styles.tariff}>
                                <div className={styles.capture}>Enter+ <span className={styles.trial}>Пробный период</span></div>
                                <div className={styles.period}>
                                    {generatePoints()}
                                </div>
                            </div>
                            <div className={styles.inter}></div>
                            <div className={styles.access}>
                                <div className={styles.icon}>
                                    <span className={styles.square}><Keyhole className={styles.svg} /></span>
                                </div>
                                <div className={styles.info}>
                                    Вы являетесь владельцем.
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <Button className={styles.action} variant='default'>Продлить</Button>
                                <Link href='/organization/company-slug' className={styles.link}>
                                    <Button className={styles.action} variant='contrast' fullWidth>Открыть</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
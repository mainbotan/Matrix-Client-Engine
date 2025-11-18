import clsx from 'clsx';
import styles from './header.module.scss';
import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import Arrow from '@/assets/ui-kit/icons/arrow';
import Menu from '@/assets/ui-kit/icons/menu';
import Button from '@/assets/ui-kit/button/button';
import CheckMark from '@/assets/ui-kit/icons/check-mark';
import Link from 'next/link';
import Clients from '@/assets/ui-kit/icons/clients';
import Cloud from '@/assets/ui-kit/icons/cloud';

export default function Header() {
    return (
        <>
            <header className={styles.container}>
                <div className={styles.basic}>
                    <Link href='/' className={styles.logo}>Matrix</Link>
                    <div className={styles.inter}>/</div>
                    <div className={styles.info}>
                        <Link href='/company' className={styles.company}>
                            <span className={styles.title}>Easy Service</span>
                            <span className={styles.marker}>Организация</span>
                            {/* <div className={styles.action}><Cloud className={styles.svg} /></div> */}
                        </Link>
                    </div>
                    <div className={styles.actions}>
                        <Link href='/deals/create'><Button className={styles.action} variant='contrast' >Мастер-сделка</Button></Link>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.info}>
                            <span className={styles.name}>Гондон Ю.</span>
                        </div>
                        <div className={styles.avatar}>
                            <div className={styles.circle}></div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={styles.sections}>
                <div className={styles.grid}>
                    <Link href='/crm' className={clsx(styles.section, styles.active)}><span className={styles.title}>CRM</span></Link>
                    <section className={clsx(styles.section)}><span className={styles.title}>Сделки</span></section>
                    <section className={clsx(styles.section)}><span className={styles.title}>Финансы</span></section>
                    <section className={clsx(styles.section)}><span className={styles.title}>Документы</span></section>
                    <section className={clsx(styles.section)}><span className={styles.title}>Сотрудники</span></section>
                    <section className={clsx(styles.section)}><span className={styles.title}>Отчёты & Аналитика</span></section>
                </div>
            </div>
        </>
    );
}
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
import Input from '@/assets/ui-kit/input/input';

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
                    <div className={styles.search}><Input className={styles.input} variant='default' placeholder='Клиент, сделка, сотрудник, отчёт...' /></div>
                    <div className={styles.actions}>
                        <div className={clsx(styles.action, styles.compact)}><Cloud className={styles.svg} /></div>
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
                    <Link href='/deals' className={clsx(styles.section)}><span className={styles.title}>Сделки</span></Link>
                    <Link href='/finance' className={clsx(styles.section)}><span className={styles.title}>Финансы</span></Link>
                    <Link href='/documents' className={clsx(styles.section)}><span className={styles.title}>Документы</span></Link>
                    <Link href='/staff' className={clsx(styles.section)}><span className={styles.title}>Сотрудники</span></Link>
                    <Link href='/analysis' className={clsx(styles.section)}><span className={styles.title}>Отчёты & Аналитика</span></Link>
                </div>
            </div>
        </>
    );
}
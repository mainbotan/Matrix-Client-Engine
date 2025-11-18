'use client';

import Empty from '@/assets/ui-kit/icons/empty';
import styles from './search-plug.module.scss';

export default function SearchPlug() {
    return (
       <div className={styles.container}>
        <Empty className={styles.icon} />
        <div className={styles.capture}>Ничего не найдено</div>
       </div>  
    );
}
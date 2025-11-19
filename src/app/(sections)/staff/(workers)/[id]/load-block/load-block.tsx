import { Calendar } from './calendar/calendar';
import styles from './load-block.module.scss';
import { LoadDynamics } from './load-dynamics/load-dynamics';

export function LoadBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.capture}>Нагрузка</div>
            <div className={styles.grid}>
                <div className={styles.item}><Calendar /></div>
                <div className={styles.item}><LoadDynamics /></div>
            </div>
        </div>  
    );
}
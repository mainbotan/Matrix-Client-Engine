import Cube from '@/assets/ui-kit/icons/cube';
import styles from './components/loading/canvas.module.scss';
import clsx from 'clsx';

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.focus}>
                <Cube className={clsx(styles.icon, styles.increase)} />
            </div>
        </div>        
    )
}
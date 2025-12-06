import Spinner from '@/assets/ui-kit/spinner/spinner';
import styles from './components/loading/canvas.module.scss';

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.focus}>
                <Spinner variant='brand' size='md' className={styles.spinne} />
            </div>
        </div>
    );
}
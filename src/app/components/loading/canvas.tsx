import Spinner from '@/assets/ui-kit/spinner/spinner';
import styles from './canvas.module.scss';

export function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.focus}>
                <Spinner variant='brand' size='md' className={styles.spinner} />
            </div>
        </div>
    )
}
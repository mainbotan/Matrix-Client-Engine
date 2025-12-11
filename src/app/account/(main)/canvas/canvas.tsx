import styles from './canvas.module.scss';

export function Canvas() {
    return (
        <div className={styles.container}>
            <span className={styles.square} />
            <span className={styles.square} />
            <span className={styles.square} />
            <span className={styles.square} />
            <span className={styles.square} />
            <span className={styles.square} />
            <span className={styles.square} />
            <span className={styles.square} />
        </div>
    )
}
// rays.tsx
import styles from './rays.module.scss';

export default function Rays() {
    return (
        <svg 
            className={styles.rays} 
            viewBox="0 0 648 332" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Переупорядочиваем лучи от левого нижнего к правому нижнему */}
            <path className={styles.ray14} d="M324 332L0 332" />
            <path className={styles.ray12} d="M324 332L0 249" />
            <path className={styles.ray10} d="M324 332L0 166" />
            <path className={styles.ray8} d="M324 332L0 83" />
            <path className={styles.ray6} d="M324 332L108 0" />
            <path className={styles.ray4} d="M324 332L216 0" />
            <path className={styles.ray1} d="M324 332V0" />
            <path className={styles.ray5} d="M324 332L432 0" />
            <path className={styles.ray7} d="M324 332L540 0" />
            <path className={styles.ray9} d="M324 332L648 83" />
            <path className={styles.ray11} d="M324 332L648 166" />
            <path className={styles.ray13} d="M324 332L648 249" />
            <path className={styles.ray15} d="M324 332L648 332" />
        </svg>
    )
}
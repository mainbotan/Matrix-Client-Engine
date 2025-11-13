import { ReactNode } from 'react';
import styles from './matrix-overlay.module.scss';
import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import Rays from './rays/rays';

export default function MatrixOverlay() {
  return (
    <div className={styles.overlay}>
        <div className={styles.canvas}>
            <div className={styles.matrix}><MatrixFullLogo /></div>
            <div className={styles.title}>Что нового в версии <span className={styles.contrast}>2.3x?</span></div>
            <div className={styles.overview}>
                В сентябре 2025 года Matrix получил мажорное обновление версии 2.3x. Что из нового?
                <br /><br /> 
                Разделение по филиалам на уровне всей компании, unit-анализ сделок, графики посещаемости сотрудников 
                и многое другое. Улучшена производительность шардирования и расширен функционал бесплатного тарифного плана.
                <br /><br />
                <span className={styles.link}>Читайте больше</span> и будьте в курсе новых событий в экосистеме Matrix.
            </div>
        </div>
        <Rays />
    </div>
  );
}
import Arrow from '@/assets/ui-kit/icons/arrow';
import styles from './calendar.module.scss';
import clsx from 'clsx';

export function Calendar() {
  // Создаем массив из 31 элемента
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  
  // Функция для получения случайного класса
  const getRandomClass = () => {
    const random = Math.random();
    if (random < 0.33) return `${styles.day}`;
    if (random < 0.53) return `${styles.day} ${styles.min}`;
    if (random < 0.76) return `${styles.day} ${styles.mid}`;
    return `${styles.day} ${styles.max}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.control}>
        <span className={clsx(styles.action, styles.left)}><Arrow className={styles.svg} /></span>
        <span className={styles.title}>Ноябрь, 2025</span>
        <span className={clsx(styles.action, styles.right)}><Arrow className={styles.svg} /></span>
      </div>
      <div className={styles.calendar}>
        {days.map((day) => (
          <div 
            key={day} 
            className={getRandomClass()} 
          />
        ))}
        <div className={clsx(styles.day, styles.max, styles.active)} />
      </div>
      <div className={styles.current}>
        {/* <div className={styles.plug}>Выберите день для просмотра рабочего времени сотрудника</div> */}
        <div className={styles.date}>19 ноября, 2025</div>
        <div className={clsx(styles.hours, styles.normal)}>8 <span className={styles.secondary}>часов</span></div>
        <div className={styles.deviation}>отклонение от нормы - <span className={clsx(styles.primary, styles.positive)}>+2 часа</span></div>
        <div className={styles._meta}>Отмечено сотрудником</div>
      </div>
    </div>  
  );
}
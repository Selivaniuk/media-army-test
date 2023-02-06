import styles from "./index.module.scss";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <p className={styles.title}>Отзывы пользователей об Автоцентре</p>
          <div className={styles.avgBlock}>
            <p className={styles.avgValue}>4.6</p>
            <p className={styles.avgText}>Средняя оценка</p>
          </div>
        </div>
        <ReviewCard />
      </div>
    </div>
  );
};
export default Reviews;

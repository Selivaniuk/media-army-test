import styles from "./index.module.scss";
import LogoCarousel from "./LogoCarousel";

const OurDirection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Обслуживаем и ремонтируем</p>
      <LogoCarousel />
    </div>
  );
};
export default OurDirection;

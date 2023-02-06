import { motion } from "framer-motion";
import { motion_params, variants_bot_to_top } from "utils/framer_utils";
import styles from "./index.module.scss";

const MainAdvantage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.subTitle}>Главное преимущество компании</p>
        <p className={styles.one}>#1</p>
      </div>
      <motion.div
        {...motion_params}
        viewport={{ amount: 0.3, once: true }}
        className={styles.bottom}
      >
        <motion.p
          custom={1}
          variants={variants_bot_to_top}
          className={styles.title}
        >
          Работаем с 2012 года
        </motion.p>
        <motion.p
          custom={2}
          variants={variants_bot_to_top}
          className={styles.description}
        >
          Вашим автомобилем будут заниматься люди с большим опытом, полученным
          за многие годы и прошедшие множество обучений.
          <br />
          <br /> Сотрудники обладают огромным багажом знаний, применяемых на
          практике.
        </motion.p>
      </motion.div>
    </div>
  );
};
export default MainAdvantage;

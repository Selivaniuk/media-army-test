import { Button, Icons, ImageSlider } from "ui";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import {
  motion_params,
  variants_bot_to_top,
  variants_left_to_right,
} from "utils/utils";

const slides = [
  {
    alt: "slide_1",
    src: "/img/SliderImage1.jpg",
  },
  {
    alt: "slide_2",
    src: "/img/SliderImage2.jpg",
  },
  {
    alt: "slide_3",
    src: "/img/SliderImage3.jpg",
  },
];

const MainScreen = () => {
  return (
    <div className={styles.container}>
      <motion.div {...motion_params} className={styles.info}>
        <motion.p
          custom={1}
          variants={variants_bot_to_top}
          className={styles.title}
        >
          Специализированный Автосервис
        </motion.p>
        <motion.p
          custom={2}
          variants={variants_bot_to_top}
          className={styles.number}
        >
          +7 (999) 123-45-67
        </motion.p>
        <div className={styles.addresses}>
          <motion.div
            custom={3}
            variants={variants_left_to_right}
            className={styles.address}
          >
            <p className={styles.label}>Работаем для вас:</p>
            <p className={styles.value}>Ежедневно с 9:00 до 21:00</p>
          </motion.div>
          <motion.div
            custom={4}
            variants={variants_left_to_right}
            className={styles.address}
          >
            <p className={styles.label}>По адресу:</p>
            <p className={styles.value}>
              Екатеринбург, ул. Московский тракт 7 км, 2
            </p>
          </motion.div>
        </div>
        <motion.span custom={5} variants={variants_left_to_right}>
          <Button
            className={styles.button}
            type="filled-light"
            icon={<Icons.ArrowDown />}
          >
            Смотреть услуги
          </Button>
        </motion.span>
      </motion.div>
      <div className={styles.slider}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default MainScreen;

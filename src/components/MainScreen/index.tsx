import { Button, Icons, ImageSlider } from "ui";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

const variants_title = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const variants_description = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={styles.container}
    >
      <div className={styles.info}>
        <motion.p custom={1} variants={variants_title} className={styles.title}>
          Специализированный Автосервис
        </motion.p>
        <motion.p
          custom={2}
          variants={variants_title}
          className={styles.number}
        >
          +7 (999) 123-45-67
        </motion.p>
        <div className={styles.addresses}>
          <motion.div
            custom={3}
            variants={variants_description}
            className={styles.address}
          >
            <p className={styles.label}>Работаем для вас:</p>
            <p className={styles.value}>Ежедневно с 9:00 до 21:00</p>
          </motion.div>
          <motion.div
            custom={4}
            variants={variants_description}
            className={styles.address}
          >
            <p className={styles.label}>По адресу:</p>
            <p className={styles.value}>
              Екатеринбург, ул. Московский тракт 7 км, 2
            </p>
          </motion.div>
        </div>
        <motion.span custom={5} variants={variants_description}>
          <Button
            className={styles.button}
            type="filled-light"
            icon={<Icons.ArrowDown />}
          >
            Смотреть услуги
          </Button>
        </motion.span>
      </div>
      <div className={styles.slider}>
        <ImageSlider slides={slides} />
      </div>
    </motion.div>
  );
};

export default MainScreen;

import { AnimatedText, Button, Icons, ImageSlider } from "ui";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { motion_params, variants_left_to_right } from "utils/utils";
import { servicesRef } from "components/Services";
import SliderImage1 from "assets/img/Slider/SliderImage1.jpg";
import SliderImage2 from "assets/img/Slider/SliderImage2.jpg";
import SliderImage3 from "assets/img/Slider/SliderImage3.jpg";

const slides = [
  {
    alt: "slide_1",
    src: SliderImage1,
  },
  {
    alt: "slide_2",
    src: SliderImage2,
  },
  {
    alt: "slide_3",
    src: SliderImage3,
  },
];

const MainScreen = () => {
  const executeScroll = () =>
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className={styles.container}>
      <motion.div {...motion_params} className={styles.info}>
        <AnimatedText
          className={styles.title}
          text="Специализированный Автосервис"
        />
        <AnimatedText
          className={styles.number}
          delay={0.6}
          staggerChildren={0}
          text="+7 (999) 123-45-67"
        />
        {/* <motion.p
          custom={2}
          variants={variants_bot_to_top}
          className={styles.number}
        >
          
        </motion.p> */}
        <div className={styles.addresses}>
          <motion.div
            custom={4}
            variants={variants_left_to_right}
            className={styles.address}
          >
            <p className={styles.label}>Работаем для вас:</p>
            <p className={styles.value}>Ежедневно с 9:00 до 21:00</p>
          </motion.div>
          <motion.div
            custom={5}
            variants={variants_left_to_right}
            className={styles.address}
          >
            <p className={styles.label}>По адресу:</p>
            <p className={styles.value}>
              Екатеринбург, ул. Московский тракт 7 км, 2
            </p>
          </motion.div>
        </div>
        <motion.span custom={6} variants={variants_left_to_right}>
          <Button
            onClick={executeScroll}
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

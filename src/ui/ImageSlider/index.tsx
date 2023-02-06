import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useInterval } from "hooks/useInterval";
import { Icons } from "ui";
import Button from "ui/Button";
import styles from "./index.module.scss";

const variants: Variants = {
  initial: (custom: number) => ({
    x: `calc(100% * ${custom})`,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      // x: { type: "spring", stiffness: 300, damping: 20 },
      ease: "easeIn",
    },
  },
  exit: (custom: number) => ({
    x: `calc(-100% * ${custom})`,
    opacity: 0,
    transition: {
      // x: { type: "spring", stiffness: 300, damping: 20 },
      ease: "easeIn",
    },
  }),
};

type Slide = {
  src: string;
  alt: string;
};
type PropsType = {
  slides: Slide[];
};
const ImageSlider: React.FC<PropsType> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>();

  const currentSlide = slides[currentIndex];

  useInterval(
    () => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
      setDirection(1);
    },
    isPaused ? null : 5000
  );

  useEffect(() => {
    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 2000);
    } else if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [isPaused]);

  const handleClickArrow = (isLeft?: boolean) => {
    if (isLeft) {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setDirection(-1);
    } else {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setDirection(1);
    }

    setIsPaused(true);
  };
  return (
    <div className={styles.slider}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          custom={direction}
          key={currentSlide.src}
          src={currentSlide.src}
          alt={currentSlide.alt}
          className={styles.slides}
        />
      </AnimatePresence>
      <p className={styles.info}>
        {currentIndex + 1}/{slides.length}
      </p>
      <div className={styles.arrows}>
        <Button
          onClick={() => handleClickArrow(true)}
          icon={<Icons.ArrowLeft />}
        />
        <Button
          onClick={() => handleClickArrow(false)}
          icon={<Icons.ArrowRight />}
        />
      </div>
    </div>
  );
};
export default ImageSlider;

import classNames from "classnames";
import { useInterval } from "hooks/useInterval";
import { useEffect, useRef, useState } from "react";
import { Icons } from "ui";
import Button from "ui/Button";
import styles from "./index.module.scss";

type Slide = {
  src: string;
  alt: string;
};
type PropsType = {
  slides: Slide[];
};
const ImageSlider: React.FC<PropsType> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>();

  useInterval(
    () => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
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
    setCurrentIndex((prev) =>
      isLeft
        ? prev === 0
          ? 0
          : prev - 1
        : prev < slides.length - 1
        ? prev + 1
        : prev
    );
    setIsPaused(true);
  };
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {slides.map((slide, i) => (
          <div
            key={slide.alt}
            className={classNames([
              styles.slide,
              { [styles.activeSlide]: currentIndex === i },
            ])}
          >
            <img className={styles.image} src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
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

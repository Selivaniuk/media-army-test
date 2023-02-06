import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Icons, Link } from "ui";
import styles from "./index.module.scss";

import Promotion_1 from "assets/img/Promotions/Promotion_1.jpg";
import Promotion_2 from "assets/img/Promotions/Promotion_2.jpg";
const data = [
  {
    name: "Дарим 1000 бонусов за шиномонтаж и хранение",
    date: "11 апреля",
    src: Promotion_1,
  },
  {
    name: "Специальное предложение для владельцев VOLVO XC 90",
    date: "18 ноября",
    src: Promotion_2,
  },
];
const motionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};
const PromotionCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentData = data[currentIndex];

  const handleClickArrow = (isLeft?: boolean) => {
    setCurrentIndex((prev) =>
      isLeft
        ? prev === 0
          ? data.length - 1
          : prev - 1
        : prev === data.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <AnimatePresence initial={true} mode="popLayout">
      <div key={"PromotionCard" + currentIndex} className={styles.card}>
        <div className={styles.imageContainer}>
          <motion.img
            {...motionProps}
            src={currentData.src}
            alt="PromotionCard"
          />
          <div className={styles.arrows}>
            <Button
              onClick={() => handleClickArrow(false)}
              icon={<Icons.ChevronLeft />}
            />
            <Button
              onClick={() => handleClickArrow(true)}
              icon={<Icons.ChevronRight />}
            />
          </div>
        </div>
        <div className={styles.info}>
          <motion.p {...motionProps} className={styles.title}>
            {currentData.name}
          </motion.p>
          <motion.p {...motionProps} className={styles.date}>
            {currentData.date}
          </motion.p>
          <Link icon={<Icons.ChevronRight />} to="#">
            Подробнее
          </Link>
          <div className={styles.desktopArrows}>
            <Button
              onClick={() => handleClickArrow(false)}
              type="outline-dark"
              icon={<Icons.ChevronLeft />}
            />
            <Button
              onClick={() => handleClickArrow(true)}
              type="outline-dark"
              icon={<Icons.ChevronRight />}
            />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default PromotionCard;

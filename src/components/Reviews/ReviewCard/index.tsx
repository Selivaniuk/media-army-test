import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button, Icons } from "ui";
import styles from "./index.module.scss";

const motionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const data = [
  {
    username: "butyl1n_i",
    date: "23 декабря 2020",
    stars: 4,
    comment:
      "Решил убить сразу несколько зайцев, и пока гуляли с женой по меге оставил свою Volvo на диагностику в данном центре. Знаю что меняли ранее в другом центре, и что уже нужно было поменять. В этом центре лишнего не насчитали, проблемы нашли. В следующий раз приеду уже за полным ТО.",
  },
  {
    username: "butyl1n_i",
    date: "23 декабря 2020",
    stars: 5,
    comment:
      "Отличный сервис. Спасибо большое менеджеру Александру, помог и разъяснил (грамотно). Самое главное нашел причину и устранил . Не первый раз обращаюсь и пока всем доволен (обращался 01.06.2018г). Немного о самом сервисе. Клиентская зона на твердую 5 . Есть чай и кофе, и пока делают машину, можно занять себя просмотром телевизора. Сама зона просматривается сквозь стекла . Так что можно всегда посмотреть , на какой стадии ремонт! За это я ставлю 5+.",
  },
];
const ReviewCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentData = data[currentIndex];

  const handleClickArrow = (isLeft?: boolean) => {
    setCurrentIndex((prev) =>
      isLeft
        ? currentIndex === 0
          ? data.length - 1
          : prev - 1
        : currentIndex === data.length - 1
        ? 0
        : prev + 1
    );
  };
  return (
    <AnimatePresence initial={false} mode="wait">
      <div key={"ReviewCard" + currentIndex} className={styles.card}>
        <div className={styles.top}>
          <div className={styles.user}>
            <motion.span {...motionProps} className={styles.avatar}>
              <Icons.UserCircle />
            </motion.span>
            <div className={styles.userInfo}>
              <motion.p {...motionProps} className={styles.username}>
                {currentData.username}
              </motion.p>
              <motion.p {...motionProps} className={styles.date}>
                {currentData.date}
              </motion.p>
              <motion.div className={styles.stars}>
                {Array(5)
                  .fill(0)
                  .map((_, i) =>
                    currentData.stars > i ? (
                      <Icons.StarsFilled
                        key={"arrow" + i}
                        className={classNames([styles.star, styles.activeStar])}
                      />
                    ) : (
                      <Icons.StarsOutline
                        key={"arrow" + i}
                        className={styles.star}
                      />
                    )
                  )}
              </motion.div>
            </div>
          </div>
          <div className={styles.arrows}>
            <Button
              type="outline-light"
              onClick={() => handleClickArrow(true)}
              icon={<Icons.ArrowLeft />}
            />
            <Button
              type="outline-light"
              onClick={() => handleClickArrow(false)}
              icon={<Icons.ArrowRight />}
            />
          </div>
        </div>
        <motion.p {...motionProps} className={styles.comment}>
          {currentData.comment}
        </motion.p>
      </div>
    </AnimatePresence>
  );
};

export default ReviewCard;

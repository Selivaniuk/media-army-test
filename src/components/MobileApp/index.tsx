import { Icons } from "ui";
import styles from "./index.module.scss";
import AppStore from "assets/img/Mobile/AppStore.png";
import GooglePlay from "assets/img/Mobile/GooglePlay.png";
import Iphone from "assets/img/Mobile/Iphone.png";

const texts = [
  "записаться на ремонт",
  "просмотреть историю обслуживания",
  "Получать постоянные акции и бонусы",
];
const MobileApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <img src={Iphone} alt="Iphone" />
      </div>
      <div className={styles.top}>
        <p className={styles.title}>Скачивайте наше мобильное приложение</p>
        <div className={styles.texts}>
          {texts.map((t) => (
            <div className={styles.textContainer}>
              <Icons.Check />
              <p>{t}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.markets}>
        <img src={AppStore} alt="AppStore" />
        <img src={GooglePlay} alt="GooglePlay" />
      </div>
    </div>
  );
};

export default MobileApp;

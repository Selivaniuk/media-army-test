import classNames from "classnames";
import { Button } from "ui";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.desktop_top}>
        <div className={styles.desktop_left}>
          <div className={styles.communication}>
            <div className={styles.contacts}>
              <p className={styles.mail}>info@avtoligaekb.ru</p>
              <p className={styles.time}>
                Работаем для вас:
                <br />
                Ежедневно с 9:00 до 21:00
              </p>
            </div>
            <div className={styles.buttons}>
              <Button type="filled-light" className={styles.button}>
                Обратный звонок
              </Button>
              <Button
                type="outline"
                className={classNames([styles.outlineButton, styles.button])}
              >
                Контроль качества
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.desktop_right}>
          <div></div>
        </div>
      </div>
      <div className={styles.desktop_bottom}></div>
    </footer>
  );
};

export default Footer;

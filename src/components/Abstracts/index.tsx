import { Icons } from "ui";
import styles from "./index.module.scss";

const Abstracts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.description}>
          Обратившись к нам, в автоцентр, вы окажетесь в надёжных руках
          специалистов послегарантийного ремонта и технического обслуживания
          автомобилей.
        </p>
        <p className={styles.text}>
          Чтобы автомобиль всегда оставался в отличной форме, необходимо
          выполнять регулярное ТО по программе рекомендованной производителем.
        </p>
        <p className={styles.text}>
          Подразделение нашей компании СЕРТИФИЦИРОВАННО - это позволяет
          производить обслуживание вашего автомобиля С СОХРАНЕНИЕМ ГАРАНТИИ.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.item}>
          <Icons.Security />
          <p>
            Гарантия работы
            <br />1 год
          </p>
        </div>
        <div className={styles.item}>
          <Icons.PeopleProfessional />
          <p>
            Квалифицированные
            <br />
            сотрудники
          </p>
        </div>
        <div className={styles.item}>
          <Icons.FoodAndDrinks />
          <p>
            Комфортные
            <br />
            зоны ожидания
          </p>
        </div>
        <div className={styles.item}>
          <Icons.VehiclesCar />
          <p>
            Современное <br />
            оборудование
          </p>
        </div>
      </div>
    </div>
  );
};
export default Abstracts;

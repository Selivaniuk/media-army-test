import { Button, Icons, ServiceCard } from "ui";
import styles from "./index.module.scss";

export const data = [
  {
    label: "Ремонт автомобиля",
    href: "repair",
    src: "/img/repair.jpg",
  },
  {
    label: "Плановое ТО",
    href: "inspection",
    src: "/img/inspection.jpg",
  },

  {
    label: "Диагностика и ремонт",
    href: "diagnostics",
    src: "/img/diagnostics.jpg",
  },
  {
    label: "Чип тюнинг",
    href: "tuning",
    src: "/img/tuning.jpg",
  },
];

const Services = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Услуги автосервиса</p>
      <div className={styles.cards}>
        {data.map(({ label, src, href }, i) => (
          <ServiceCard
            key={"ServiceCard" + href}
            index={i}
            label={label}
            src={src}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

import { createRef } from "react";
import { ServiceCard } from "ui";
import styles from "./index.module.scss";

import repair from "assets/img/Services/repair.jpg";
import inspection from "assets/img/Services/inspection.jpg";
import diagnostics from "assets/img/Services/diagnostics.jpg";
import tuning from "assets/img/Services/tuning.jpg";
export const data = [
  {
    label: "Ремонт автомобиля",
    href: "repair",
    src: repair,
  },
  {
    label: "Плановое ТО",
    href: "inspection",
    src: inspection,
  },

  {
    label: "Диагностика и ремонт",
    href: "diagnostics",
    src: diagnostics,
  },
  {
    label: "Чип тюнинг",
    href: "tuning",
    src: tuning,
  },
];
export const servicesRef = createRef<HTMLDivElement>();

const Services = () => {
  return (
    <div ref={servicesRef} className={styles.container}>
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

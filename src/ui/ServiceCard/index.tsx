import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { Button, Icons } from "ui";
import styles from "./index.module.scss";
import {
  motion_params,
  variants_left_to_right,
  variants_right_to_left,
} from "utils/framer_utils";

type PropsType = {
  src: string;
  label: string;
  index: number;
};

const ServiceCard: React.FC<PropsType> = ({ label, index, src }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      {...motion_params}
      viewport={{ amount: 0.3, once: true }}
      custom={index}
      variants={
        (index + 1) % 2 === 0 ? variants_right_to_left : variants_left_to_right
      }
      className={classNames([styles.card, { [styles.hovered]: hovered }])}
    >
      <img src={src} alt={label} />
      <div className={styles.bottom}>
        <div className={styles.name}>
          <p className={styles.label}>{label}</p>
          <p className={styles.index}>
            {index < 10 ? "0" : ""}
            {index + 1}
          </p>
        </div>
        <Button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={styles.button}
          icon={<Icons.ChevronRight />}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;

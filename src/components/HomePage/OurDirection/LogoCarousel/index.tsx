/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import useWindowDimensions from "hooks/useWindowDimensions";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { motion_params } from "utils/framer_utils";

import Audi from "assets/img/Logos/Audi.png";
import BMW from "assets/img/Logos/BMW.png";
import LandRover from "assets/img/Logos/LandRover.png";
import Mercedes from "assets/img/Logos/Mercedes.png";
import Porsche from "assets/img/Logos/Porsche.png";
import Skoda from "assets/img/Logos/Skoda.png";
import Volkswagen from "assets/img/Logos/Volkswagen.png";
import Volvo from "assets/img/Logos/Volvo.png";

const logos = [
  {
    alt: "Audi",
    src: Audi,
  },
  {
    alt: "BMW",
    src: BMW,
  },
  {
    alt: "LandRover",
    src: LandRover,
  },
  {
    alt: "Mercedes",
    src: Mercedes,
  },
  {
    alt: "Porsche",
    src: Porsche,
  },
  {
    alt: "Skoda",
    src: Skoda,
  },
  {
    alt: "Volkswagen",
    src: Volkswagen,
  },
  {
    alt: "Volvo",
    src: Volvo,
  },
];

const variants_right_to_left = {
  hidden: (custom: number) => ({
    x: custom - 100,
  }),
  visible: {
    x: 0,
    transition: { delay: 0.3, duration: 1 },
  },
};
const LogoCarousel = () => {
  const [logoSize, setLogoSize] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  const { width } = useWindowDimensions();

  const isDesktop = width > 1350;
  const isTablet = width < 1350 && width > 500;
  const logoOffset = isDesktop ? 50 : isTablet ? 30 : 20;

  const measuredRef = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null) {
        const { width, height } = node.getBoundingClientRect();
        setLogoSize({ width, height });
      }
    },
    [width]
  );

  return (
    <div
      {...events}
      ref={ref}
      style={{ height: logoSize.height }}
      className={styles.container}
    >
      <motion.div
        {...motion_params}
        custom={width}
        variants={variants_right_to_left}
        className={styles.logos}
      >
        {logos.map((logo, i) => (
          <div
            ref={measuredRef}
            style={{ left: i * (logoSize.width - logoOffset) + 5 }}
            key={"logoCarouselBlock" + logo.alt}
            className={styles.logo}
          >
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;

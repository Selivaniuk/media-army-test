import { useCallback, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import useWindowDimensions from "hooks/useWindowDimensions";
import styles from "./index.module.scss";

const logos = [
  {
    alt: "Audi",
    src: "/img/Logos/Audi.png",
  },
  {
    alt: "BMW",
    src: "/img/Logos/BMW.png",
  },
  {
    alt: "LandRover",
    src: "/img/Logos/LandRover.png",
  },
  {
    alt: "Mercedes",
    src: "/img/Logos/Mercedes.png",
  },
  {
    alt: "Porsche",
    src: "/img/Logos/Porsche.png",
  },
  {
    alt: "Skoda",
    src: "/img/Logos/Skoda.png",
  },
  {
    alt: "Volkswagen",
    src: "/img/Logos/Volkswagen.png",
  },
  {
    alt: "Volvo",
    src: "/img/Logos/Volvo.png",
  },
];

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
      <div className={styles.logos}>
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
      </div>
    </div>
  );
};

export default LogoCarousel;

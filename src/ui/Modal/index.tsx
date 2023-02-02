import classNames from "classnames";
import { useClickOutside } from "hooks/useClickOutside";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useCallback, useEffect, useState } from "react";
import { Icons } from "ui";
import Button from "ui/Button";
import styles from "./index.module.scss";

type PropsType = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

const Modal: React.FC<PropsType> = ({ visible, onClose, title, children }) => {
  const [width, setWidth] = useState(0);
  const dimensions = useWindowDimensions();

  const ref = useClickOutside(onClose);
  const measuredRef = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null && visible) {
        if (dimensions.width < 1350) {
          setWidth(dimensions.width);
        } else {
          setWidth(node.getBoundingClientRect().width);
        }
      }
    },
    [visible, dimensions.width]
  );
  useEffect(() => {
    if (!visible) {
      setWidth(0);
    }
  }, [visible]);
  return (
    <>
      <div
        className={classNames([
          styles.overlay,
          { [styles.visibleOverlay]: visible },
        ])}
      />
      <div
        className={classNames([
          styles.modalContainer,
          { [styles.visibleModal]: visible },
        ])}
        style={{ width }}
      >
        <div ref={ref} style={{ height: "100%" }}>
          <div ref={measuredRef} className={styles.modal}>
            <Button
              onClick={onClose}
              className={styles.close}
              icon={<Icons.Close />}
              rounded={false}
            />

            <div className={styles.content}>
              {title && <p className={styles.title}>{title}</p>}
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

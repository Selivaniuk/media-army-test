import classNames from "classnames";
import styles from "./index.module.scss";

type PropsType = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  type?: "filled" | "outline";
  size?: "small" | "large";
  rounded?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
};
const Button: React.FC<PropsType> = ({
  className,
  type = "filled",
  size = "large",
  rounded = true,
  disabled = false,
  children,
  icon,
  buttonRef,
  ...props
}) => {
  const onlyIcon = !children && icon;

  return (
    <button
      ref={buttonRef}
      {...props}
      className={classNames([
        styles.button,
        styles[type],
        styles[size],
        { [styles.rounded]: rounded },
        { [styles.disabled]: disabled },
        { [styles.onlyIcon]: onlyIcon },
        { [styles[`icon_size_${size}`]]: onlyIcon },
        { [styles.icon_rounded]: onlyIcon && rounded },
        className,
      ])}
      disabled={disabled}
    >
      {children && <p>{children}</p>}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};
export default Button;

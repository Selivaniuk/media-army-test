import classNames from "classnames";
import Typography from "ui/Typography";
import styles from "./index.module.scss";

type PropsType = {
  children: React.ReactNode;
  placeholder?: string;
  label?: string;
  description?: string;
  isError?: boolean;
  required?: boolean;
  suffix?: React.ReactNode;
  isFocused?: boolean;
  hasValue?: boolean;
  className?: string;
  classNameDescription?: string;
};
const InputContainer: React.FC<PropsType> = ({
  placeholder,
  className,
  label,
  description,
  isError,
  required,
  suffix,
  hasValue,
  isFocused,
  children,
  classNameDescription,
}) => {
  return (
    <div
      className={classNames([
        className,
        styles.container,
        { [styles.focused]: isFocused },
        { [styles.error]: isError },
      ])}
    >
      {placeholder && !hasValue && (
        <span className={styles.placeholder}>
          {placeholder} <Typography.Text1>*</Typography.Text1>
        </span>
      )}
      {label && (
        <span
          className={classNames([
            styles.label,
            { [styles.visibleLabel]: !!hasValue },
          ])}
        >
          {label} {required && <Typography.Text4>*</Typography.Text4>}
        </span>
      )}
      {children}
      {suffix && <span className={styles.suffix}>{suffix}</span>}
      <Typography.Text4
        className={classNames([styles.description, classNameDescription])}
      >
        {description ?? ""}
      </Typography.Text4>
    </div>
  );
};

export default InputContainer;

import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { useClickOutside } from "hooks/useClickOutside";
import { Typography, Icons } from "ui";
import InputContainer from "ui/InputContainer";
import styles from "./index.module.scss";
import "./animations.scss";

// type Value<T> = { value: T; label: string };
type Option = { value: string; label: string };

type PropsType = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  description?: string;
  isError?: boolean;
  required?: boolean;
};

const Select: React.FC<PropsType> = ({
  options,
  description,
  isError,
  label,
  onChange,
  placeholder,
  required,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));
  const nodeRef = useRef<HTMLDivElement>(null);
  const infoBlockHeight = !isOpen
    ? 0
    : nodeRef.current
    ? nodeRef.current.scrollHeight
    : "auto";
  const containerData = {
    description,
    placeholder,
    label,
    isError,
    required,
  };
  const handleChange = (value: string) => {
    onChange?.(value);
    setIsOpen(false);
  };
  return (
    <InputContainer
      {...containerData}
      hasValue={!!value}
      isFocused={isOpen}
      classNameDescription={classNames([
        styles.description,
        { [styles.hideDescription]: isOpen },
      ])}
      suffix={
        <Icons.ChevronDown
          className={classNames([
            styles.arrow,
            { [styles.activeArrow]: isOpen },
          ])}
        />
      }
    >
      <div ref={ref} className={styles.container}>
        <div className={styles.value} onClick={() => setIsOpen(!isOpen)}>
          {value && (
            <Typography.Text1>
              {options.find((o) => o.value === value)?.label}
            </Typography.Text1>
          )}
        </div>
        <CSSTransition
          nodeRef={nodeRef}
          in={isOpen}
          timeout={600}
          classNames="options"
        >
          <div
            style={{ height: infoBlockHeight }}
            ref={nodeRef}
            className={classNames([styles.options])}
          >
            {options?.map((option) => (
              <div
                key={option.value}
                className={classNames([
                  styles.option,
                  { [styles.activeOption]: option.value === value },
                ])}
                onClick={() => handleChange(option.value)}
              >
                <Typography.Text1>{option.label}</Typography.Text1>
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
    </InputContainer>
  );
};

export default Select;

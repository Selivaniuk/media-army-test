import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { useClickOutside } from "hooks/useClickOutside";
import { Typography, Icons } from "ui";
import InputContainer from "ui/InputContainer";
import styles from "./index.module.scss";
import "./animations.scss";

type Value<T> = { value: T; label: string };

type PropsType<T> = {
  options: Value<T>[];
  value?: Value<T>;
  onChange?: (value: Value<T>) => void;
  placeholder?: string;
  label?: string;
  description?: string;
  isError?: boolean;
  required?: boolean;
};

const Select = <T extends string | number>({
  options,
  description,
  isError,
  label,
  onChange,
  placeholder,
  required,
  value,
}: PropsType<T>) => {
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
  const handleChange = (value: Value<T>) => {
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
          {value && <Typography.Text1>{value.label}</Typography.Text1>}
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
                  { [styles.activeOption]: option.value === value?.value },
                ])}
                onClick={() => handleChange(option)}
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

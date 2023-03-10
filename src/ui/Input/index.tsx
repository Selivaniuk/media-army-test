import { useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import InputContainer from "ui/InputContainer";

type PropsType = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  description?: string;
  isError?: boolean;
  required?: boolean;
  suffix?: React.ReactNode;
};
const Input: React.FC<PropsType> = ({
  placeholder,
  className,
  label,
  description,
  isError,
  required,
  suffix,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const containerData = {
    placeholder,
    label,
    description,
    isError,
    required,
    suffix,
  };
  return (
    <InputContainer
      {...containerData}
      hasValue={!!props.value}
      isFocused={focused}
    >
      <input
        {...props}
        onFocus={(e) => {
          setFocused(true);
        }}
        onBlur={(e) => {
          setFocused(false);
        }}
        className={classNames([styles.input, className])}
      />
    </InputContainer>
  );
};

export default Input;

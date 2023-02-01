import classNames from "classnames";
import styles from "./index.module.scss";

type PropsType = React.HTMLAttributes<HTMLParagraphElement>;

const H0: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.h0])} {...props}>
      {children}
    </p>
  );
};
const H1: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.h1])} {...props}>
      {children}
    </p>
  );
};
const H2: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.h2])} {...props}>
      {children}
    </p>
  );
};
const H3: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.h3])} {...props}>
      {children}
    </p>
  );
};
const H4: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.h4])} {...props}>
      {children}
    </p>
  );
};
const Description: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.description])} {...props}>
      {children}
    </p>
  );
};
const Link: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.link])} {...props}>
      {children}
    </p>
  );
};
const Text1: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.text_1])} {...props}>
      {children}
    </p>
  );
};
const Text2: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.text_2])} {...props}>
      {children}
    </p>
  );
};
const Text3: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.text_3])} {...props}>
      {children}
    </p>
  );
};
const Text4: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.text_4])} {...props}>
      {children}
    </p>
  );
};
const Button: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.button])} {...props}>
      {children}
    </p>
  );
};
const Button2: React.FC<PropsType> = ({ className, children }, props) => {
  return (
    <p className={classNames([className, styles.button_2])} {...props}>
      {children}
    </p>
  );
};

const Typography = {
  H0,
  H1,
  H2,
  H3,
  H4,
  Description,
  Link,
  Text1,
  Text2,
  Text3,
  Text4,
  Button,
  Button2,
};

export default Typography;

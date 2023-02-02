import { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Button, Icons, Input, Link, Modal, Select } from "ui";
import styles from "./index.module.scss";
import "./animations.scss";

type PropsType = {
  isOpenMenu: boolean;
};
type RegistrationForm = {
  name: string;
  number: string;
  mark: string;
  description: string;
};
type RegistrationFormErrors = {
  name?: string;
  number?: string;
  mark?: string;
};
const initialFormValues: RegistrationForm = {
  name: "",
  number: "",
  mark: "",
  description: "",
};
const marks = ["Volvo", "BMW", "AUDI", "Volkswagen", "Skoda", "Другой"];

const Registration: React.FC<PropsType> = ({ isOpenMenu }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] =
    useState<RegistrationForm>(initialFormValues);
  const [formErrors, setFormErrors] = useState<RegistrationFormErrors>();
  useEffect(() => {
    if (!open) {
      setFormValues(initialFormValues);
      setFormErrors(undefined);
    }
  }, [open]);
  const onChange = (name: keyof RegistrationForm, value?: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const validateField = (name: keyof RegistrationForm) => {
    if (formValues[name] === "") {
      setFormErrors((prev) => ({ ...prev, [name]: "Обязательное поле" }));
      return false;
    }
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    return true;
  };
  const validateForm = () => {
    const isValidateName = validateField("name");
    const isValidateNumber = validateField("number");
    const isValidateMark = validateField("mark");

    if (isValidateName && isValidateNumber && isValidateMark) {
      console.log("form validated!");
      setOpen(false);
    }
  };

  const nodeRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={isOpenMenu}
        timeout={600}
        classNames="header_navigation_button"
      >
        <Button
          buttonRef={nodeRef}
          className={styles.button}
          size="small"
          onClick={() => setOpen(!open)}
        >
          Запись на сервис
        </Button>
      </CSSTransition>
      <Modal
        visible={open}
        onClose={() => setOpen(false)}
        title="Запись на сервис"
      >
        <div className={styles.form}>
          <Input
            isError={!!formErrors?.name}
            description={formErrors?.name}
            value={formValues.name}
            onChange={(e) => onChange("name", e?.target.value)}
            placeholder="Ваше имя"
            label="Ваше имя"
            required
          />
          <Input
            isError={!!formErrors?.number}
            description={formErrors?.number}
            value={formValues.number}
            onChange={(e) => onChange("number", e?.target.value)}
            placeholder="Контактный телефон"
            label="Контактный телефон"
            required
          />
          <Select
            isError={!!formErrors?.mark}
            description={formErrors?.mark}
            value={formValues.mark}
            onChange={(e) => onChange("mark", e)}
            options={marks.map((mark) => ({ label: mark, value: mark }))}
            placeholder="Марка автомобиля"
            label="Марка автомобиля"
            required
          />
          <Input
            value={formValues.description}
            onChange={(e) => onChange("description", e?.target.value)}
            className={styles.description}
            placeholder="Краткое описание проблемы"
            label="Краткое описание проблемы"
          />
          <div className={styles.submitContainer}>
            <span>
              Нажимая кнопку «Отправить заявку» вы даете согласие на{" "}
              <Link to="#">Обработку персональных данных</Link>
            </span>
            <Button onClick={validateForm} icon={<Icons.ChevronRight />}>
              Отправить заявку
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Registration;

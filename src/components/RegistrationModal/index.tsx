import { useEffect, useState } from "react";
import { Button, Icons, Input, Link, Modal, Select } from "ui";
import styles from "./index.module.scss";

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

type PropsType = {
  visible: boolean;
  onClose: () => void;
};
const RegistrationModal: React.FC<PropsType> = ({ visible, onClose }) => {
  const [formValues, setFormValues] =
    useState<RegistrationForm>(initialFormValues);
  const [formErrors, setFormErrors] = useState<RegistrationFormErrors>();
  useEffect(() => {
    if (!visible) {
      setFormValues(initialFormValues);
      setFormErrors(undefined);
    }
  }, [visible]);
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
      onClose();
    }
  };
  return (
    <Modal visible={visible} onClose={onClose} title="Запись на сервис">
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
  );
};
export default RegistrationModal;

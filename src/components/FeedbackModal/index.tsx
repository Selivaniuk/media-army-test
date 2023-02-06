import { useEffect, useState } from "react";
import { Button, Icons, Input, Link, Modal } from "ui";
import styles from "../RegistrationModal/index.module.scss";

type Form = {
  name: string;
  number: string;
  comment: string;
};
type FormErrors = {
  name?: string;
  number?: string;
};
const initialFormValues: Form = {
  name: "",
  number: "",
  comment: "",
};

type PropsType = {
  visible: boolean;
  onClose: () => void;
};

const FeedbackModal: React.FC<PropsType> = ({ visible, onClose }) => {
  const [formValues, setFormValues] = useState<Form>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>();

  useEffect(() => {
    if (!visible) {
      setFormValues(initialFormValues);
      setFormErrors(undefined);
    }
  }, [visible]);

  const onChange = (name: keyof Form, value?: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (name: keyof Form) => {
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

    if (isValidateName && isValidateNumber) {
      console.log("form validated!");
      onClose();
    }
  };
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="Перезвоним в течении часа"
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
        <Input
          value={formValues.comment}
          onChange={(e) => onChange("comment", e?.target.value)}
          className={styles.description}
          placeholder="Комментарий"
          label="Комментарий"
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

export default FeedbackModal;

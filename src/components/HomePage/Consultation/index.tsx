import { useState } from "react";
import { RegistrationModal } from "components/Modals";
import { Button, Icons } from "ui";
import styles from "./index.module.scss";

const Consultation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Получить консультацию</p>
        <div className={styles.bot}>
          <p className={styles.text}>
            Оставьте заявку, и наш мастер перезвонит вам, произведет
            предварительную оценку стоимости услуг и запчастей, и подберет
            удобное время для визита.
          </p>
          <Button
            onClick={() => setOpen(true)}
            className={styles.button}
            icon={<Icons.ChevronRight />}
          >
            Оставить заявку
          </Button>
        </div>
      </div>
      <RegistrationModal visible={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default Consultation;

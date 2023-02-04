import { Button, Icons } from "ui";
import styles from "./index.module.scss";
import PromotionCard from "./PromotionCard";

const Promotions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.title}>Наши акции</p>
        <Button icon={<Icons.ChevronRight />}>Все акции</Button>
      </div>
      <PromotionCard />
    </div>
  );
};

export default Promotions;

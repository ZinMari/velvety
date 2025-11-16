import Container from "../../ui/Container";
import { IconArrow } from "../../ui/Icons";

import styles from "./style.module.scss";

const SubscribeSection: React.FC = () => {
  return (
    <section className={styles.subscribe}>
      <Container className={styles.subscribeContainer}>
        <h2 className={styles.subscribeTitle}>
          Subscribe to&nbsp;get&nbsp;10% off your first order
        </h2>
        <form className={styles.subscribeForm}>
          <input
            type="email"
            placeholder="Drop your email here"
            className={styles.subscribeInput}
          />
          <button className={styles.subscribeButton}>
            <IconArrow width={48} fill="var(--color-green-dark)" />
          </button>
        </form>
      </Container>
    </section>
  );
};

export default SubscribeSection;

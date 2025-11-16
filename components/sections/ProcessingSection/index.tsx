import styles from "./style.module.scss";
import Container from "../../ui/Container";
import { IconArrow } from "../../ui/Icons";

const ProcessingSection: React.FC = () => {
  return (
    <section className={styles.processing}>
      <Container>
        <a href="#" className={styles.processingLink}>
          <h2 className={styles.processingTitle}>
            Let&rsquo;s see the processing of&nbsp;our products
          </h2>
          <IconArrow className={styles.processingArrow} />
        </a>
      </Container>
    </section>
  );
};

export default ProcessingSection;

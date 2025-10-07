import Container from "../../../ui/Container";
import Typography from "../../../ui/Typography";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroLeft}></div>
        <div className={styles.heroRight}></div>
      </section>
      <section className={styles.features}>
        <Container className={styles.featuresContainer}>
          <div className={styles.featuresLeft}>
            <Typography as="h3" className={styles.featuresTitle}>
              Inspired by&nbsp;traditional knowledge and nature
            </Typography>
            <div className={styles.featuresImage}>
              <img src="./features.png" alt="" />
            </div>
          </div>
          <div className={styles.featuresRight}></div>
        </Container>
      </section>
    </main>
  );
}

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroLeft}></div>
        <div className={styles.heroRight}></div>
      </section>
      <section className={styles.features}>
        <div className={styles.featuresLeft}>
          <h3 className={styles.featuresTitle}>
            Inspired by&nbsp;traditional knowledge and nature
          </h3>
          <div className={styles.featuresImage}>
            <img src="./features.png" alt="" />
          </div>
        </div>
        <div className={styles.featuresRight}></div>
      </section>
    </main>
  );
}

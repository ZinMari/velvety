import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroLeft}></div>
        <div className={styles.heroRight}></div>
      </section>
    </main>
  );
}

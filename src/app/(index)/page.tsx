import Container from "../../../ui/Container";
import Typography from "../../../ui/Typography";
import { IconOrganic, IconSerum, IconSuitable } from "../../../ui/Icons";

import styles from "./page.module.scss";
import clsx from "clsx";

const FEATURES_DATA = [
  {
    id: 1,
    title: "100% Organic",
    text: "We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms.",
    icon: IconOrganic,
  },
  {
    id: 2,
    title: "Fits your skin",
    text: "I’ts all natural and processed based on traditional knowledge with modern technology.",
    icon: IconSuitable,
  },
  {
    id: 3,
    title: "Easy to use",
    text: "Packed with a unique design as well as usefull that can help you perform routine skin care.",
    icon: IconSerum,
  },
];

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
              <img className={styles.featuresImg} src="./features.png" alt="" />
            </div>
          </div>
          <div className={styles.featuresRight}>
            <ul className={clsx(styles.featuresList, styles.list)}>
              {FEATURES_DATA.map((elem) => (
                <li key={elem.id} className={styles.listItem}>
                  <div className={styles.listImg}>
                    <elem.icon />
                  </div>
                  <div className={styles.listInfo}>
                    <Typography className={styles.listTitle} as="h4">
                      {elem.title}
                    </Typography>
                    <Typography as="p">{elem.text}</Typography>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className={styles.bestProducts}>
        <div className={styles.bestProductsTitle}>
          <Typography as="h2">Our featured products</Typography>
          <Typography as="h3" className={styles.bestProductsSubTitle}>
            Facial and skincare, natural and certified organic
          </Typography>
        </div>
        <div className={styles.bestProductsProducts}></div>
      </section>
    </main>
  );
}

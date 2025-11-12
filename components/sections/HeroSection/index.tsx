import cl from "clsx";
import styles from "./style.module.scss";

import Typography from "../../ui/Typography";
import Button from "../../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}></div>
      <div className={styles.heroRight}>
        <Typography className={styles.heroTitle} as="h1">
          Let nature take care of&nbsp;your body and soul
        </Typography>
        <Button className={styles.heroButton}>Shop now</Button>
      </div>
    </section>
  );
};

export default HeroSection;

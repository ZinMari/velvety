import cl from "clsx";
import styles from "./style.module.scss";

import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import Slider from "../../ui/Slider";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}></div>
      <div className={styles.heroRight}>
        <div className={styles.heroContent}>
          <Typography className={styles.heroTitle} as="h1">
            Let nature take care of&nbsp;your body and soul
          </Typography>
          <Button className={styles.heroButton} isBorder={false}>
            Shop now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import cl from "clsx";
import styles from "./style.module.scss";

import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import Slider from "../../ui/Slider";

const SLIDER_ITEM = [
  <img src="/products/chicori.png" />,
  <img src="/products/holocena.png" />,
];

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroSlider}>
          <Slider items={SLIDER_ITEM} />
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.heroContent}>
          <Typography className={styles.heroTitle} as="h1">
            Let nature take care of&nbsp;your body and soul
          </Typography>
          <Button className={styles.heroButton} isBorder={false} type="max">
            Shop now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

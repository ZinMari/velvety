import cl from "clsx";
import styles from "./style.module.scss";

import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import Slider from "../../ui/Slider";
import Container from "../../ui/Container";

const PATHS_SLIDER_IMG = ["/products/chicori.png", "/products/holocena.png"];

function renderSliderItems() {
  return PATHS_SLIDER_IMG.map((path) => (
    <div key={path} className={styles.heroSliderItem}>
      <img className={styles.heroSliderImg} src={path} alt="" />
    </div>
  ));
}

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <div className={styles.heroSliderWrap}>
            <Slider
              className={styles.heroSlider}
              items={renderSliderItems()}
              arrowsLocation="left"
            />
          </div>
        </div>
        <div className={styles.heroContent}>
          <Typography className={styles.heroTitle} as="h1">
            Let nature take care of&nbsp;your body and soul
          </Typography>
          <Button className={styles.heroButton} isBorder={false} type="max">
            Shop now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

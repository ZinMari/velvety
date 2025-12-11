import products from "../../../public/data/products/products.json";

import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import Slider from "../../ui/Slider";
import Container from "../../ui/Container";
import Link from "next/link";

import styles from "./style.module.scss";

function renderSliderItems() {
  return products.map((product) => (
    <Link
      className={styles.heroSliderItem}
      key={product.id}
      href={`/product/${product.id}`}
    >
      <img
        className={styles.heroSliderImg}
        src={product.src}
        alt={product.name}
      />
    </Link>
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
              controlsTheme="light"
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

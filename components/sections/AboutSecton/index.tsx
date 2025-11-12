import Container from "../../ui/Container";
import Typography from "../../ui/Typography";
import styles from "./style.module.scss";
import clsx from "clsx";

const AboutSection: React.FC = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.aboutContainer}>
        <div className={styles.aboutTitles}>
          <Typography className={styles.aboutTitle} as="h2">
            About&nbsp;us
          </Typography>
          <Typography as="h3">Velvety facial and skincare company</Typography>
        </div>
        <div className={styles.aboutInfo}>
          <Typography as="p">
            Velvety is&nbsp;an&nbsp;indigenous company that specializes
            in&nbsp;the manufacture and development of&nbsp;facial and skincare
            products using the medicinal properties of&nbsp;the traditional
            First Nations pharmacopoeia, with a&nbsp;concern for sustainable
            development.
          </Typography>
          <Typography as="p">
            The products offered, whose benefits have been scientifically
            confirmed, are 100% natural and allow you to&nbsp;take care
            of&nbsp;your body and mind: calming teas, energizing infusions,
            anti-inflammatory essential oils, anti-age soaps and creams, etc.
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

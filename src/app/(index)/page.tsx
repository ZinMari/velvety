import Container from "../../../components/ui/Container";
import Typography from "../../../components/ui/Typography";
import {
  IconArrow,
  IconFace,
  IconGift,
  IconPeople,
} from "../../../components/ui/Icons";

import styles from "./page.module.scss";
import ActionCard from "../../../components/ui/ActionCard";
import Slider from "../../../components/ui/Slider";
import Review from "../../../components/ui/Review";
import HeroSection from "../../../components/sections/HeroSection";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import BestProductsSection from "../../../components/sections/BestProductsSection";
import AboutSection from "../../../components/sections/AboutSecton";
import BrandsSection from "../../../components/sections/BrandsSection";
import ProcessingSection from "../../../components/sections/ProcessingSection";
import DiagnosisSection from "../../../components/sections/DiagnosisSection";
import AllProductsSection from "../../../components/sections/AllProductsSection";

const ACTION_CARDS = [
  {
    id: 1,
    subtitle: "Loyalty Program",
    title: "For Happy Skin",
    buttonText: "Join the program",
    icon: IconGift,
  },
  {
    id: 2,
    subtitle: "Organic beauty is shared,",
    title: "Sponsor those you love!",
    buttonText: "Refer a Friend",
    icon: IconPeople,
  },
  {
    id: 3,
    subtitle: "Treat yourself to good weather",
    title: "at Maison Absolution",
    buttonText: "Try Our Treatments",
    icon: IconFace,
  },
];

const renderReviewsArray = () => {
  const REVIEWS_DATA = [
    {
      id: 0,
      text: "&laquo;I&rsquo;ve been feeling pretty stressed with my&nbsp;skin lately, so&nbsp;I picked up&nbsp;a&nbsp;set of&nbsp;HOLOCENA skincare. Oh&nbsp;my&nbsp;goodness!. It&nbsp;was AMAZING. My&nbsp;skin felt so&nbsp;soft and moisturized&raquo;",
      rating: 5,
    },
    {
      id: 1,
      text: "&laquo;After trying HOLOCENA for two weeks, my&nbsp;complexion has never looked better! The products are gentle yet effective. Highly recommend!&raquo;",
      rating: 5,
    },
    {
      id: 2,
      text: "&laquo;I was skeptical at first, but HOLOCENA completely transformed my&nbsp;skin. Reduced redness and improved texture dramatically&raquo;",
      rating: 4,
    },
    {
      id: 3,
      text: "&laquo;My dermatologist recommended HOLOCENA and I&rsquo;m so&nbsp;glad she did! Perfect for sensitive skin and really delivers results&raquo;",
      rating: 5,
    },
  ];
  return REVIEWS_DATA.map((review) => (
    <Review key={review.id} text={review.text} rating={review.rating} />
  ));
};

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <FeaturesSection />
      <BestProductsSection />
      <AboutSection />
      <BrandsSection />
      <ProcessingSection />
      <DiagnosisSection />
      <AllProductsSection />
      <section className={styles.reviews}>
        <Container className={styles.reviewsWrap}>
          <div className={styles.reviewsProduct}>
            <img src="/products/holocena.png" alt="" />
          </div>
          <div className={styles.reviewsInfo}>
            <Typography className={styles.reviewsTitle} as="h2">
              Product Testimonials
            </Typography>
            <div className={styles.reviewsSlider}>
              {<Slider items={renderReviewsArray()} />}
            </div>
            <p className={styles.reviewsCaption}>
              &mdash;&nbsp;Customer Review
            </p>
          </div>
        </Container>
      </section>
      <section className={styles.actionButtons}>
        <Container>
          <ul className={styles.actionButtonsList}>
            {ACTION_CARDS.map((card) => (
              <li key={card.id} className={styles.actionButtonsItem}>
                <ActionCard
                  className={styles.actionButtonsCard}
                  Icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle}
                  buttonText={card.buttonText}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className={styles.subscribe}>
        <Container className={styles.subscribeContainer}>
          <h2 className={styles.subscribeTitle}>
            Subscribe to&nbsp;get&nbsp;10% off your first order
          </h2>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Drop your email here"
              className={styles.subscribeInput}
            />
            <button className={styles.subscribeButton}>
              <IconArrow width={48} fill="var(--color-green-dark)" />
            </button>
          </form>
        </Container>
      </section>
    </main>
  );
}

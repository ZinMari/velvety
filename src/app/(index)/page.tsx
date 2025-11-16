import Container from "../../../components/ui/Container";
import {
  IconArrow,
  IconFace,
  IconGift,
  IconPeople,
} from "../../../components/ui/Icons";

import styles from "./page.module.scss";
import ActionCard from "../../../components/ui/ActionCard";
import HeroSection from "../../../components/sections/HeroSection";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import BestProductsSection from "../../../components/sections/BestProductsSection";
import AboutSection from "../../../components/sections/AboutSecton";
import BrandsSection from "../../../components/sections/BrandsSection";
import ProcessingSection from "../../../components/sections/ProcessingSection";
import DiagnosisSection from "../../../components/sections/DiagnosisSection";
import AllProductsSection from "../../../components/sections/AllProductsSection";
import ReviewsSection from "../../../components/sections/ReviewsSection";

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
      <ReviewsSection />
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

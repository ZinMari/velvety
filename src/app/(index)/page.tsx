import Container from "../../../components/ui/Container";
import { IconArrow } from "../../../components/ui/Icons";

import styles from "./page.module.scss";
import HeroSection from "../../../components/sections/HeroSection";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import BestProductsSection from "../../../components/sections/BestProductsSection";
import AboutSection from "../../../components/sections/AboutSecton";
import BrandsSection from "../../../components/sections/BrandsSection";
import ProcessingSection from "../../../components/sections/ProcessingSection";
import DiagnosisSection from "../../../components/sections/DiagnosisSection";
import AllProductsSection from "../../../components/sections/AllProductsSection";
import ReviewsSection from "../../../components/sections/ReviewsSection";
import ActionButtonsSection from "../../../components/sections/ActionButtons";

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
      <ActionButtonsSection />
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

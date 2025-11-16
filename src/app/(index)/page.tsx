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
import SubscribeSection from "../../../components/sections/SubscribeSection";

import styles from "./page.module.scss";

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
      <SubscribeSection />
    </main>
  );
}

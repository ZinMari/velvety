import Container from "../../../components/ui/Container";
import Typography from "../../../components/ui/Typography";
import {
  IconArrow,
  IconFace,
  IconGift,
  IconPeople,
} from "../../../components/ui/Icons";

import styles from "./page.module.scss";
import clsx from "clsx";
import Button from "../../../components/ui/Button";
import ProductCard from "../../../components/ui/ProductCard";
import CategoriesButton from "../../../components/ui/CategoriesButton";
import ActionCard from "../../../components/ui/ActionCard";
import Slider from "../../../components/ui/Slider";
import Review from "../../../components/ui/Review";
import HeroSection from "../../../components/sections/HeroSection";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import BestProducts from "../../../components/sections/BestProductsSection";

const BRANDS_DATA = [
  {
    id: 1,
    name: "vogue",
    src: "./brands/vogue.svg",
    link: "",
  },
  {
    id: 2,
    name: "forbes",
    src: "./brands/forbes.svg",
    link: "",
  },
  {
    id: 3,
    name: "thought catalog",
    src: "./brands/th_catalog.svg",
    link: "",
  },
  {
    id: 4,
    name: "women's health",
    src: "./brands/wh.svg",
    link: "",
  },
  {
    id: 5,
    name: "wwd",
    src: "./brands/wwd.svg",
    link: "",
  },
];

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "chicori",
    src: "./products/chicori.png",
    price: 20,
    rating: 4.0,
    isBestProduct: true,
  },
  {
    id: 2,
    name: "notorious",
    src: "./products/notorious.png",
    price: 23,
    rating: 5.0,
    isBestProduct: true,
  },
  {
    id: 3,
    name: "holocena",
    src: "./products/holocena.png",
    price: 20,
    rating: 5.0,
    isBestProduct: true,
  },
  {
    id: 4,
    name: "classwing",
    src: "./products/classwing_mini.png",
    price: 20,
    rating: 5.0,
    isBestProduct: false,
  },
  {
    id: 5,
    name: "inamorata",
    src: "./products/inamorata_mini.png",
    price: 12,
    rating: 4.5,
    isBestProduct: false,
  },
  {
    id: 6,
    name: "lightcool",
    src: "./products/lightcool_mini.png",
    price: 22.5,
    rating: 5.0,
    isBestProduct: false,
  },
];

const PRODUCT_CATEGORIES_DATA = [
  { id: 1, name: "All needs" },
  { id: 2, name: "Protect" },
  { id: 3, name: "Regenerates" },
  { id: 4, name: "Revitalizes" },
  { id: 5, name: "Feeds" },
  { id: 6, name: "Regulates" },
  { id: 7, name: "Purifies" },
  { id: 8, name: "Makeup Removal" },
  { id: 9, name: "Exfoliate" },
  { id: 10, name: "Antioxidant" },
  { id: 11, name: "Soothes" },
  { id: 12, name: "Smoothes skin texture" },
  { id: 13, name: "Tones" },
  { id: 14, name: "Anti-waste" },
  { id: 15, name: "Hydrate" },
  { id: 16, name: "Strengthens" },
  { id: 17, name: "Regenerates after UV exposure Strengthens" },
];

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
      <BestProducts />
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
              in&nbsp;the manufacture and development of&nbsp;facial and
              skincare products using the medicinal properties of&nbsp;the
              traditional First Nations pharmacopoeia, with a&nbsp;concern for
              sustainable development.
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
      <section className={styles.brands}>
        <Container>
          <Typography className={styles.brandsTitle} as="h2">
            As&nbsp;seen&nbsp;in
          </Typography>
          <ul className={styles.brandsList}>
            {BRANDS_DATA.map((elem) => (
              <li key={elem.id}>
                <a href={elem.link}>
                  <img
                    className={styles.brandsImg}
                    src={elem.src}
                    alt={elem.name}
                  />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className={styles.processing}>
        <Container>
          <a href="#" className={styles.processingLink}>
            <h2 className={styles.processingTitle}>
              Let&rsquo;s see the processing of&nbsp;our products
            </h2>
            <IconArrow className={styles.processingArrow} />
          </a>
        </Container>
      </section>
      <section className={styles.diagnosis}>
        <Container className={styles.diagnosisContainer}>
          <div className={styles.diagnosisImage}>
            <div className={styles.diagnosisImageWrap}>
              <img
                className={styles.diagnosisImg}
                src="./diagnosis.svg"
                alt="Outline of a face with flowers"
              />
            </div>
          </div>
          <div className={styles.diagnosisInfo}>
            <Typography as="h2" className={styles.diagnosisTitle}>
              Try Our Service
            </Typography>
            <Typography as="h3" className={styles.diagnosisSubtitle}>
              Your skin diagnosis in 3&nbsp;minutes
            </Typography>
            <Typography as="p" className={styles.diagnosisText}>
              Say hello to&nbsp;a&nbsp;more radiant, healthier you with
              personalized skincare that&rsquo;s as&nbsp;unique as&nbsp;you are.
            </Typography>
            <Button>Start my&nbsp;diagnosis</Button>
          </div>
        </Container>
      </section>
      <section className={styles.allProducts}>
        <Container className={styles.allProductsContainer}>
          <div className={styles.allProductsLeft}>
            <Typography as="h2" className={styles.allProductsTitle}>
              All Products
            </Typography>
            <Typography as="h3" className={styles.allProductsSubtitle}>
              Mild skincare &amp;&nbsp;facial routine
            </Typography>
            <ul className={styles.allProductsCategories}>
              {PRODUCT_CATEGORIES_DATA.map((e) => (
                <li key={e.id}>{<CategoriesButton text={e.name} />}</li>
              ))}
            </ul>
          </div>
          <div className={styles.allProductsRight}>
            <ul className={styles.allProductsList}>
              {PRODUCTS_DATA.slice(0, 4).map((e) => (
                <li className={styles.allProductsCard} key={e.id}>
                  <ProductCard
                    productName={e.name}
                    productImg={e.src}
                    rating={e.rating}
                    price={e.price}
                    variant="min"
                  />
                </li>
              ))}
            </ul>
            <Button>Shop now</Button>
          </div>
        </Container>
      </section>
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

import Container from "../../../ui/Container";
import Typography from "../../../ui/Typography";
import {
  IconArrow,
  IconFace,
  IconGift,
  IconOrganic,
  IconPeople,
  IconSerum,
  IconSuitable,
} from "../../../ui/Icons";

import styles from "./page.module.scss";
import clsx from "clsx";
import Button from "../../../ui/Button";
import ProductCard from "../../../ui/ProductCard";
import CategoriesButton from "../../../ui/CategoriesButton";
import ActionCard from "../../../ui/ActionCard";
import Slider from "../../../ui/Slider";
import StarRating from "../../../ui/StarRating";

const FEATURES_DATA = [
  {
    id: 1,
    title: "100% Organic",
    text: "We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms.",
    icon: IconOrganic,
  },
  {
    id: 2,
    title: "Fits your skin",
    text: "I’ts all natural and processed based on traditional knowledge with modern technology.",
    icon: IconSuitable,
  },
  {
    id: 3,
    title: "Easy to use",
    text: "Packed with a unique design as well as usefull that can help you perform routine skin care.",
    icon: IconSerum,
  },
];

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

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroLeft}></div>
        <div className={styles.heroRight}></div>
      </section>
      <section className={styles.features}>
        <Container className={styles.featuresContainer}>
          <div className={styles.featuresLeft}>
            <Typography as="h3" className={styles.featuresTitle}>
              Inspired by&nbsp;traditional knowledge and nature
            </Typography>
            <div className={styles.featuresImage}>
              <img className={styles.featuresImg} src="./features.png" alt="" />
            </div>
          </div>
          <div className={styles.featuresRight}>
            <ul className={clsx(styles.featuresList, styles.list)}>
              {FEATURES_DATA.map((elem) => (
                <li key={elem.id} className={styles.listItem}>
                  <div className={styles.listImg}>
                    <elem.icon />
                  </div>
                  <div className={styles.listInfo}>
                    <Typography className={styles.listTitle} as="h4">
                      {elem.title}
                    </Typography>
                    <Typography as="p">{elem.text}</Typography>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className={styles.bestProducts}>
        <div className={styles.bestProductsTitle}>
          <Typography as="h2">Our featured products</Typography>
          <Typography as="h3" className={styles.bestProductsSubTitle}>
            Facial and skincare, natural and certified organic
          </Typography>
        </div>
        <div className={styles.bestProductsProducts}>
          <div className={styles.bestProductsContainer}>
            <ul className={styles.bestProductsList}>
              {PRODUCTS_DATA.filter((e) => e.isBestProduct).map(
                (product, index) => {
                  const backgroundType = index % 2 ? "ellipse" : "square";

                  return (
                    <li className={styles.bestProductsItem} key={product.id}>
                      <ProductCard
                        backgroundType={backgroundType}
                        productName={product.name}
                        price={product.price}
                        rating={product.rating}
                        productImg={product.src}
                      />
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </section>
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
              Let's see the processing of our products
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
                <li className={styles.allProductsCard}>
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
            <Typography as="h2">Product Testimonials</Typography>
            <div className={styles.reviewsSlider}>
              <StarRating value={3.4} />
            </div>
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
    </main>
  );
}

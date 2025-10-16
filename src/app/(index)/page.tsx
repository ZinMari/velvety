import Container from "../../../ui/Container";
import Typography from "../../../ui/Typography";
import {
  IconArrow,
  IconOrganic,
  IconSerum,
  IconSuitable,
} from "../../../ui/Icons";

import styles from "./page.module.scss";
import clsx from "clsx";
import Button from "../../../ui/Button";
import ProductCard from "../../../ui/ProductCard";
import CategoriesButton from "../../../ui/CategoriesButton";

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

const BEST_PRODUCTS_DATA = [
  {
    id: 1,
    name: "chicori",
    src: "./products/chicori.png",
    price: 20,
    rating: 4.0,
  },
  {
    id: 2,
    name: "notorious",
    src: "./products/notorious.png",
    price: 23,
    rating: 5.0,
  },
  {
    id: 3,
    name: "holocena",
    src: "./products/holocena.png",
    price: 20,
    rating: 5.0,
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
              {BEST_PRODUCTS_DATA.map((product, index) => {
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
              })}
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
            <Typography as="h2">All Products</Typography>
            <Typography as="h3">
              Mild skincare &amp;&nbsp;facial routine
            </Typography>
            <ul className={styles.allProductsCategories}>
              {PRODUCT_CATEGORIES_DATA.map((e) => (
                <li key={e.id}>{<CategoriesButton text={e.name} />}</li>
              ))}
            </ul>
          </div>
          <div className={styles.allProductsRight}></div>
        </Container>
      </section>
    </main>
  );
}

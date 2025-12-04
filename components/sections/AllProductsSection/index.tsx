import Button from "../../ui/Button";
import CategoriesButton from "../../ui/CategoriesButton";
import Container from "../../ui/Container";
import ProductCard from "../../ui/ProductCard";
import Typography from "../../ui/Typography";

import styles from "./style.module.scss";

type TProduct = {
  id: number;
  name: string;
  src: string;
  price: number;
  rating: number;
  isBestProduct: boolean;
};

const PRODUCTS_DATA: TProduct[] = [
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
    src: "./products/classwing.png",
    price: 20,
    rating: 5.0,
    isBestProduct: false,
  },
  {
    id: 5,
    name: "inamorata",
    src: "./products/inamorata.png",
    price: 12,
    rating: 4.5,
    isBestProduct: false,
  },
  {
    id: 6,
    name: "lightcool",
    src: "./products/lightcool.png",
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

const AllProductsSection: React.FC = () => {
  return (
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
  );
};

export default AllProductsSection;

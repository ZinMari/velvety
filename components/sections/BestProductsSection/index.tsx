import ProductCard from "../../ui/ProductCard";
import Typography from "../../ui/Typography";
import styles from "./style.module.scss";
import clsx from "clsx";

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

const BestProductsSection: React.FC = () => {
  return (
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
  );
};

export default BestProductsSection;

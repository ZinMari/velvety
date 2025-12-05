import products from "../../../public/data/products/products.json";

import ProductCard from "../../ui/ProductCard";
import Typography from "../../ui/Typography";
import styles from "./style.module.scss";

const PRODUCTS_DATA: TProduct[] = products as TProduct[];

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

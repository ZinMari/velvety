import clsx from "clsx";

import styles from "./style.module.scss";
import Typography from "../Typography";

interface ProductCardProps {
  className?: string;
  backgroundType?: "ellipse" | "square";
  productName: string;
  productImg: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  backgroundType = "square",
  productName = "product name",
  price,
  rating,
  productImg,
}) => {
  return (
    <article className={styles.productCard}>
      <div
        className={clsx(styles.productCardImage, {
          [styles.productCardImageEllipse]: backgroundType === "ellipse",
        })}
      >
        <img
          className={styles.productCardImg}
          src={productImg}
          alt={productName}
        />
      </div>
      <div className={styles.productCardInfo}>
        <Typography as="h4" className={styles.productCardTitle}>
          {productName}
        </Typography>
        <div className={styles.productCardWrapData}>
          <p className={styles.productCardPrice}>{`$${price}`}</p>
          <p className={styles.productCardRating}>{rating}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

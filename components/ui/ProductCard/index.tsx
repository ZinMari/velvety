import clsx from "clsx";

import styles from "./style.module.scss";
import Typography from "../Typography";
import StarRating from "../StarRating";

interface ProductCardProps {
  className?: string;
  backgroundType?: "ellipse" | "square";
  variant?: "min" | "max";
  productName: string;
  productImg: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  backgroundType = "square",
  productName = "product name",
  variant = "max",
  price,
  rating,
  productImg,
}) => {
  return (
    <article
      className={clsx(
        styles.productCard,
        variant === "min" && styles.productCardMinVariant,
        className
      )}
    >
      <div
        className={clsx(
          styles.productCardImage,
          backgroundType === "ellipse" && styles.productCardImageEllipse,
          variant === "min" && styles.productCardImageMin
        )}
      >
        <img
          className={styles.productCardImg}
          src={productImg}
          alt={productName}
        />
      </div>
      <div className={styles.productCardInfo}>
        <Typography as="h4" className={clsx(styles.productCardTitle)}>
          {productName}
        </Typography>
        <div className={styles.productCardWrapData}>
          <p className={styles.productCardPrice}>{`$${price}`}</p>
          <div className={styles.productCardRating}>
            <StarRating value={rating} className={styles.productCardStars} />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

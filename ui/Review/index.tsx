import cl from "clsx";

import styles from "./style.module.scss";
import StarRating from "../StarRating";

interface ReviewProps {
  className?: string;
  rating?: number;
  text?: string;
}

const Review: React.FC<ReviewProps> = ({
  className,
  rating = 5,
  text = "There should be a review text here.",
}) => {
  return (
    <div className={cl(styles.review, className)}>
      <div className={styles.reviewStars}>
        <StarRating value={rating} />
      </div>
      <p className={styles.reviewText}>{text}</p>
    </div>
  );
};

export default Review;

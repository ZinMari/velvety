import Container from "../../ui/Container";
import Typography from "../../ui/Typography";
import Slider from "../../ui/Slider";
import Review from "../../ui/Review";

import styles from "./style.module.scss";

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

const ReviewsSection: React.FC = () => {
  return (
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
          <p className={styles.reviewsCaption}>&mdash;&nbsp;Customer Review</p>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;

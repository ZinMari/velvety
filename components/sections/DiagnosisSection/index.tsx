import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";

import styles from "./style.module.scss";

const DiagnosisSection: React.FC = () => {
  return (
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
  );
};

export default DiagnosisSection;

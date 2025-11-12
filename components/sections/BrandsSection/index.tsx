import Container from "../../ui/Container";
import Typography from "../../ui/Typography";
import styles from "./style.module.scss";
import clsx from "clsx";

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

const BrandsSection: React.FC = () => {
  return (
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
  );
};

export default BrandsSection;

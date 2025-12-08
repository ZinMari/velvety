import Container from "../../../../components/ui/Container";
import products from "../../../../public/data/products/products.json";

import styles from "./page.module.scss";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const currentProduct = products.find((e) => e.id == Number(id));

  return (
    <main className={styles.product}>
      <Container className={styles.productContainer}>
        <div className={styles.productImage}>
          <img src={currentProduct?.src} alt="" />
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{currentProduct?.name}</h1>
          <p className={styles.productName}>{`${currentProduct?.price.toFixed(
            2
          )} $`}</p>
        </div>
      </Container>
    </main>
  );
}

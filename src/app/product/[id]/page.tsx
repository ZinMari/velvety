"use client";
import { useEffect, useState } from "react";

import Container from "../../../../components/ui/Container";
import products from "../../../../public/data/products/products.json";

import styles from "./page.module.scss";
import Typography from "../../../../components/ui/Typography";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [currentProduct, setCurrentProduct] = useState<null | TProduct>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { id } = await params;
      const product = products.filter((e) => e.id === Number(id));

      if (product.length > 0) {
        setCurrentProduct(product[0] as TProduct);
      } else {
        window.location.href = "/";
      }
    };

    fetchProduct();
  }, [params]);

  return (
    <main className={styles.product}>
      <Container className={styles.productContainer}>
        <div className={styles.productImage}>
          <img src={currentProduct?.src} alt="" />
        </div>
        <div className={styles.productInfo}>
          <Typography className={styles.productName} as="h1">
            {currentProduct?.name}
          </Typography>
          <p className={styles.productName}>{`${currentProduct?.price.toFixed(
            2
          )} $`}</p>
          <div className={styles.productCount}>
            <button className={styles.productBtn}>-</button>
            <span className={styles.productNumber}>1</span>
            <button className={styles.productBtn}>+</button>
          </div>
          <button className={styles.productBtn}>Add to Cart</button>
        </div>
      </Container>
    </main>
  );
}

"use client";

import products from "../../../public/data/products/products.json";
import productCategories from "../../../public/data/product_categories/product_categories.json";

import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import CategoriesButton from "../../ui/CategoriesButton";
import Container from "../../ui/Container";
import ProductCard from "../../ui/ProductCard";
import Typography from "../../ui/Typography";

import styles from "./style.module.scss";

type FilterObject = {
  category: TCategories[];
};

const PRODUCTS_DATA: TProduct[] = products as TProduct[];

const PRODUCT_CATEGORIES_DATA: TCategoriesItem[] =
  productCategories as TCategoriesItem[];

const AllProductsSection: React.FC = () => {
  //отфильтрованные данные
  const [filterData, setFilterData] = useState<TProduct[]>([]);

  const [filters, setFilters] = useState<FilterObject>({
    category: ["All needs"],
  });

  //Функция фильтрации
  const filterProducts = (filterObj: FilterObject) => {
    return PRODUCTS_DATA.filter((item) => {
      if (
        filterObj.category.length === 0 ||
        filterObj.category.includes("All needs")
      ) {
        return true;
      }

      return filterObj.category.includes(item.category);
    });
  };

  useEffect(() => {
    const data: TProduct[] = filterProducts(filters);
    setFilterData(data);
  }, [filters]);

  const handleClick = (category: TCategories) => {
    const currentFilters = filters.category;

    if (!currentFilters.includes(category)) {
      setFilters({ category: [category, ...currentFilters] });
    } else {
      setFilters({
        category: currentFilters.filter((item) => item != category),
      });
    }
  };

  return (
    <section className={styles.allProducts}>
      <Container className={styles.allProductsContainer}>
        <div className={styles.allProductsLeft}>
          <Typography as="h2" className={styles.allProductsTitle}>
            All Products
          </Typography>
          <Typography as="h3" className={styles.allProductsSubtitle}>
            Mild skincare &amp;&nbsp;facial routine
          </Typography>
          <ul className={styles.allProductsCategories}>
            {PRODUCT_CATEGORIES_DATA.map((e) => (
              <li key={e.id}>
                {
                  <CategoriesButton
                    isActive={filters.category.includes(e.name)}
                    onClick={() => handleClick(e.name)}
                    text={e.name}
                  />
                }
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.allProductsRight}>
          <ul className={styles.allProductsList}>
            {filterData.slice(0, 4).map((e) => (
              <li className={styles.allProductsCard} key={e.id}>
                <ProductCard
                  productName={e.name}
                  productImg={e.src}
                  rating={e.rating}
                  price={e.price}
                  variant="min"
                />
              </li>
            ))}
          </ul>
          <Button>Shop now</Button>
        </div>
      </Container>
    </section>
  );
};

export default AllProductsSection;

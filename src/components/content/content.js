'use client'
import React, { useState, useEffect } from "react";
import styles from "./content.module.css";

const Content = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque velit elementum dolor.
        </p>
      </div>

      <div className={styles.itemsSection}>
        <div className={styles.itemsInfo}>
          <span className={styles.resultsCount}>{products.length} ITEMS</span>
          <p>Hide Filter</p>
        </div>

        <div className={styles.sortingOption}>
          <select className={styles.recommendationsDropdown}>
            <option value="recommended">Recommended</option>
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Content;

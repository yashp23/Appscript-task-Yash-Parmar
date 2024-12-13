'use client';

import React, { useState, useEffect } from 'react';
import styles from './Product.module.css';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

const ProductList = () => {
    const [showFilters, setShowFilters] = useState(true); // To toggle the filters sidebar visibility
    const [products, setProducts] = useState([]);
    const [openSections, setOpenSections] = useState({
        customizable: false,
        idealFor: false,
        occasion: false,
        work: false,
        fabric: false,
        segment: false,
        suitableFor: false,
        rawMaterials: false,
        pattern: false,
    });

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className={styles.container}>
            {/* Show Filters Sidebar if showFilters is true */}
            {showFilters && (
                <aside className={`${styles.sidebar} ${showFilters ? '' : styles['sidebar-hidden']}`}>
                    <h2>Filters</h2>
                    <ul>
                        <li onClick={() => toggleSection("customizable")}>
                            <input type="checkbox" /> Customizable
                        </li>
                        <li onClick={() => toggleSection("idealFor")}>
                            Ideal For <span>{openSections.idealFor ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("occasion")}>
                            Occasion <span>{openSections.occasion ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("work")}>
                            Work <span>{openSections.work ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("fabric")}>
                            Fabric <span>{openSections.fabric ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("segment")}>
                            Segment <span>{openSections.segment ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("suitableFor")}>
                            Suitable For <span>{openSections.suitableFor ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("rawMaterials")}>
                            Raw Materials <span>{openSections.rawMaterials ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("pattern")}>
                            Pattern <span>{openSections.pattern ? "^" : "v"}</span>
                        </li>
                        {/* Add other filter items here */}
                    </ul>
                </aside>
            )}

            {/* Toggle Filter Button */}
            <button className={styles.toggleFiltersButton} onClick={toggleFilters}>
                {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>

            {/* Main Product Grid */}
            <main
                className={`${styles.productGrid} ${showFilters ? styles.grid3Columns : styles.grid4Columns}`}
            >
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        {product.newProduct && <div className={styles.newProductBadge}>NEW PRODUCT</div>}
                        <Image
                            width={300}
                            height={400}
                            src={product.image}
                            alt={product.title}
                            className={styles.productImage}
                        />
                        <h3 className={styles.productName}>{product.title}</h3>
                        <p className={styles.productPrice}>${product.price}</p>

                        <div className={styles.productIcons}>
                            <FaHeart className={styles.likeIcon} />
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default ProductList;

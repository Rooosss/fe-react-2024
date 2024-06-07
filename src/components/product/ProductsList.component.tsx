import React, { useEffect, useState } from 'react';

import styles from '@/components/product/Product.module.css';
import ProductCard from '@/components/product/ProductCard.component.tsx';
import SearchBar from '@/components/search_bar/SearchBar.component.tsx';
import type Product from '@/interfaces/Products.ts';

export default function ProductsList() {
    const apiUrl = 'https://ma-backend-api.mocintra.com/api/v1/products?limit=8&offset=0';
    const [items, setItems] = useState<Product[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setItems(data);
                },
                () => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, [error]);

    return (
        <section className={styles.product__section}>
            <SearchBar />
            <div className={styles.loader__product} style={{ display: isLoaded ? 'none' : 'block' }}>
                <div className={styles.loader__item}></div>
                <div>Loading...</div>
            </div>
            <ul className={styles.product__list}>
                {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </ul>
        </section>
    );
}

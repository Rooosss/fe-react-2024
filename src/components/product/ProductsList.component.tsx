import React, { useEffect, useState } from 'react';

import styles from '@/components/product/Product.module.css';
import ProductCard from '@/components/product/ProductCard.component.tsx';
import type Product from '@/interfaces/Products.ts';

interface ProductsListProps {
    apiUrl: string;
}

const ProductsList: React.FC<ProductsListProps> = ({ apiUrl }) => {
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
    });

    if (!isLoaded) {
        return (
            <div className={styles.loader__product}>
                <div className={styles.loader__item}></div>
                <div>Loading...</div>
            </div>
        );
    } else if (isLoaded) {
        return (
            <section className={styles.product__section}>
                <ul className={styles.product__list}>
                    {items.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </ul>
            </section>
        );
    }
};

export default ProductsList;

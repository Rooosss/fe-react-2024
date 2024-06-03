import React, { useEffect, useState } from 'react';

import Pagination from '@/components/product/Pagination.component.tsx';
import styles from '@/components/product/Product.module.css';
import ProductCard from '@/components/product/ProductCard.component.tsx';
import SearchBar from '@/components/search_bar/SearchBar.component.tsx';
import type Product from '@/interfaces/Products.ts';

export default function ProductsList() {
    const apiUrl = 'https://ma-backend-api.mocintra.com/api/v1/products?category&name=Shoes';
    const [items, setItems] = useState<Product[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const [sortType, setSortType] = useState(0);
    const [currentItems, setCurrentItems] = useState<Product[]>([]);

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

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProduct = currentItems.slice(firstProductIndex, lastProductIndex);

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < items.length / productsPerPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const onShowCategory = (categoryItem: string) => {
        if (categoryItem === '') {
            setCurrentItems(items);
            return;
        }
        setCurrentItems(items.filter((item) => item.category.name === categoryItem));
    };

    return (
        <section className={styles.product__section}>
            <SearchBar onShowCategory={onShowCategory} sortType={sortType} onChangeSort={(index) => setSortType(index)} />
            <ProductCard items={currentProduct} isLoaded={isLoaded} />
            <Pagination
                handlePageClick={handlePageClick}
                previousPage={previousPage}
                nextPage={nextPage}
                productsPerPage={productsPerPage}
                currentPage={currentPage}
                totalProducts={items.length}
            />
        </section>
    );
}

import React from 'react';

import styles from '@/components/product/Product.module.css';
interface PropsPaginate {
    productsPerPage: number;
    currentPage: number;
    totalProducts: any;
    handlePageClick: any;
    previousPage: () => void;
    nextPage: () => void;
}

const Pagination: React.FC<PropsPaginate> = ({ productsPerPage, currentPage, totalProducts, handlePageClick, previousPage, nextPage }) => {
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalProducts / productsPerPage); index++) {
        pageNumbers.push(index);
    }

    return (
        <div className={styles.pagination__page}>
            <button className={styles.page__switch} onClick={previousPage} disabled={currentPage <= 1}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.25016 7.91671L3.3335 5.00004L6.25016 2.08337"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div className={styles.pagination__page_number}>
                {pageNumbers.map((number) => (
                    <button
                        className={`${styles.page__number} ${currentPage === number ? styles.activeNumberPage : ''}`}
                        onClick={() => handlePageClick(number)}
                        key={number}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <button className={styles.page__switch} onClick={nextPage} disabled={currentPage >= totalProducts / productsPerPage}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.75 2.08337L6.66667 5.00004L3.75 7.91671"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;

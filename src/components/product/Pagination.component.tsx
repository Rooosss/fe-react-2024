import React from 'react';

import styles from '@/components/product/Product.module.css';

export default function Pagination() {
    return (
        <div className={styles.pagination__page}>
            <button className={styles.page__switch}>
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
            <button className={styles.page__number}>1</button>
            <button className={styles.page__number}>2</button>
            <button className={styles.page__number}>3</button>
            <button className={styles.page__number}>4</button>
            <button className={styles.page__number}>5</button>
            <button className={styles.page__switch}>
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
}

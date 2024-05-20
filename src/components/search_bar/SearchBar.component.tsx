import styles from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={styles.section__search}>
            <div className={styles.search__block}>
                <input className={styles.search__input} type="text" placeholder="Search..." />
                <button className={styles.search__button}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.25 11.25L15.75 15.75M7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <div className={styles.filter__block}>
                <button className={styles.filter__button}>Electronics</button>
                <button className={styles.filter__button}>Shoes</button>
                <button className={styles.filter__button}>Clothes</button>
            </div>

            <div className={styles.filter__dropdown}>
                <div className={styles.dropdown__menu}>
                    <div className={styles.dropdown__title}>Sort by:</div>
                    <button className={styles.dropdown__button}>
                        <span className={styles.dropdown__button_title}>Price (Low - High)</span>
                        <svg
                            className={styles.dropdown__arrow}
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 7.5L9 10.5L6 7.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <ul className={styles.dropdown__content}>
                        <li className={styles.dropdown__element}>Price (High - Low)</li>
                        <li className={styles.dropdown__element}>Newest</li>
                        <li className={styles.dropdown__element}>Oldest</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

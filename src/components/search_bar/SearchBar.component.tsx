import React, { useState } from 'react';

import searchProductIcon from '@/assets/icons/search-product-icon.svg';

import styles from './SearchBar.module.css';

interface CategoryProps {
    onShowCategory: (categoryItem: string) => void;
    onChangeSort: (activeIndex: number) => void;
    sortType: number;
}

const SearchBar: React.FC<CategoryProps> = ({ onShowCategory, onChangeSort, sortType }) => {
    const categories = ['Electronics', 'Shoes', 'Clothes'];
    const list = ['Price (High - Low)', 'Price (Low - High)', 'Newest', 'Oldest'];
    const [isOpenItem, setOpenItem] = useState<boolean>(false);
    const sortName = list[sortType];

    const onClickListItem = (activeIndex: number) => {
        onChangeSort(activeIndex);
        setOpenItem(false);
    };

    return (
        <div className={styles.section__search}>
            <div className={styles.search__block}>
                <input className={styles.search__input} type="text" placeholder="Search..." />
                <button className={styles.search__button}>
                    <img src={searchProductIcon} alt="search icon" />
                </button>
            </div>

            <div className={styles.filter__block}>
                {categories.map((category: any, index: number) => (
                    <button
                        className={`${styles.filter__button} ${category === category[index] ? styles.activeFilterButton : ''}`}
                        key={index}
                        onClick={() => onShowCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.filter__dropdown}>
                <div className={styles.dropdown__menu}>
                    <div className={styles.dropdown__title}>Sort by:</div>
                    <button
                        className={`${styles.dropdown__button} ${isOpenItem ? styles.dropDownButtonOpen : ''}`}
                        onClick={() => setOpenItem(!isOpenItem)}
                    >
                        {sortName}
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
                    {isOpenItem && (
                        <ul className={styles.dropdown__content}>
                            {list.map((element, index) => (
                                <li
                                    key={index}
                                    onClick={() => onClickListItem(index)}
                                    className={`${styles.dropdown__element} ${sortType === index ? styles.dropDownItemActive : ''}`}
                                >
                                    {element}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;

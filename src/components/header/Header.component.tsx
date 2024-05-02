import React from 'react';

import headerLogin from '@/assets/icons/login-icon.svg';
import headerLogo from '@/assets/icons/main_logo-icon.svg';
import headerSignup from '@/assets/icons/sign_up-icon.svg';
import headerThemeElement from '@/assets/icons/theme_mode_element-icon.svg';

import styles from './Header.module.css';

interface HeaderProps {
    onShowAbout: () => void;
    onShowProducts: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowAbout, onShowProducts }) => (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.header__inner}>
                <div className={styles.header__logo_wrapper}>
                    <a className={styles.header__logo_link} href="/">
                        <img className={styles.header__logo} src={headerLogo} width="40px" height="40px" alt="Logo" />
                    </a>
                    <div className={styles.header__theme}>
                        <button className={styles.header__theme_button_light}>
                            <svg width="30" height="34" viewBox="0 0 30 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.9998 10.3334V8.66675M14.9998 23.6667V25.3334M10.345 12.3453L9.1665 11.1667M19.7732 21.7734L20.9517 22.952M8.33317 17.0001H6.6665M21.6665 17.0001H23.3332M19.7736 12.3453L20.9521 11.1667M10.3454 21.7734L9.16691 22.952M14.9998 21.1667C12.6987 21.1667 10.8332 19.3013 10.8332 17.0001C10.8332 14.6989 12.6987 12.8334 14.9998 12.8334C17.301 12.8334 19.1665 14.6989 19.1665 17.0001C19.1665 19.3013 17.301 21.1667 14.9998 21.1667Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </svg>
                        </button>
                        <img className={styles.header__theme_icon} src={headerThemeElement} alt="Element theme" />
                        <button className={styles.header__theme_button_dark}>
                            <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.5 12.0001C12.5 16.1422 15.8579 19.5001 20 19.5001C20.7577 19.5001 21.4892 19.388 22.1787 19.179C21.2453 22.2586 18.3844 24.5 15 24.5C10.8579 24.5 7.5 21.1423 7.5 17.0002C7.5 13.6158 9.74173 10.7549 12.8213 9.82153C12.6124 10.511 12.5 11.2424 12.5 12.0001Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <nav className={styles.header__navigation}>
                    <ul className={styles.navigation__list}>
                        <li className={styles.navigation__item}>
                            <button onClick={onShowAbout} className={styles.navigation__link}>
                                About
                            </button>
                        </li>
                        <li className={styles.navigation__item}>
                            <button onClick={onShowProducts} className={styles.navigation__link}>
                                Products
                            </button>
                        </li>
                    </ul>

                    <button className={styles.header__cart_button}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.1704 17.3227C16.0658 17.3227 15.1704 18.2759 15.1704 19.4517C15.1704 20.6275 16.0658 21.5807 17.1704 21.5807C18.275 21.5807 19.1704 20.6275 19.1704 19.4517C19.1704 18.2759 18.275 17.3227 17.1704 17.3227ZM17.1704 17.3227H9.46436C9.00329 17.3227 8.77234 17.3227 8.58252 17.2353C8.41507 17.1583 8.26979 17.0343 8.16395 16.8761C8.04531 16.6989 7.9976 16.4618 7.90315 15.9926L5.44189 3.76567C5.34525 3.28556 5.29628 3.04577 5.17627 2.86645C5.07043 2.70829 4.92518 2.58381 4.75773 2.50678C4.56787 2.41943 4.3382 2.41943 3.87694 2.41943H3.17041M6.17041 5.61298H19.0436C19.7654 5.61298 20.1259 5.61298 20.3682 5.77304C20.5804 5.91324 20.7357 6.13313 20.8035 6.38902C20.8808 6.68115 20.7814 7.05004 20.5814 7.78828L19.1968 12.898C19.0772 13.3393 19.0173 13.5596 18.896 13.7234C18.7889 13.868 18.6476 13.9811 18.4875 14.0506C18.3065 14.1291 18.0915 14.1291 17.6625 14.1291H7.90088M8.17041 21.5807C7.06584 21.5807 6.17041 20.6275 6.17041 19.4517C6.17041 18.2759 7.06584 17.3227 8.17041 17.3227C9.27498 17.3227 10.1704 18.2759 10.1704 19.4517C10.1704 20.6275 9.27498 21.5807 8.17041 21.5807Z"
                                stroke="currentColor"
                                strokeWidth="current"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className={styles.header__cart_number}>1</span>
                    </button>
                    <button className={styles.header__burger_button}>
                        <span className={styles.burger__item}></span>
                        <span className={styles.burger__item}></span>
                    </button>

                    <div className={styles.header__login_wrapper}>
                        <button className={styles.header__login_button}>
                            <img src={headerSignup} width="24px" height="24px" alt="Login icon" />
                            Login
                        </button>
                        <button className={styles.header__signup_button}>
                            <img src={headerLogin} width="24px" height="24px" alt="Logout icon" />
                            Sign up
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;

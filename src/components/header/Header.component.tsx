import headerCart from '@/image/header-cart.png';
import headerLogin from '@/image/header-login.png';
import headerSignup from '@/image/header-signup.png';
import headerLogo from '@/image/main-logo.png';
import headerThemeDark from '@/image/theme-dark.png';
import headerThemeElement from '@/image/theme-element.png';
import headerThemeLightActive from '@/image/theme-light_active.png';

import styles from './Header.module.css';

const AboutPage = 'About.component.tsx';
const ProductsPage = '#';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo_wrapper}>
                        <a className={styles.header__logo_link} href={AboutPage}>
                            <img className={styles.header__logo} src={headerLogo} width="40px" height="40px" alt="Logo" />
                        </a>
                        <div className={styles.header__theme}>
                            <button className={`${styles.header__theme_button_light} ${styles.button_default}`}>
                                <img
                                    className={styles.header__theme_icon}
                                    src={headerThemeLightActive}
                                    width="30px"
                                    height="34px"
                                    alt="Light icon"
                                />
                            </button>
                            <img className={styles.header__theme_icon} src={headerThemeElement} alt="Element" />
                            <button className={`${styles.header__theme_button_dark} ${styles.button_default}`}>
                                <img
                                    className={styles.header__theme_icon}
                                    src={headerThemeDark}
                                    width="30px"
                                    height="34px"
                                    alt="Dark icon"
                                />
                            </button>
                        </div>
                    </div>

                    <nav className={styles.header__navigation}>
                        <ul className={styles.navigation__list}>
                            <li className={styles.navigation__item}>
                                <a className={styles.navigation__link} href={AboutPage}>
                                    About
                                </a>
                            </li>
                            <li className={styles.navigation__item}>
                                <a className={styles.navigation__link} href={ProductsPage}>
                                    Products
                                </a>
                            </li>
                        </ul>

                        <button className={`${styles.header__cart_button} ${styles.button_default}`}>
                            <img className={styles.header__cart_icon} src={headerCart} width="24px" height="24px" alt="Cart" />
                            <span className={styles.header__cart_number}>1</span>
                        </button>
                        <button className={`${styles.header__burger_button} ${styles.button_default}`}>
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
}

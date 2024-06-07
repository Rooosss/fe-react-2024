import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './components/about/About.component.tsx';
import Footer from './components/footer/Footer.component.tsx';
import Header from './components/header/Header.component.tsx';
import ProductsList from './components/product/ProductsList.component.tsx';

import styles from './App.module.css';

export default function App() {
    const [isShowPage, setPage] = useState<'About' | 'ProductsList'>('About');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const handleShowAbout = () => {
        setPage('About');
    };

    const handleShowProducts = () => {
        setPage('ProductsList');
    };

    return (
        <>
            <div className={`${theme}-theme`}>
                <Header
                    onShowAbout={handleShowAbout}
                    onShowProducts={handleShowProducts}
                    showTheme={changeTheme}
                    theme={theme}
                    isShowPage={isShowPage}
                />
                <main className={styles.home}>
                    <div className={styles.container}></div>
                </main>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/products" element={<ProductsList />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

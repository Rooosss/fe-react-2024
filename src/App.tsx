import { useState } from 'react';
import React from 'react';

import About from './components/about/About.component.tsx';
import Footer from './components/footer/Footer.component.tsx';
import Header from './components/header/Header.component.tsx';
import ProductsList from './components/product/ProductsList.component.tsx';

import styles from './App.module.css';

function App() {
    const apiUrl = 'https://ma-backend-api.mocintra.com/api/v1/products?limit=40&offset=10';
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
                    <div className={styles.container}>{isShowPage === 'About' ? <About /> : <ProductsList apiUrl={apiUrl} />}</div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;

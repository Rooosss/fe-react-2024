import { useState } from 'react';
import React from 'react';

import About from './components/about/About.component.tsx';
import Footer from './components/footer/Footer.component.tsx';
import Header from './components/header/Header.component.tsx';
import ProductsList from './components/product/ProductsList.component.tsx';

import styles from './App.module.css';

function App() {
    const apiUrl = 'https://ma-backend-api.mocintra.com/api/v1/products?limit=8&offset=0';
    const [isShowPage, setPage] = useState<string>('About');

    const handleShowAbout = () => {
        setPage('About');
    };

    const handleShowProducts = () => {
        setPage('ProductsList');
    };

    return (
        <>
            <Header onShowAbout={handleShowAbout} onShowProducts={handleShowProducts} />
            <main className={styles.home}>
                <div className={styles.container}>{isShowPage === 'About' ? <About /> : <ProductsList apiUrl={apiUrl} />}</div>
            </main>
            <Footer />
        </>
    );
}

export default App;

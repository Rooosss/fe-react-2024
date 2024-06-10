import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import styles from '@/App.module.css';
import Footer from '@/components/footer/Footer.component.tsx';
import Header from '@/components/header/Header.component.tsx';

export default function LayoutComponent() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className={`${theme}-theme`}>
            <Header showTheme={changeTheme} theme={theme} />
            <main className={styles.home}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}

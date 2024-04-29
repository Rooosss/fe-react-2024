import AboutComponent from './components/about/About.component.tsx';
import FooterComponent from './components/footer/Footer.component.tsx';
import HeaderComponent from './components/header/Header.component.tsx';

import styles from './App.module.css';

export default function App() {
    return (
        <>
            <HeaderComponent />
            <main className={styles.home}>
                <div className={styles.container}>
                    <AboutComponent />
                </div>
            </main>
            <FooterComponent />
        </>
    );
}

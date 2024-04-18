import AboutComponent from './components/block/About.component.tsx';

import styles from './App.module.css';

export default function App() {
    return (
        <>
            <main className={styles.home}>
                <div className={styles.container}>
                    <AboutComponent />
                </div>
            </main>
        </>
    );
}

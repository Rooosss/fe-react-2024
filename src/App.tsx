import AboutComponent from './components/block/About.tsx';

import './App.css';
import './components/block/About.style.css';

export default function App() {
    return (
        <>
            <main className="home">
                <div className="container">
                    <AboutComponent />
                </div>
            </main>
        </>
    );
}

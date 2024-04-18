import AboutComponent from './components/block/About.component.tsx';

import './App.module.css';
import './components/block/About.css';

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

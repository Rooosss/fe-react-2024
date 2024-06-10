import { HashRouter, Route, Routes } from 'react-router-dom';

import About from './components/about/About.component.tsx';
import LayoutComponent from './components/layoutComponent/LayoutComponent.tsx';
import NotFound from './components/NotFound/NotFound.component.tsx';
import ProductsList from './components/product/ProductsList.component.tsx';
export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<LayoutComponent />}>
                    <Route index element={<About />} />
                    <Route path="products" element={<ProductsList />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

import { NavLink } from 'react-router-dom';

import styles from '@/components/NotFound/NotFound.module.css';
export default function NotFound() {
    return (
        <div className={styles.notfound__page}>
            <h1>NotFound</h1>
            <NavLink to={'/'}>Go Home</NavLink>
        </div>
    );
}

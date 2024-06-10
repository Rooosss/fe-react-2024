import { Link } from 'react-router-dom';

import styles from '@/components/NotFound/NotFound.module.css';
export default function NotFound() {
    return (
        <div className={styles.notfound__page}>
            <h1 className={styles.main__title}>Not found page</h1>
            <Link to={'/'}>Go Home</Link>
        </div>
    );
}

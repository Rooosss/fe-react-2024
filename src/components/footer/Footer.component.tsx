import FacebookIcon from '@/image/fb-icon.png';
import InstagramIcon from '@/image/insta-icon.png';
import LinkedinIcon from '@/image/linkedin-icon.png';

import styles from './Footer.module.css';

const FacebookLink = '#';
const LinkedinLink = 'https://www.linkedin.com/in/rostyslav-vyshemirskyi-b33bbb1b4/';
const InstagramLink = 'https://www.instagram.com/rostik_v_/';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <span className={styles.footer__line}></span>
                <div className={styles.footer__social_link}>
                    <a className={styles.footer__social_item} href={FacebookLink}>
                        <img className={styles.footer__social_image} src={FacebookIcon} width="25px" height="25px" alt="facebook icon" />
                    </a>
                    <a className={styles.footer__social_item} href={LinkedinLink}>
                        <img className={styles.footer__social_image} src={LinkedinIcon} width="25px" height="25px" alt="Linkedin icon" />
                    </a>
                    <a className={styles.footer__social_item} href={InstagramLink}>
                        <img className={styles.footer__social_image} src={InstagramIcon} width="25px" height="25px" alt="Instagram icon" />
                    </a>
                </div>
                <p className={styles.footer__description}>
                    Made with 💗 on course{' '}
                    <a className={styles.footer__description_link} href="https://www.mastersacademy.education/frontend-for-beginners-it">
                        &#39;Intro to React&#39; from Masters Academy in 2024
                    </a>{' '}
                    by Rostyslav
                </p>
            </div>
        </footer>
    );
}

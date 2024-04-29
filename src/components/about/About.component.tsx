import aboutImage from '@/assets/image/image-about.png';

import stylesAbout from './About.module.css';

const MOCLink = 'https://www.mastersacademy.education/frontend-react-it';
const TelegramLink = '//t.me/Rohanskyi';
const GithubLink = 'https://github.com/Rooosss';

export default function About() {
    return (
        <section className={stylesAbout.about}>
            <div className={stylesAbout.about__description}>
                <h1 className={stylesAbout.about__title}>About me</h1>
                <p className={stylesAbout.about__text}>
                    Hi! My name is Rostyslav and I&#39;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                    React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p className={stylesAbout.about__text}>
                    This page was page was developed during the course &#39;
                    <a className={stylesAbout.about__link} href={MOCLink}>
                        Intro to React
                    </a>
                    &#39; from Masters Academy in 2024.
                </p>
                <p className={stylesAbout.about__text}>
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                </p>
                <p className={stylesAbout.about__text}>
                    You can contact me via{' '}
                    <a className={stylesAbout.about__link} href={TelegramLink}>
                        Telegram
                    </a>{' '}
                    and check out my{' '}
                    <a className={stylesAbout.about__link} href={GithubLink}>
                        GitHub
                    </a>
                    .
                </p>
            </div>
            <img className={stylesAbout.about__image} src={aboutImage} alt="About" />
        </section>
    );
}

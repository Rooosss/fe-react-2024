import aboutImage from '@/image/about-img.svg';

export default function About() {
    return (
        <section className="about">
            <div className="about__description">
                <h1 className="about__title">About me</h1>
                <p className="about__text">
                    Hi! My name is Rostyslav Vyshemirskyi and I&#39;m a Junior Frontend Developer. I am already familiar with main Web
                    Technologies like React, HTML, CSS, JavaScript and Git version control system.
                    <br />
                    <br />
                    This page was page was developed during the course &#39;
                    <a href="https://www.mastersacademy.education/frontend-react-it">Intro to React</a>
                    &#39; from Masters Academy in 2024.
                    <br />
                    <br />
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                    <br />
                    <br />
                    You can contact me via
                    <a href="//t.me/Rohanskyi"> Telegram</a> and check out my
                    <a href="https://github.com/Rooosss"> GitHub</a>.
                </p>
            </div>
            <img className="about__image" src={aboutImage} alt="About image" />
        </section>
    );
}

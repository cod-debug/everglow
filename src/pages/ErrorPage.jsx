import { Link } from "react-router-dom";

export default function ErrorPage() {
    window.scrollTo(0, 0);
    return (
        <Link
            to="/"
            className="text-primary overflow-hidden max-w-[100vw] max-h-[100vh]"
        >
            <header className="top-header"></header>

            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>

            <div className="lamp__wrap">
                <div className="lamp">
                    <div className="cable"></div>
                    <div className="cover"></div>
                    <div className="in-cover">
                        <div className="bulb"></div>
                    </div>
                    <div className="light"></div>
                </div>
            </div>
            <section className="error">
                <div className="error__content">
                    <div className="error__message message">
                        <h1 className="message__title">Something went wrong</h1>
                        <p className="message__text">Failed to access data.</p>
                    </div>
                    <div className="error__nav e-nav">
                        <a
                            href="https://codepen.io/uiswarup/pen/qBebRpq"
                            target="_blanck"
                            className="e-nav__link"
                        ></a>
                    </div>
                </div>
            </section>
        </Link>
    );
}

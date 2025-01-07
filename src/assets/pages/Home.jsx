import React from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="top">
                <div className="top-container">
                    <div className="button-container">
                        <button
                            type="button"
                            className="linkedin-button"
                            onClick={() =>
                                window.location.href =
                                "https://www.linkedin.com/in/rachelli15/?hl=en"
                            }
                        >
                            LINKEDIN
                        </button>
                        <button
                            type="button"
                            className="resume-button"
                            onClick={() =>
                                window.location.href =
                                "https://www.instagram.com/rachey_rache15/?hl=en"
                            }
                        >
                            RESUME
                        </button>
                    </div>
                </div>

                <div className="about">
                    <h1 className="extra-bold-title">
                        <span className="highlight">Hi!</span> I'm Rachel Li
                    </h1>
                    <p className="about-bio-one">
                        🧠💻 I’m a third-year student at UC Berkeley, studying Cognitive Science and Data Science!
                    </p>
                    <p className="about-bio-three">
                        🖌️✨ I have a strong passion for UI/UX Design, Product Management, User Research, and more! In
                        my free time, I like to hit tennis, crochet, and sew stuffed animals!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;

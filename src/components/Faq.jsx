import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Faq() {
    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        "Lorem ipsum dolor sit amet?",
        "Lorem ipsum dolor sit amet?",
        "Lorem ipsum dolor sit amet?",
        "Lorem ipsum dolor sit amet?"
    ];

    const answers = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
    ];

    return (
        <div className="padding">
            <div data-aos="fade-up" id="faq" className="faq">
                <p
                    style={{
                        textAlign: 'center',
                        display: 'inline-block',
                        width: '100%',
                        marginBottom: '30px'
                    }}
                    className="section__heading"
                >
                    Any questions?
                </p>
                <div className="faq__questions">
                    {questions.map((question, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <button
                                className={`accordion text ${activeIndex === index ? "active" : ""}`}
                                onClick={() => handleAccordionClick(index)}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <span>{question}</span>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    {activeIndex === index ? '×' : '+'}
                                </span>
                            </button>
                            <div
                                className="panel"
                                style={{
                                    maxHeight: activeIndex === index ? "500px" : "0",
                                    overflow: "hidden",
                                    transition: "max-height 0.3s ease"
                                }}
                            >
                                <p style={{
                                    opacity: '0.7',
                                    padding: '10px 20px',
                                    margin: 0
                                }} className="text">{answers[index]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;

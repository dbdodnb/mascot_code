import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function Faq() {

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Change language at the component level
    };

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
        t('faq1'),
        t('faq2'),
        t('faq3'),
        t('faq4'),
    ];

    const answers = [
        t('faqAnsw1'),
        t('faqAnsw2'),
        t('faqAnsw3'),
        t('faqAnsw4'),
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
                    {t('faqTitle')}
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
                                <p 
                                    style={{
                                        opacity: '0.7',
                                        padding: '10px 20px',
                                        margin: 0
                                    }}
                                    className="text"
                                    dangerouslySetInnerHTML={{ __html: answers[index].replace(/\n\n/g, "<br /><br />") }}
                                ></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;

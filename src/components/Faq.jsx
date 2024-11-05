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
        "Is there any participation fee?",
        "What safety measures are in place at the camp?",
        "How are language classes conducted?",
        "How is the staff selected?"
    ];

    const answers = [
        "Our camp is non-profit, and all counselors and organizers work on a volunteer basis. Therefore, last year the participant fee was only 1700 UAH for organizational expenses (accommodation, meals, and gifts). An exact amount for the next year camp will be announced soon.",
        
        "The camp has strict safety measures, including 24-hour access to medical staff, a teen psychologist, location security, and adherence to all sanitary standards. The camp area also has access to a bomb shelter, which all participants are required to go to in case of danger.",
        
        "<strong>Duration of one lesson:</strong> 50 minutes. The break between them varies from 10 to 30 minutes, depending on the workload.\n\nThis year's program includes classes on the following topics: human rights, state policy, economy, ecology, culture, and art, as well as additional classes on project management. At the end of the camp, all participants implement a social project.\n\nDuring the program, all participants communicate only in English. In case of an emergency, we switch to Ukrainian.",
        
        "The team consists of adult volunteers with an English proficiency of at least Advanced level and an active pro-Ukrainian stance. It is important for us that all team members share the camp values and have both the skills and experience working with teenagers.\n\nEach member underwent a preliminary selection process, including an application form and an interview. The counselors are working together on program activities two months before the start in an online format."
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

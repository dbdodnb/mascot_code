import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { useTranslation } from 'react-i18next';

function About() {

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

    return(
        <div className="padding">
            <div data-aos="fade-up" id="about" className="about">
                <div className="about__text">
                    <p className="section__heading">{t('about')}</p>
                    <p className="text">{t('about1')}</p>
                    <p className="text">{t('about2')}
                    </p>
                </div>
                <div className="about__cards">
                    <div className="about__element">
                        <div></div>
                        <a href="" className="text text__underline">Lorem ipsum</a>
                    </div>
                    <div className="about__element">
                        <div></div>
                        <a href="" className="text text__underline">Lorem ipsum</a>
                    </div>
                    <div className="about__element">
                        <div></div>
                        <a href="" className="text text__underline">Lorem ipsum</a>
                    </div>
                    <div className="about__element">   
                        <div></div>
                        <a href="" className="text text__underline">Lorem ipsum</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
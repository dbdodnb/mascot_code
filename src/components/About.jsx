import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

function About() {

    const { t, i18n } = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Change language at the component level
    };

    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 850);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <div className="padding">
            <div data-aos="fade-up" id="about" className="about">
                <div className="about__text">
                    <p className="section__heading">{t('about')}</p>
                    <p className="text">{t('about1')}</p>
                    <p className="text">{t('about2')}</p>
                </div>
                <div className="about__cards">
                    {isMobile ? (
                        <Swiper 
                            spaceBetween={10} 
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                501: {
                                    slidesPerView: 2
                                },
                                751: {
                                    slidesPerView: 3
                                }
                            }}
                            pagination={{
                                clickable: true,
                                renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`,
                              }}
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 4500, 
                                disableOnInteraction: false
                            }}
                        >
                            <SwiperSlide style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <div className="about__element">
                                    <div></div>
                                    <p className="text text_underline">Lorem ipsum</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <div className="about__element">
                                    <div></div>
                                    <p className="text text_underline">Lorem ipsum</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <div className="about__element">
                                    <div></div>
                                    <p className="text text_underline">Lorem ipsum</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <div className="about__element">
                                    <div></div>
                                    <p className="text text_underline">Lorem ipsum</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    ) : (
                        <div style={{
                            width: '100%'
                        }} className="about__cards">
                            <div className="about__element">
                                <div></div>
                                <p className="text text_underline">Lorem ipsum</p>
                            </div>
                            <div className="about__element">
                                <div></div>
                                <p className="text text_underline">Lorem ipsum</p>
                            </div>
                            <div className="about__element">
                                <div></div>
                                <p className="text text_underline">Lorem ipsum</p>
                            </div>
                            <div className="about__element">
                                <div></div>
                                <p className="text text_underline">Lorem ipsum</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default About;

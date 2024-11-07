import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative, Autoplay } from 'swiper/modules';
import pic1 from '../img/bosko.jpg';
import pic2 from '../img/bosko2.jpg';
import pic3 from '../img/bosko3.webp';
import pic4 from '../img/bosko4.jpg';
import { useTranslation } from "react-i18next";

function Accomodations() {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Change language at the component level
    };

    const [swiperWidth, setSwiperWidth] = useState(window.innerWidth <= 1301 ? '40%' : '50%');

    useEffect(() => {
        // Update swiper width on window resize
        const handleResize = () => {
            setSwiperWidth(window.innerWidth <= 1301 ? '40%' : '50%');
        };
        window.addEventListener('resize', handleResize);

        // Initialize AOS animations
        Aos.init({ once: true });
        Aos.refresh();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div data-aos="fade-up" className="padding padding_accomodations">
            <div id="accomodations" className="accomodations">
                <p style={{
                    color: "white",
                    paddingTop: '50px',
                    textAlign: 'right',
                    display: 'inline-block',
                    width: '100%'
                }} className="section__heading">{t('accomodationsTitle')}</p>
                <div className="accomodations__bullets">
                    <div>
                        <div className="bullet"></div>
                        <p className="text">{t('accomodations1')}</p>
                    </div>
                    <div>
                        <div className="bullet"></div>
                        <p className="text">{t('accomodations2')}</p>
                    </div>
                    <div>
                        <div className="bullet"></div>
                        <p className="text">{t('accomodations3')}</p>
                    </div>
                    <div>
                        <div className="bullet"></div>
                        <p className="text">{t('accomodations4')}</p>
                    </div>
                </div>
                <Swiper
                    style={{
                        width: swiperWidth,
                        height: '400px',
                        display: "flex",
                        justifySelf: 'flex-end',
                        alignSelf: 'center',
                        borderRadius: '25px',
                        marginRight: '0px'
                    }}
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    modules={[EffectCreative, Autoplay]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide style={{
                        background: '#114917',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '0px',
                    }}><img style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} src={pic1} alt="Participant 1" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#114917',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '0px'
                    }}><img style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} src={pic2} alt="Participant 2" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#114917',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '0px'
                    }}><img style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} src={pic3} alt="Participant 3" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#114917',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '0px'
                    }}><img style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} src={pic4} alt="Participant 4" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Accomodations;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative, Autoplay } from 'swiper/modules';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from "aos";
import "aos/dist/aos.css";
import pic1 from '../img/participants/1.png';
import pic2 from '../img/participants/2.jpg';
import pic3 from '../img/participants/3.jpg';
import pic4 from '../img/participants/4.jpg';
import pic5 from '../img/participants/5.jpg';
import pic6 from '../img/participants/6.jpg';
import pic7 from '../img/participants/7.jpg';
import pic8 from '../img/participants/8.jpg';
import { useTranslation } from "react-i18next";

function Participants() {

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

    const [swiperRef, setSwiperRef] = useState(null);
    const [slides, setSlides] = useState([]);

    // Update slides based on the current language
    useEffect(() => {
        setSlides([
        ]);
    }, [t, i18n.language]);

    return (
        <div className="padding">
            <div data-aos="fade-up" className="participants">
                <p
                    className="section__heading"
                    style={{
                        display: "inline-block",
                        width: "100%",
                        marginBottom: "50px",
                    }}
                >
                    {t('join')}
                </p>
                {/* First Swiper */}
                <Swiper
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
                    className="swiper"
                >
                    {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map((pic, index) => (
                        <SwiperSlide key={index} style={{ background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={pic} alt={`Participant ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="participants__info">
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">{t('join1')}</p>
                    </div>
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">{t('join2')}</p>
                    </div>
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">{t('join3')}</p>
                    </div>
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">{t('join4')}</p>
                    </div>
                </div>

                {/* Second Swiper */}
                <Swiper
                    className="swiper2"
                    modules={[Virtual, Navigation, Pagination, Autoplay]}
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    spaceBetween={40}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    virtual
                >
                    {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map((pic, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <img style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '25px' }} src={pic} alt={`Participant ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Participants;

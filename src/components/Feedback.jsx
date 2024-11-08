import React, { useState, useEffect } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from "aos";
import "aos/dist/aos.css";
import lisa from '../img/lisa.png';
import maryna from '../img/maryna.png';
import olena from '../img/olena.png';
import danylo from '../img/danylo.png';
import nastia from '../img/Anastasiia_Miniailo.png';
import { useTranslation } from "react-i18next";

function Feedback() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        Aos.init({ once: true });
        Aos.refresh();
    }, []);

    const [swiperRef, setSwiperRef] = useState(null);
    const [slides, setSlides] = useState([]);

    // Update slides based on the current language
    useEffect(() => {
        setSlides([
            {
                name: t('lisaName'),
                city: t('lisaCity'),
                age: "18",
                text: t('lisaReview'),
                photo: lisa,
            },
            {
                name: t('marynaName'),
                city: t('marynaCity'),
                age: "17",
                text: t('marynaReview'),
                photo: maryna,
            },
            {
                name: t('danyloName'),
                city: t('danyloCity'),
                age: "17",
                text: t('danyloReview'),
                photo: danylo,
            },
            {
                name: t('anastasiiaName'),
                city: t('anastasiiaCity'),
                age: "16",
                text: t('anastasiiaReview'),
                photo: nastia,
            },
            {
                name: t('olenaName'),
                city: t('olenaCity'),
                age: "17",
                text: t('olenaReview'),
                photo: olena,
            },
        ]);
    }, [t, i18n.language]); // Depend on `t` and `i18n.language` for updates

    return (
        <div className="padding">
            <div data-aos="fade-up" className="feedback">
                <p className="section__heading" style={{ textAlign: 'center', width: '100%' }}>
                    {t('reviews')}
                </p>
                <Swiper
                    modules={[Virtual, Navigation, Pagination, Autoplay]}
                    onSwiper={setSwiperRef}
                    slidesPerView={2}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{ delay: 9000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`,
                    }}
                    virtual
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        1100: {
                            slidesPerView: 2
                        }
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <div className="slide-content">
                                <div className="profile">
                                    <div
                                        className="profile-image"
                                        style={{
                                            backgroundImage: `url(${slide.photo})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    ></div>
                                    <div className="profile-info">
                                        <p className="profile-name">{slide.name}</p>
                                        <p className="profile-details">{slide.city}, {slide.age}</p>
                                    </div>
                                </div>
                                <p className="slide-text">{slide.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Feedback;

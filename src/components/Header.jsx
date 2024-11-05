import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules'
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';

function Header() {

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Change language at the component level
    };

    return(
        <>
            <div className="nav">
                    <div className="nav__logo"> </div>
                    <div className="nav__info">
                        <ul>
                            <li><a className="nav__link" href="#about">{t('about')}</a></li>
                            <li><a className="nav__link" href="#accomodations">{t('accomodations')}</a></li>
                            <li><a className="nav__link" href="#faq">{t('faq')}</a></li>
                            <li><LanguageSwitcher /></li>
                            <li><a style={{
                                textAlign: "center"
                            }} className="nav__button" href="#">{t('support')}</a></li>
                        </ul>
                    </div>
                </div>
            <div className="header">
                <div className="header__info padding">
                    <div className="header__text">
                        <p className="heading">Camp MASCOT</p>
                        <p className="text">{t('headerInfo')}
                        </p>
                        <p className="text text_underline">{t('applications')}</p>
                    </div>
                    <div className="header__slider">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
    </>
    )
}

export default Header
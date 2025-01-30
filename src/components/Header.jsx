import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsMenuOpen(false); // Close the menu after language switch
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="navBurger">
                <div className="navBurger__logo"></div>
                <div className="burgerButton" onClick={toggleMenu}>
                    <div>☰</div>
                </div>
                <ul className={`navBurger__items ${isMenuOpen ? 'show' : ''}`}>
                    <li><a className="nav__link text" href="#about" onClick={closeMenu}>{t('about')}</a></li>
                    <li><a className="nav__link text" href="#accomodations" onClick={closeMenu}>{t('accomodations')}</a></li>
                    <li><a className="nav__link text" href="#faq" onClick={closeMenu}>{t('faq')}</a></li>
                    <li style={{
                        fontFamily: '"Manrope", sans-serif'
                    }}>
                      <LanguageSwitcher onLanguageChange={handleChangeLanguage} />
                    </li>
                    <li><a target="_blank" className="nav__button text" href="https://gofund.me/ed6bb508" onClick={closeMenu}>{t('support')}</a></li>
                </ul>
            </div>

            <div className="nav">
                <div className="nav__logo"> </div>
                <div className="nav__info">
                    <ul>
                        <li><a className="nav__link" href="#about">{t('about')}</a></li>
                        <li><a className="nav__link" href="#accomodations">{t('accomodations')}</a></li>
                        <li><a className="nav__link" href="#faq">{t('faq')}</a></li>
                        <li><LanguageSwitcher onLanguageChange={handleChangeLanguage} /></li>
                        <li><a target="_blank" className="nav__button" href="https://gofund.me/ed6bb508">{t('support')}</a></li>
                    </ul>
                </div>
            </div>

            <div className="headerAdaptive">
                <div className="headerAdaptive__info">
                    <p className="heading">Camp MASCOT</p>
                    <p className="text">{t('headerInfo')}</p>
                    <p className="text text_underline">{t('applications')}</p>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false
                    }}
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

            <div className="header">
                <div className="header__info padding">
                    <div className="header__text">
                        <p className="heading">Camp MASCOT</p>
                        <p className="text">{t('headerInfo')}</p>
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
                            {[...Array(10)].map((_, index) => (
                                <SwiperSlide key={index}></SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;

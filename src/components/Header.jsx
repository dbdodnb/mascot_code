import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules'

function Header() {
    return(
        <>
            <div className="nav">
                    <div className="nav__logo"> </div>
                    <div className="nav__info">
                        <ul>
                            <li><a className="nav__link" href="#about">About us</a></li>
                            <li><a className="nav__link" href="#accomodations">Accomodations</a></li>
                            <li><a className="nav__link" href="#faq">FAQ</a></li>
                            <li></li>
                            <li><a className="nav__button" href="#">Support us</a></li>
                        </ul>
                    </div>
                </div>
            <div className="header">
                <div className="header__info padding">
                    <div className="header__text">
                        <p className="heading">Camp MASCOT</p>
                        <p className="text">Camp MASCOT is a 10-day program for Ukrainian proactive teenagers aimed to build a bright future in Ukraine.
                        </p>
                        <p className="text text_underline">Applications will be opened here soon!</p>
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
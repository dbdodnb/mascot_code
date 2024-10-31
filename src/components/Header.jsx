import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules'

function Header() {
    return(
        <div className="header">
            <div className="nav padding">
                <div className="nav__logo"> </div>
                <div className="nav__info">
                    <ul>
                        <li><a className="nav__link" href="#about">About us</a></li>
                        <li><a className="nav__link" href="#accomodations">Accomodations</a></li>
                        <li><a className="nav__link" href="#faq">FAQ</a></li>
                        <li><a className="nav__button" href="#">Support us</a></li>
                    </ul>
                </div>
            </div>
            <div className="header__info padding">
                <div className="header__text">
                    <p className="heading">Camp MASCOT</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                    <p className="text text_underline">Application forms would be opened soon!</p>
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
    )
}

export default Header
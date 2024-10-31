import React, {useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative, Autoplay } from 'swiper/modules';
import Aos from "aos";
import "aos/dist/aos.css"

function Participants(){

    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();
      }, []);

    return(
        <div className="padding">
            <div data-aos="fade-up" className="participants">
                <p
                    className="section__heading"
                    style={{
                        display: "inline-block",
                        width: "100%",
                        marginBottom: "50px",
                    }}
                >Who can join the camp?</p>
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
                    className="mySwiper"
                    >
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(../img/placeholder.png)',
                        }}
                    ></SwiperSlide>
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(../img/placeholder.png)',
                        }}
                    ></SwiperSlide>
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(../img/placeholder.png)',
                        }}
                    ></SwiperSlide>
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(../img/placeholder.png)',
                        }}
                    ></SwiperSlide>
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(../img/placeholder.png)',
                        }}
                    ></SwiperSlide>
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(../img/placeholder.png)',
                        }}
                    ></SwiperSlide>
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(../img/placeholder.png)',
                        }}
                    ></SwiperSlide>
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(../img/placeholder.png)',
                        }}
                    ></SwiperSlide>
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(../img/placeholder.png)',
                        }}
                    ></SwiperSlide>
                </Swiper>
                <div className="participants__info">
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participants
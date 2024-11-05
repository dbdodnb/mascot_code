import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative, Autoplay } from 'swiper/modules';
import Aos from "aos";
import "aos/dist/aos.css";
import pic1 from '../img/participants/1.png';
import pic2 from '../img/participants/2.jpg';
import pic3 from '../img/participants/3.jpg';
import pic4 from '../img/participants/4.jpg';
import pic5 from '../img/participants/5.jpg';
import pic6 from '../img/participants/6.jpg';
import pic7 from '../img/participants/7.jpg';
import pic8 from '../img/participants/8.jpg'

function Participants() {
    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();
    }, []);

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
                    Who can join the camp?
                </p>
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
                    <SwiperSlide style={{
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><img style={{
                        width: '100%'
                    }} src={pic1} alt="Participant 1" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><img style={{
                        width: '100%'
                    }} src={pic2} alt="Participant 1" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><img style={{
                        width: '100%'
                    }} src={pic3} alt="Participant 1" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><img style={{
                        width: '100%'
                    }} src={pic4} alt="Participant 1" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><img style={{
                        width: '100%'
                    }} src={pic5} alt="Participant 1" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><img style={{
                        width: '100%'
                    }} src={pic6} alt="Participant 1" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><img style={{
                        width: '100%'
                    }} src={pic7} alt="Participant 1" /></SwiperSlide>
                    <SwiperSlide style={{
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><img style={{
                        width: '100%'
                    }} src={pic8} alt="Participant 1" /></SwiperSlide>
                </Swiper>
                <div className="participants__info">
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">15-20 years old</p>
                    </div>
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">All over Ukraine</p>
                    </div>
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">72 participants</p>
                    </div>
                    <div className="participants__bullet">
                        <div></div>
                        <p className="text">Ready to engage, learn, and grow teenagers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Participants;

import React, { useState, useEffect } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from "aos";
import "aos/dist/aos.css";
import sasha from '../img/team/Sasha_Sui.png'
import nystia from '../img/team/Anastasiia_Khomenko.png'
import alex from '../img/team/Oleksandr_Marchyshak.png'
import illia from '../img/team/Illia_Chaikovskyi.png'
import yulia from '../img/team/Yuliia_Buhera.png'

function Feedback() {

    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();
    }, []);

    const [swiperRef, setSwiperRef] = useState(null);

    const [slides] = useState([
        {
            name: "Oleksandra Viskovatova",
            role: "Director of People",
            photo: sasha,
        },
        {
            name: "Anastasiia Khomenko",
            role: "Program Director",
            photo: nystia,
        },
        {
            name: "Oleksandr Marchyshak",
            role: "Partnership Manager",
            photo: alex,
        },
        {
            name: "Yuliia Buhera",
            role: "Location Manager",
            photo: yulia,
        },
        {
            name: "Illia Chaikovskyi",
            role: "Finance Manager",
            photo: illia,
        },
    ]);

    return (
        <div className="padding">
            <div data-aos="fade-up" className="feedback">
                <p style={{
                    textAlign: 'center',
                    display: 'inline-block',
                    width: '100%'
                }} className="section__heading">Organizers 2025</p>
                <Swiper
                    modules={[Virtual, Navigation, Pagination, Autoplay]}
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={false}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-bullet"></span>`;
                        }
                    }}
                    virtual
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <div className="slide-content">
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }} className="profile">
                                    <div className="organizers-image" style={{ 
                                        width: '90%',
                                        paddingBottom: '90%',
                                        borderRadius: '50%',
                                        backgroundImage: `url(${slide.photo})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        border: '3px solid #6C4320',
                                        boxSizing: 'border-box'
                                    }}></div>
                                    <div style={{
                                        width: '100%',
                                        marginTop: '20px',
                                        textAlign: 'center'
                                    }} className="profile-info">
                                        <p className="profile-name">{slide.name}</p>
                                        <p className="profile-details">{slide.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Feedback;

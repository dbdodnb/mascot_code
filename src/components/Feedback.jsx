import React, { useState, useEffect } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from "aos";
import "aos/dist/aos.css";
import lisa from '../img/lisa.png'
import maryna from '../img/maryna.png'
import olena from '../img/olena.png'
import danylo from '../img/danylo.png'
import nastia from '../img/Anastasiia_Miniailo.png'

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
            name: "Lisa Voloshyna",
            city: "Kyiv",
            age: "18",
            text: "MASCOT is like a mini life that really changes me. I’ve overcome some of my fears, found new emotions, and now I feel like a different person. Everything that fills the camp — lectures, activities, energizers — will stay in my heart forever 💋",
            photo: lisa,
        },
        {
            name: "Maryna Polyvach",
            city: "Kyiv",
            age: "17",
            text: "Every year, I return to MASCOT for the incredible people and the atmosphere they create. This is a place where I feel comfortable and happy, surrounded by people who inspire me to create even more throughout the year.",
            photo: maryna,
        },
        {
            name: "Danylo Domskyi",
            city: "Zhytomyr",
            age: "17",
            text: "MASCOT is something that changes your life once and for all. Once you come to this camp, trust me, it becomes a part of your life immediately. The people, atmosphere, values, activities — they all enter your life and stay with you for years to come.",
            photo: danylo,
        },
        {
            name: "Anastasiia Miniailo",
            city: "Kharkiv",
            age: "16",
            text: "MASCOT is the place that gave me invaluable experience of getting to know other parts of the community, the one you can’t explain in 3 sentences. I forgot for 10 days about everyday personal space bubbles, by living inside bubbles full of energizers, PDM sessions, incredible lectures and unimaginably cool people.",
            photo: nastia
        },
        {
            name: "Olena Khiznychenko",
            city: "Mykolaiv",
            age: "17",
            text: "Despite having attended dozens of projects before, MASCOT is the best one I have ever been to. It is a place with the closest knit-tight community, where I met people that I can easily call family just after one and a half weeks. Friendships made at MASCOT will last for years after the project.",
            photo: olena,
        },
    ]);

    return (
        <div className="padding">
            <div data-aos="fade-up" className="feedback">
                <p style={{
                    textAlign: 'center',
                    display: 'inline-block',
                    width: '100%'
                }} className="section__heading">Reviews</p>
                <Swiper
                    modules={[Virtual, Navigation, Pagination, Autoplay]}
                    onSwiper={setSwiperRef}
                    slidesPerView={2}
                    centeredSlides={false}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 9000,
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
                                <div className="profile">
                                    <div className="profile-image" style={{ 
                                        backgroundImage: `url(${slide.photo})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}></div>
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

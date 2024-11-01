import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Feedback() {
    const [swiperRef, setSwiperRef] = useState(null);

    const [slides] = useState([
        {
            name: "John Doe",
            city: "New York",
            age: "32",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            name: "Jane Smith",
            city: "Los Angeles",
            age: "29",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            name: "Alex Johnson",
            city: "Chicago",
            age: "41",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            name: "Emily Davis",
            city: "Houston",
            age: "36",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            name: "Michael Brown",
            city: "Phoenix",
            age: "27",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            name: "Sarah Wilson",
            city: "Philadelphia",
            age: "34",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        }
    ]);

    return (
        <div className="padding">
            <div className="feedback">
                <p style={{
                    textAlign: 'center',
                    display: 'inline-block',
                    width: '100%'
                }} className="section__heading">Reviews</p>
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={setSwiperRef}
                    slidesPerView={2}
                    centeredSlides={false}
                    spaceBetween={30}
                    navigation={true}
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
                                    <div className="profile-image"></div>
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

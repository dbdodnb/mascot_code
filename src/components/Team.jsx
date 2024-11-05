import React, { useState, useEffect } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from "aos";
import "aos/dist/aos.css";
import sasha from '../img/team/Sasha_Sui.png';
import nystia from '../img/team/Anastasiia_Khomenko.png';
import alex from '../img/team/Oleksandr_Marchyshak.png';
import illia from '../img/team/Illia_Chaikovskyi.png';
import yulia from '../img/team/Yuliia_Buhera.png';
import { useTranslation } from "react-i18next";

function Team() {
  const { t, i18n } = useTranslation();

  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState([]);

  // Initialize AOS animation
  useEffect(() => {
    Aos.init({ once: true });
    Aos.refresh();
  }, []);

  // Update slides based on the current language
  useEffect(() => {
    setSlides([
      {
        name: t('sasha'),
        role: "Director of People",
        photo: sasha,
      },
      {
        name: t('nystia'),
        role: "Program Director",
        photo: nystia,
      },
      {
        name: t('alex'),
        role: "Partnership Manager",
        photo: alex,
      },
      {
        name: t('yulia'),
        role: "Location Manager",
        photo: yulia,
      },
      {
        name: t('illia'),
        role: "Finance Manager",
        photo: illia,
      },
    ]);
  }, [t, i18n.language]); // Depend on `t` and `i18n.language` for updates

  return (
    <div className="padding">
      <div data-aos="fade-up" className="feedback">
        <p className="section__heading" style={{ textAlign: 'center', width: '100%' }}>
          {t('organizers')}
        </p>
        <Swiper
          modules={[Virtual, Navigation, Pagination, Autoplay]}
          onSwiper={setSwiperRef}
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`,
          }}
          virtual
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className="slide-content">
                <div className="profile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    className="organizers-image"
                    style={{
                      width: '90%',
                      paddingBottom: '90%',
                      borderRadius: '50%',
                      backgroundImage: `url(${slide.photo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '3px solid #6C4320',
                    }}
                  ></div>
                  <div className="profile-info" style={{ width: '100%', marginTop: '20px', textAlign: 'center' }}>
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

export default Team;

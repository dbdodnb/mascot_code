import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import respect from '../img/values/повага.png'
import inclusivity from '../img/values/інклюзивність.png'
import communication from '../img/values/комунікації.png'
import trust from '../img/values/довіра.png'
import community from '../img/values/спільнота.png'
import equality from '../img/values/рівність.png'

function Values() {
    const { t, i18n } = useTranslation();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);
    const [expandedBlock, setExpandedBlock] = useState(null);
    const [hoveredBlock, setHoveredBlock] = useState(null);

    useEffect(() => {
        Aos.init({ once: true });
        Aos.refresh();

        const handleResize = () => setIsMobile(window.innerWidth <= 650);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const blocks = [
        { title: t('respect'), info: t('respectDef'), image: respect },
        { title: t('inclusivity'), info: t('inclusivityDef'), image: inclusivity },
        { title: t('communication'), info: t('communicationDef'), image: communication },
        { title: t('trust'), info: t('trustDef'), image: trust },
        { title: t('community'), info: t('communityDef'), image: community },
        { title: t('equality'), info: t('equalityDef'), image: equality },
    ];

    const toggleExpand = (index) => {
        // Toggle the expanded state only on click, not on hover
        setExpandedBlock((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="padding">
            <div data-aos="fade-up" className="values">
                <p className="section__heading section__heading_center">{t('values')}</p>

                {isMobile ? (
                    <Swiper 
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true
                        }}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {blocks.map((block, index) => {
                            const isExpanded = expandedBlock === index || hoveredBlock === index;

                            return (
                                <SwiperSlide style={{ width: '80%' }} key={index}>
                                    <div
                                        className="value-block"
                                        onClick={() => toggleExpand(index)}
                                        onMouseEnter={() => setHoveredBlock(index)}
                                        onMouseLeave={() => setHoveredBlock(null)}
                                        style={{ 
                                            transform: isExpanded ? "scale(1.1)" : "scale(1)" 
                                        }}
                                    >
                                        <div
                                            className="img"
                                            style={{
                                                display: isExpanded ? "none" : "block",
                                                backgroundImage: `url(${block.image})`,
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: "center",
                                                width: "100%",
                                                height: "auto",
                                                border: "none",
                                                marginTop: "0px",
                                            }}
                                        ></div>
                                        <p
                                            className="text"
                                            style={{ display: isExpanded ? "none" : "block", textAlign: 'center' }}
                                        >
                                            {block.title}
                                        </p>
                                        <p
                                            className="text values__info"
                                            style={{ display: isExpanded ? "inline" : "none" }}
                                        >
                                            {block.info}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                ) : (
                    <div className="values__container">
                        {blocks.map((block, index) => {
                            const isExpanded = expandedBlock === index || hoveredBlock === index;
                            
                            return (
                                <div
                                    key={index}
                                    className="value-block"
                                    onClick={() => toggleExpand(index)}
                                    onMouseEnter={() => setHoveredBlock(index)}
                                    onMouseLeave={() => setHoveredBlock(null)}
                                    style={{ 
                                        transform: isExpanded ? "scale(1.1)" : "scale(1)" 
                                    }}
                                >
                                    <div
                                        className="img"
                                        style={{
                                            display: isExpanded ? "none" : "block",
                                            backgroundImage: `url(${block.image})`,
                                            backgroundSize: "contain",
                                            backgroundPosition: "center",
                                            backgroundRepeat: 'no-repeat',
                                            width: "200px",
                                            height: "200px",
                                            border: "none",
                                            marginTop: "0px",
                                        }}
                                    ></div>
                                    <p
                                        className="text"
                                        style={{ display: isExpanded ? "none" : "block", textAlign: 'center' }}
                                    >
                                        {block.title}
                                    </p>
                                    <p
                                        className="text values__info"
                                        style={{ display: isExpanded ? "inline" : "none" }}
                                    >
                                        {block.info}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Values;

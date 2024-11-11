import React, { useRef, useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import placeholder from '../img/placeholder.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

function Values() {

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

    useEffect(() => {
        Aos.init({ once: true });
        Aos.refresh();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 650);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const blocks = [
        { title: t('respect'), info: t('respectDef'), image: placeholder },
        { title: t('inclusivity'), info: t('inclusivityDef'), image: placeholder },
        { title: t('communication'), info: t('communicationDef'), image: placeholder },
        { title: t('trust'), info: t('trustDef'), image: placeholder },
        { title: t('community'), info: t('communityDef'), image: placeholder },
        { title: t('equality'), info: t('equalityDef'), image: placeholder },
    ];

    const [expandedBlocks, setExpandedBlocks] = useState(Array(blocks.length).fill(false));
    const [hoveredBlock, setHoveredBlock] = useState(null);

    const titleRefs = useRef([]);
    const infoRefs = useRef([]);
    const blockRefs = useRef([]);

    const toggleExpand = (index) => {
        setExpandedBlocks((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    const handleMouseEnter = (index) => setHoveredBlock(index);
    const handleMouseLeave = () => setHoveredBlock(null);

    const setRef = (refArray, index) => (el) => {
        refArray.current[index] = el;
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
                            const isExpanded = expandedBlocks[index];
                            const isHovered = hoveredBlock === index;

                            return (
                                <SwiperSlide style={{
                                    width: '80%'
                                }} key={index}>
                                    <div
                                        ref={setRef(blockRefs, index)}
                                        className="value-block"
                                        onClick={() => toggleExpand(index)}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        style={{ 
                                            transform: isExpanded || isHovered ? "scale(1.1)" : "scale(1)" 
                                        }}
                                    >
                                        <div
                                            className="img"
                                            style={{
                                                display: isExpanded || isHovered ? "none" : "block",
                                                backgroundImage: `url(${block.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                width: "200px",
                                                height: "200px",
                                                border: "none",
                                                marginTop: "0px",
                                            }}
                                        ></div>
                                        <p
                                            ref={setRef(titleRefs, index)}
                                            id={`valuesTitle${index}`}
                                            className="text"
                                            style={{ display: isExpanded || isHovered ? "none" : "block", textAlign: 'center' }}
                                        >
                                            {block.title}
                                        </p>
                                        <p
                                            ref={setRef(infoRefs, index)}
                                            className="text values__info"
                                            style={{ display: isExpanded || isHovered ? "inline" : "none" }}
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
                            const isExpanded = expandedBlocks[index];
                            const isHovered = hoveredBlock === index;
                            
                            return (
                                <div
                                    key={index}
                                    ref={setRef(blockRefs, index)}
                                    className="value-block"
                                    onClick={() => toggleExpand(index)}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ 
                                        transform: isExpanded || isHovered ? "scale(1.1)" : "scale(1)" 
                                    }}
                                >
                                    <div
                                        className="img"
                                        style={{
                                            display: isExpanded || isHovered ? "none" : "block",
                                            backgroundImage: `url(${block.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            width: "200px",
                                            height: "200px",
                                            border: "none",
                                            marginTop: "0px",
                                        }}
                                    ></div>
                                    <p
                                        ref={setRef(titleRefs, index)}
                                        id={`valuesTitle${index}`}
                                        className="text"
                                        style={{ display: isExpanded || isHovered ? "none" : "block", textAlign: 'center' }}
                                    >
                                        {block.title}
                                    </p>
                                    <p
                                        ref={setRef(infoRefs, index)}
                                        className="text values__info"
                                        style={{ display: isExpanded || isHovered ? "inline" : "none" }}
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

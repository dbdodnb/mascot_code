import React, { useRef, useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Values() {
    
    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();
      }, []);

    const blocks = [
        { title: "Value 1", info: "Information about Value 1.", image: "../img/placeholder.png" },
        { title: "Value 2", info: "Information about Value 2.", image: "../img/placeholder.png" },
        { title: "Value 3", info: "Information about Value 3.", image: "../img/placeholder.png" },
        { title: "Value 4", info: "Information about Value 4.", image: "../img/placeholder.png" },
        { title: "Value 5", info: "Information about Value 5.", image: "../img/placeholder.png" },
        { title: "Value 6", info: "Information about Value 6.", image: "../img/placeholder.png" },
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
                <p className="section__heading section__heading_center">Values</p>
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
                                    style={{ display: isExpanded || isHovered ? "none" : "block" }}
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
            </div>
        </div>
    );
}

export default Values;

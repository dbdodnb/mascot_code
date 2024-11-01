import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Partners() {

    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();
      }, []);

    return(
            <div data-aos="fade-up" className="partners">
                <div className="padding">
                    <p style={{
                        display: 'inline-block',
                        width: '100%'
                    }} className="section__heading">Our partners</p>
                </div>
                <div style={{
                    padding: "0 -100px",
                }} className="partners__slider">
                    <div className="slider__items">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
    )
}

export default Partners
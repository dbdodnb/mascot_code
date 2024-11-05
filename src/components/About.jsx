import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function About() {

    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();
      }, []);

    return(
        <div className="padding">
            <div data-aos="fade-up" id="about" className="about">
                <div className="about__text">
                    <p className="section__heading">About us</p>
                    <p className="text">We believe that what truly makes camp unforgettable are the connections we build, the friendships we forge, and the community that stands together. Our goal is to create a safe and supportive space where everyone feels valued, respected, and encouraged to grow.</p>
                    <p className="text">Since 2010, about 16 camps have been implemented for more than 900 teenagers.
                    </p>
                </div>
                <div className="about__cards">
                    <div className="about__element">
                        <div></div>
                        <a href="" className="text text__underline">Lorem ipsum</a>
                    </div>
                    <div className="about__element">
                        <div></div>
                        <a href="" className="text text__underline">Lorem ipsum</a>
                    </div>
                    <div className="about__element">
                        <div></div>
                        <a href="" className="text text__underline">Lorem ipsum</a>
                    </div>
                    <div className="about__element">   
                        <div></div>
                        <a href="" className="text text__underline">Lorem ipsum</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
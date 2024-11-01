import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Team(){

    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();
      }, []);

    return(
        <div className="padding">
            <div data-aos="fade-up" className="team">
                <p style={{
                    textAlign: 'center',
                    display: 'inline-block',
                    width: '100%'
                }} className="section__heading">Organizers 2025</p>
                <div className="team__info">
                    <div className="team__slides">
                        <div className="team__photo"></div>
                        <p style={{
                            textAlign: 'center',
                        }} className="text">Lorem Ipsum <br /> role</p>
                    </div>
                    <div className="team__slides">
                        <div className="team__photo"></div>     
                        <p style={{
                            textAlign: 'center',
                        }} className="text">Lorem Ipsum <br /> role</p>
                    </div>
                    <div className="team__slides">
                        <div className="team__photo"></div>
                        <p style={{
                            textAlign: 'center',
                        }} className="text">Lorem Ipsum <br /> role</p>
                    </div>
                    <div className="team__slides">
                        <div className="team__photo"></div>
                        <p style={{
                            textAlign: 'center',
                        }} className="text">Lorem Ipsum <br /> role</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
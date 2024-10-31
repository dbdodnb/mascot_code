import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Accomodations(){

    useEffect(() => {
        Aos.init({
          once: true,
        });
        Aos.refresh();
      }, []);

    return(
        <div data-aos="fade-up" className="padding padding_accomodations">
            <div id="accomodations" className="accomodations">
                <p style={{
                    color: "white",
                    paddingTop: '50px',
                    textAlign: 'right',
                    display: 'inline-block',
                    width: '100%'
                }} className="section__heading">What do we provide?</p>
                <div className="accomodations__bullets">
                    <div>
                        <div className="bullet"></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                    <div>
                        <div className="bullet"></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                    <div>
                        <div className="bullet"></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                    <div>
                        <div className="bullet"></div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                </div>
                <div className="accomodations__photo"></div>
            </div>
        </div>
    )
}

export default Accomodations
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
                        <a target="_blank" href="https://brandme.in.ua/?utm_source=bitrix-ads&gad_source=1&gbraid=0AAAAADf7xBp2XvPntvflk5CXjNq1-6GHP&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6ppURmnsFOPxErc0KLsqq5Js31mp9WDPq3powBXd5e_pTsoT3zim8AaAu_jEALw_wcB"></a>
                        <a target="_blank" href="https://dodosocks.com/?gad_source=1&#038;gbraid=0AAAAAC7Ssq7ZdAbeJ98fqOazVY5RA2r3n&#038;gclid=Cj0KCQiAoae5BhCNARIsADVLzZfDWGbHwXuSrkQ9BfEnntfjvmrcM0pvSuxlbzbpsIc_sBf80bFJ-q0aAu6jEALw_wcB"></a>
                        <a target="_blank" href="https://voices.org.ua"></a>
                        <a target="_blank" href="https://klei.co/en"></a>
                        <a target="_blank" href="https://www.morshynska.ua"></a>
                        <a target="_blank" href="https://orner.com.ua/ua?utm_source=google&utm_medium=cpc&utm_campaign=pmax&gad_source=1&gbraid=0AAAAADhK60zz6ixCjPvMTZSQh0qjQuiIH&gclid=Cj0KCQjwq_G1BhCSARIsACc7NxoWc76r4UheOdcHPYSBdRwVxptEX1LojQBDKIVi8P7L7xZ3vZaYU-YaAiqsEALw_wcB"></a>
                        <a target="_blank" href="https://zone3000.net"></a>
                    </div>
                </div>
            </div>
    )
}

export default Partners
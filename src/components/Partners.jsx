import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function Partners() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change language at the component level
  };

  useEffect(() => {
    Aos.init({
      once: true,
    });
    Aos.refresh();
  }, []);

  return (
    <div data-aos="fade-up" className="partners">
      <div className="padding">
        <p
          style={{
            display: "inline-block",
            width: "100%",
          }}
          className="section__heading"
        >
          {t("partners")}
        </p>
      </div>
      <div
        style={{
          padding: "0 -100px",
        }}
        className="partners__slider"
      >
        <div className="slider__items">
          <a target="_blank" href="https://brandme.in.ua"></a>
          <a target="_blank" href="https://dodosocks.com"></a>
          <a target="_blank" href="https://voices.org.ua"></a>
          <a target="_blank" href="https://klei.co/en"></a>
          <a target="_blank" href="https://www.morshynska.ua"></a>
          <a target="_blank" href="https://orner.com.ua/ua"></a>
          <a target="_blank" href="https://zone3000.net"></a>
        </div>
        {/* Duplicate the items for seamless scrolling */}
        <div className="slider__items">
          <a target="_blank" href="https://brandme.in.ua"></a>
          <a target="_blank" href="https://dodosocks.com"></a>
          <a target="_blank" href="https://voices.org.ua"></a>
          <a target="_blank" href="https://klei.co/en"></a>
          <a target="_blank" href="https://www.morshynska.ua"></a>
          <a target="_blank" href="https://orner.com.ua/ua"></a>
          <a target="_blank" href="https://zone3000.net"></a>
        </div>
      </div>
    </div>
  );
}

export default Partners;

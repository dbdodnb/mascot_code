import React from "react";
import { useTranslation } from 'react-i18next';

function MASCOT() {

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Change language at the component level
    };

    return(
        <div className="scrollingText">
            <p className="marquee">
                <span>
                    {t('allAbout')}
                </span>
                <span>
                    {t('allAbout')}
                </span>
                <span>
                    {t('allAbout')}
                </span>
                <span>
                    {t('allAbout')}
                </span>
                <span>
                    {t('allAbout')}
                </span>
                <span>
                    {t('allAbout')}
                </span>
                <span>
                    {t('allAbout')}
                </span>
                <span>
                    {t('allAbout')}
                </span>
            </p>
        </div>
    )
}
export default MASCOT
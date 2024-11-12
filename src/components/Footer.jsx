import React from "react";

function Footer(){
    return(
        <>
            <div className="footer__padding padding">
                <div className="footer">
                    <div className="footer__copyright">
                        <p style={{
                            color: '#fff'
                        }} className="text">© All rights reserved 2025</p>
                    </div>
                    <div className="footer__logo"></div>
                    <div className="footer_socials">
                        <a className="firstLink" target="_blank" href="https://www.instagram.com/campmascot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="></a>
                        <a target="_blank" href="https://www.youtube.com/@campmascot"></a>
                        <a target="_blank" href="https://www.facebook.com/share/HuGDf1zoPnzWGgA9/?mibextid=LQQJ4d"></a>
                        <a target="_blank" href="mailto:campmascotua@gmail.com"></a>
                    </div>
                </div>
            </div>
            <div className="footer__padding padding">
                <div className="footerMobile">
                    <div className="footer__logo"></div>
                    <div className="footer__info">
                        <div className="footer__copyright">
                            <p style={{
                                color: '#fff'
                            }} className="text">© All rights reserved 2025</p>
                        </div>
                        <div className="footer_socials">
                            <a className="firstLink" target="_blank" href="https://www.instagram.com/campmascot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="></a>
                            <a target="_blank" href="https://www.youtube.com/@campmascot"></a>
                            <a target="_blank" href="https://www.facebook.com/share/HuGDf1zoPnzWGgA9/?mibextid=LQQJ4d"></a>
                            <a target="_blank" href="mailto:campmascotua@gmail.com"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
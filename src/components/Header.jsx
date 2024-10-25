import React from "react";

function Header() {
    return(
        <div className="header">
            <div className="nav padding">
                <div className="nav__logo"> </div>
                <div className="nav__info">
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Accomodations</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className="header__info padding"></div>
        </div>
    )
}

export default Header
import React from "react";

function Values() {
    return(
        <div className="padding">
            <div className="values">
                <p className="section__heading section__heading_center">Values</p>
                <div className="values__container">
                    <div>
                        <img src="{`${process.env.PUBLIC_URL}/img/placeholder.webp`}" alt="" />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Values
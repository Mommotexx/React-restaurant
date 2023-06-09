import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
    <section
        className="app__specialMenu flex__center section__padding"
        id="menu"
    >
        <div className="app__specialMenu-title">
            <SubHeading title={"Menu That Fits your Palatte"} />
            <h1 className="headtext__cormorant">Today's Special</h1>
        </div>
        <div className="app__specialMenu-menu">
            <section className="app__specialMenu-menu_wine flex__center">
                <p className="app__specialMenu-menu_heading">Wine & Beer</p>
                <div className="app__specialMenu_menu_items">
                    {data.wines.map((wine, index) => (
                        <MenuItem
                            key={wine.title + index}
                            title={wine.title}
                            price={wine.price}
                            tags={wine.tags}
                        />
                    ))}
                </div>
            </section>
            <div className="app__specialMenu-menu_img">
                <img src={images.menu} alt="menu img" />
            </div>
            <section className="app__specialMenu-menu_cocktails flex__center">
                <p className="app__specialMenu-menu_heading">Cocktails</p>
                <div className="app__specialMenu_menu_items">
                    {data.cocktails.map((cocktail, index) => (
                        <MenuItem
                            key={cocktail.title + index}
                            title={cocktail.title}
                            price={cocktail.price}
                            tags={cocktail.tags}
                        />
                    ))}
                </div>
            </section>
        </div>
        <div style={{ marginTop: "15px" }}>
            <button type="button" className="custom__button">
                View More
            </button>
        </div>
    </section>
);

export default SpecialMenu;

import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => (
    <header className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavor" />
            <h1 className="app__header-h1">The Key to Fine Dining</h1>
            <p className="p__opensans" style={{ margin: "2rem 0" }}>
                Doloremque, autem sed? Veritatis similique enim culpa asperiores
                est aliquid amet labore, ipsum libero, molestias consectetur.
                Facere atque nobis error facilis vel!
            </p>
            <button type="button" className="custom__button">
                Explore Menu
            </button>
        </div>
        <div className="app__wrapper_img">
            <img src={images.welcome} alt="Header img" />
        </div>
    </header>
);

export default Header;

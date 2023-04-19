import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = React.useRef();

    const handleVideo = () => {
        setPlayVideo(!playVideo);

        if (playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    };

    return (
        <section className="app__video" onClick={handleVideo}>
            <video
                src={meal}
                type="video/mp4"
                loop
                controls={false}
                ref={vidRef}
                muted
            />
            <div
                className="app__video-overlay flex__center"
                style={playVideo ? { display: "none" } : { display: "flex" }}
            >
                <div
                    className="app__video-overlay_circle flex__center"
                    onClick={handleVideo}
                >
                    {playVideo ? <BsPauseFill /> : <BsFillPlayFill />}
                </div>
            </div>
        </section>
    );
};

export default Intro;

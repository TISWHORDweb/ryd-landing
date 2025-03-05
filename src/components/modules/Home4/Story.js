import { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

const Story = () => {
    const [youtubeToggler, setYoutubeToggler] = useState(false);
    const [localVideoToggler, setLocalVideoToggler] = useState(false);
    const style = { position: "relative", zIndex: 10, marginTop: "-40px" };

    return (
        <>
            {/* Lightbox for YouTube Video */}
            <FsLightbox
                toggler={youtubeToggler}
                sources={["https://www.youtube.com/watch?v=SRo-0x1poOw"]}
            />

            {/* Lightbox for Local Video */}
            <FsLightbox
                toggler={localVideoToggler}
                sources={["/images/story/22.mp4"]}
            />

            <section className="story padding-top padding-bottom" style={style}>
                <div className="container aos-init">
                    <div className="section-header text-center">
                        <h2 className="style2-h2 style2-h2--defult">Take a Video Tour</h2>
                        <p className="style2">
                            Enroll your child today and become part of a community shaping the future through innovative, hands-on learning experiences.
                        </p>
                    </div>

                    {/* YouTube Video Section */}
                    <div className="story__wrapper">
                        <div className="story__thumb">
                            <div className="story__thumb-inner">
                                <img src="/images/story/3.png" alt="story-image" />
                                <div className="story__thumb-playbtn">
                                    <a
                                        href=""
                                        onClick={(e) => {
                                            setYoutubeToggler(!youtubeToggler);
                                            e.preventDefault();
                                        }}
                                    >
                                        <img src="/images/story/2.png" alt="ply-btn" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Local Video Section */}
                    <div className="story__wrapper" style={{ marginTop: "40px" }}>
                        <div className="story__thumb">
                            <div className="story__thumb-inner">
                                <img src="/images/story/4.png" alt="new-story-image" />
                                <div className="story__thumb-playbtn">
                                    <a
                                        href=""
                                        onClick={(e) => {
                                            setLocalVideoToggler(!localVideoToggler);
                                            e.preventDefault();
                                        }}
                                    >
                                        <img src="/images/story/2.png" alt="ply-btn" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Story;
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const About = ()=>{
return(
    <section className="about about--style3 padding-bottom">
        <div className="container">
            <div className="about__wrapper">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about__thumb aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <div className="about__thumb-inner">
                                <div className="about__thumb-image">
                                    <img src="/images/about/home3/1.png" alt="about-image" />
                                </div>
                            </div>
                            <div className="about__icon">
                                <span className="about__icon-item about__icon-item--animation"><img src="/images/about/home3/4.png" alt="dot icon" /></span>
                                <span className="about__icon-item about__icon-item--animation"><img src="/images/about/home3/3.png" alt="star icon" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content aos-init aos-animate" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="100">
                            <div className="about__content-inner">
                                <div className="section-header">
                                    <div className="subtitle subtitle--style3">
                                        <img src="/images/icon/home3/1.png" alt="star icon" />
                                        <p className="mb-0">About Us</p>
                                    </div>
                                    <h2>We Offering Coaching by Skilled Advisors</h2>
                                    <p className="style2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                        amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                                        consequat sunt nostrud amet.</p>
                                </div>
                                <div className="about__details">
                                    <div className="about__details-item">
                                        <img src="/images/icon/svg/2.svg" alt="icon" />
                                        <div className="about__details-text">
                                            <h6>Exclusive Coach</h6>
                                            <p>Non deserunt ullamco est sit aliqua dolor do amet sint. enim velit
                                                mollit.</p>
                                        </div>
                                    </div>
                                    <div className="about__details-item">
                                        <img src="/images/icon/svg/2.svg" alt="icon" />
                                        <div className="about__details-text">
                                            <h6>Creative Minds</h6>
                                            <p>Non deserunt ullamco est sit aliqua dolor do amet sint. enim velit
                                                mollit.</p>
                                        </div>
                                    </div>
                                    <div className="about__details-item">
                                        <img src="/images/icon/svg/2.svg" alt="icon" />
                                        <div className="about__details-text">
                                            <h6>Master Certified</h6>
                                            <p>Non deserunt ullamco est sit aliqua dolor do amet sint. enim velit
                                                mollit.</p>
                                        </div>
                                    </div>
                                    <div className="about__details-item">
                                        <img src="/images/icon/svg/2.svg" alt="icon" />
                                        <div className="about__details-text">
                                            <h6>Video Tutorials</h6>
                                            <p>Non deserunt ullamco est sit aliqua dolor do amet sint. enim velit
                                                mollit.</p>
                                        </div>
                                    </div>
                                </div>

                                <Link href="about" className="trk-btn trk-btn--secondary3">Learn more
                                    <span> <FontAwesomeIcon icon={faArrowRight}/></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
export default About;
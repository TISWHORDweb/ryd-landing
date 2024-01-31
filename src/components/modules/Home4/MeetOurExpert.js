import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const MeetOurExpert = ()=>{
    return(
        <section className="team  team--style1 team--home4 padding-top padding-bottom bg--full" style={{backgroundImage:" url(/images/bg/home4/2.png)"}}>
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
            <div className="team__wrapper">
                <div className="row g-4">
                    <div className="col-lg-6 col-sm-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                        <div className="team__header">
                            <h2 className="style2-h2">Meet Our Expert</h2>
                            <p className="style2">Clarity gives you the blocks &amp; components you needto create a truly
                                professional website,
                                landing page or admin panel for your saas components you needto create a truly</p>
                            <Link href="mentors" className="trk-btn trk-btn--rounded trk-btn--secondary4">Explore More
                                <span><span><FaArrowRight /></span></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="team__item-inner">
                                <div className="team__item-thumb team__item-thumb--style1">
                                    <img src="/images/team/home4/1.png" alt="Team Image" />
                                </div>
                                <div className="team__item-content team__item-content--style1">
                                    <div className="team__item-author">
                                        <h6><Link href="mentor-details">Jenny Wilson</Link> </h6>
                                        <p>UI Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                            <div className="team__item-inner">
                                <div className="team__item-thumb">
                                    <img src="/images/team/home4/2.png" alt="Team Image" />
                                </div>
                                <div className="team__item-content team__item-content--style1">
                                    <div className="team__item-author">
                                        <h6><Link href="mentor-details">Robert Fox</Link> </h6>
                                        <p>Product Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="team__item-inner">
                                <div className="team__item-thumb">
                                    <img src="/images/team/home4/3.png" alt="Team Image" />
                                </div>
                                <div className="team__item-content team__item-content--style1">
                                    <div className="team__item-author">
                                        <h6><Link href="mentor-details">Devon Lane</Link> </h6>
                                        <p>Web developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="team__item-inner">
                                <div className="team__item-thumb">
                                    <img src="/images/team/home4/4.png" alt="Team Image" />
                                </div>
                                <div className="team__item-content team__item-content--style1">
                                    <div className="team__item-author">
                                        <h6><Link href="mentor-details">Jerome Bell</Link> </h6>
                                        <p>Marketer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                            <div className="team__item-inner">
                                <div className="team__item-thumb">
                                    <img src="/images/team/home4/5.png" alt="Team Image" />
                                </div>
                                <div className="team__item-content team__item-content--style1">
                                    <div className="team__item-author">
                                        <h6><Link href="mentor-details">Marvin McKi</Link> </h6>
                                        <p>UX Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                            <div className="team__item-inner">
                                <div className="team__item-thumb">
                                    <img src="/images/team/home4/6.png" alt="Team Image" />
                                </div>
                                <div className="team__item-content team__item-content--style1">
                                    <div className="team__item-author">
                                        <h6><Link href="mentor-details">Darrell Bell</Link> </h6>
                                        <p>Graphic Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default MeetOurExpert;
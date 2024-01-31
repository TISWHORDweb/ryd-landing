import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "react-scroll-to-top";
const Footerthree = () => {
    return (<>
        <footer className="footer brand-3 bg--cover" style={{ backgroundImage: 'url(/images/footer/home3/bg.png)' }}>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__upper padding-top" data-aos="fade-up" data-aos-duration="800">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <div className="footer__cta">
                                    <div className="footer__cta-content">
                                        <h2>Still You Need Our Support</h2>
                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                            do amet sint. Velit officia
                                            consequat duis enim velit mollit. Exercitation veniam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="footer__cta">
                                    <div className="footer__cta-form">
                                        <form className="form form-subscribe  ms-md-auto" action="#">
                                            <div className="input-group">
                                                <input type="email" className="form-control style1" placeholder="Enter email" />
                                                <span className="input-group-btn">
                                                    <button className="trk-btn cta-btn trk-btn--primary3"
                                                        type="submit">Subscribe</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__top padding-bottom footer__top--style2">
                        <div className="row g-5">
                            <div className="col-xl-4 col-md-6">
                                <div className="footer__about">
                                    <Link href="/" className="footer__about-logo"><img
                                        src="/images/logo/22.png" alt="Logo" /></Link>
                                    <p className="footer__about-moto">You minim mollit non deserunt ullamco est sit aliqua dolor
                                        do
                                        amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                                        consequat
                                        sunt nostrud amet.</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6">
                                <div className="footer__links">
                                    <div className="footer__links-item">
                                        <div className="footer__links-tittle">
                                            <h6>Get In Touch</h6>
                                        </div>
                                        <div className="footer__links-content">
                                            <ul className="footer__linklist">
                                                <li className="footer__linklist-item"> <Link href="courses">Courses</Link>
                                                </li>
                                                <li className="footer__linklist-item"> <Link href="about">About Us</Link>
                                                </li>
                                                <li className="footer__linklist-item"> <Link href="course-details">Content
                                                    Writing</Link> </li>
                                                <li className="footer__linklist-item"> <Link
                                                    href="course-details">Management</Link> </li>
                                                <li className="footer__linklist-item"> <Link href="course-details">Web
                                                    Development</Link></li>
                                                <li className="footer__linklist-item"> <Link href="course-details">Art &
                                                    Design</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="footer__links">
                                    <div className="footer__links-tittle">
                                        <h6>Information</h6>
                                    </div>
                                    <div className="footer__links-content">
                                        <ul className="footer__about-info">
                                            <li className="footer__about-item">
                                                <div className="footer__about-inner">
                                                    <img src="/images/footer/2.svg" alt="icon" />
                                                    <div className="info"> <Link
                                                        href="mailto:support@thetork.com">support@thetork.com</Link>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="footer__about-item">
                                                <div className="footer__about-inner">
                                                    <img src="/images/footer/3.svg" alt="icon" />
                                                    <div className="info"> <Link href="tel:+2075550119">(207) 555-0119</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="social social--style2 mt-4">
                                            <li className="social__item">
                                                <Link href="" className="social__link social__link--defult"><FontAwesomeIcon icon={faFacebookF} /></Link>
                                            </li>
                                            <li className="social__item">
                                                <Link href="" className="social__link social__link--defult"><FontAwesomeIcon icon={faInstagram} /></Link>
                                            </li>
                                            <li className="social__item">
                                                <Link href="" className="social__link social__link--defult"><FontAwesomeIcon icon={faYoutube} /></Link>
                                            </li>
                                            <li className="social__item">
                                                <Link href="" className="social__link social__link--defult"><FontAwesomeIcon icon={faTwitter} /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="footer__post">
                                    <div className="footer__links-tittle">
                                        <h6>Recent Post</h6>
                                    </div>
                                    <div className="footer__wrapper">
                                        <ul>
                                            <li>
                                                <div className="thumb">
                                                    <Link href="blog-details"><img src="/images/footer/home3/1.png"
                                                        alt="recentpost" /></Link>
                                                </div>
                                                <div className="content">
                                                    <p><Link href="blog-details">Employe
                                                        development is company’s</Link></p>
                                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                                    <span className="date"> 21 april 2024</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <Link href="blog-details"><img src="/images/footer/home3/2.png"
                                                        alt="recentpost" /></Link>
                                                </div>
                                                <div className="content">
                                                    <p><Link href="blog-details">Should fixing
                                                        take 100 corporate steps.</Link></p>
                                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                                    <span className="date"> 23 april 2024</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__lower ">
                <div className="footer__lower-copyright text-center">
                    <p className=" mb-0">Copyright @ 2024 By Thetork. All Right Reserved. </p>
                </div>
            </div>
        </footer>
        <ScrollToTop
            smooth
            height="16px"
            width="14px"
            className="scroll-to-top--home3"
            viewBox="0 0 448 512"
            svgPath="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
        />
    </>

    );
};

export default Footerthree;


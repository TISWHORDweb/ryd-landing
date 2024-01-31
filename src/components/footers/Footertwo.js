import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import ScrollToTop from "react-scroll-to-top";
const Footertwo = () => {
    return (
        <>
            <footer className="footer brand-2">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__top padding-top padding-bottom ">
                            <div className="row g-5">
                                <div className="col-xl-4 col-md-6">
                                    <div className="footer__about">
                                        <Link href="" className="footer__about-logo"><img src="/images/logo/22.png"
                                            alt="Logo" /></Link>
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
                                                    <li className="footer__linklist-item"> <Link href="/contact">Contact
                                                        Us</Link>
                                                    </li>
                                                    <li className="footer__linklist-item"> <Link href="/about">About
                                                        Us</Link>
                                                    </li>
                                                    <li className="footer__linklist-item"> <Link href="/mentors">Mentors</Link>
                                                    </li>
                                                    <li className="footer__linklist-item"> <Link href="/mentor-details">Mentor
                                                        Details</Link> </li>
                                                    <li className="footer__linklist-item"> <Link href="/blogs">Blog</Link>
                                                    </li>
                                                    <li className="footer__linklist-item"> <Link href="/blog-details">Blog
                                                        Details</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-2 col-md-6 col-sm-6">
                                    <div className="footer__links">
                                        <div className="footer__links-tittle">
                                            <h6>Explore Links</h6>
                                        </div>
                                        <div className="footer__links-content">
                                            <ul className="footer__linklist">
                                                <li className="footer__linklist-item"> <Link href="/courses">Courses</Link>
                                                </li>
                                                <li className="footer__linklist-item"> <Link href="/about">About Us</Link>
                                                </li>
                                                <li className="footer__linklist-item"> <Link href="/course-details">Content
                                                    Writing</Link> </li>
                                                <li className="footer__linklist-item"> <Link href="/course-details">Management</Link>
                                                </li>
                                                <li className="footer__linklist-item"> <Link href="/course-details">Web
                                                    Development</Link>
                                                </li>
                                                <li className="footer__linklist-item"> <Link href="/course-details">Art &
                                                    Design</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="footer__links">
                                        <div className="footer__links-tittle">
                                            <h6>Information</h6>
                                        </div>
                                        <div className="footer__links-content">
                                            <ul className="footer__about-info">
                                                <li className="footer__about-item">
                                                    <div className="footer__about-inner">
                                                        <img src="/images/footer/1.svg" alt="icon" />
                                                        <div className="info">
                                                            <p className="m-0">4517 Washington Ave. Manchester, Kentucky
                                                                39495
                                                            </p>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li className="footer__about-item">
                                                    <div className="footer__about-inner">
                                                        <img src="/images/footer/2.svg" alt="icon" />
                                                        <div className="info"> <Link href="mailto:support@thetork.com">support@thetork.com</Link>
                                                            <br />
                                                            <Link
                                                                href="mailto:mail@thetork.com">mail@thetork.com</Link>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="footer__about-item">
                                                    <div className="footer__about-inner">
                                                        <img src="/images/footer/3.svg" alt="icon" />
                                                        <div className="info"> <Link href="tel:+2075550119">(207)
                                                            555-0119</Link>
                                                            <br />
                                                            <Link href="tel:+7025550122">(702) 555-0122</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="social mt-4">
                                                <li className="social__item">
                                                    <Link href=""
                                                        className="social__link social__link--rounded1"><FontAwesomeIcon icon={faFacebookF} /></Link>
                                                </li>
                                                <li className="social__item">
                                                    <Link href=""
                                                        className="social__link social__link--rounded1"><FontAwesomeIcon icon={faInstagram} /></Link>
                                                </li>
                                                <li className="social__item">
                                                    <Link href=""
                                                        className="social__link social__link--rounded1"><FontAwesomeIcon icon={faYoutube} /></Link>
                                                </li>
                                                <li className="social__item">
                                                    <Link href="" className="social__link social__link--rounded1"> <FontAwesomeIcon icon={faTwitter} /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="footer__bottom">
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="footer__end">
                                        <div className="footer__end-copyright">
                                            <p className=" mb-0">Copyright @ 2024 By <Link className="text-white" href="https://themeforest.net/user/thetork/portfolio" target="_blank">TheTork</Link>. All Right Reserved. </p>
                                        </div>
                                        <div>
                                            <ul className="footer__end-links">
                                                <li className="footer__end-item">
                                                    <Link href=""> Terms & Conditions </Link>
                                                </li>
                                                <li className="footer__end-item">
                                                    <Link href=""> Privacy Policy </Link>
                                                </li>
                                                <li className="footer__end-item">
                                                    <Link href=""> Sitemap </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    )
}

export default Footertwo
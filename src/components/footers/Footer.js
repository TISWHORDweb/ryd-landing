import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import { faFacebookF, faInstagram, faYoutube, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer
        className="footer brand-1"
        style={{
          backgroundImage: `url(images/footer/1.png)`,
        }}
      >
        <div className="container">
          <div className="footer__wrapper">
            <div
              id="custom-footer"
              className="footer__top padding-top padding-bottom"
            >
              <div className="row g-5">
                <div className="col-xl-4 col-md-6">
                  <div className="footer__about">
                    <Link href="/" className="footer__about-logo">
                      <img src="/images/logo/logo.png" alt="Logo" />
                    </Link>
                    <p className="footer__about-moto">
                      Let's embark on a learning journey where technology meets education.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div className="footer__links">
                    <div className="footer__links-item">
                      <div className="footer__links-tittle">
                        <h6>Get In Touch</h6>
                      </div>
                      <ul className="footer__about-info">
                        <li className="footer__about-item">
                          <div className="footer__about-inner">
                            <img src="/images/footer/1.svg" alt="icon" />
                            <div className="info">
                              <p className="m-0">
                              Toronto, Canada Lagos, Nigeria
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="footer__about-item">
                          <div className="footer__about-inner">
                            <img src="/images/footer/2.svg" alt="icon" />
                            <div className="info">
                              <Link href="mailto:support@thetork.com">
                              learning@rydlearning.com
                              </Link>
                             
                              {/* <Link href="mailto:mail@thetork.com">
                              info@rydlearning.com
                              </Link> */}
                            </div>
                          </div>
                        </li>

                        {/* <li className="footer__about-item">
                          <div className="footer__about-inner">
                            <img src="/images/footer/3.svg" alt="icon" />
                            <div className="info">
                              <Link href="tel:+2075550119">+18337371275</Link>
                              <br />
                              <Link href="tel:+7025550122">(702) 555-0122</Link>
                            </div>
                          </div>
                        </li> */}
                      </ul>

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
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/about">About Us</Link>
                        </li>
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/courses">Courses</Link>
                        </li>
                        <li className="footer__linklist-item">
                            {" "}
                            <Link href="/affiliate">Affiliate</Link>
                          </li>
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Operations</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item">
                          <p className="m-0">Global</p>
                        </li>
                        {/* <li className="footer__linklist-item">
                          <p className="m-0">Sunday: 10:00AM - 4.00PM</p>
                        </li>
                        <li className="footer__linklist-item">
                          <p className="m-0">Friday: Close</p>
                        </li> */}
                      </ul>
                      <ul className="social mt-4">
                        <li className="social__item">
                          <Link
                            href="https://www.linkedin.com/company/ryd-learning/"
                            className="social__link social__link--rounded1"
                          >
                            <FontAwesomeIcon icon={faLinkedin} />
                          </Link>
                        </li>
                        {/* <li className="social__item">
                          <Link
                            href=""
                            className="social__link social__link--rounded1"
                          >
                            <FontAwesomeIcon icon={faFacebookF} />
                          </Link>
                        </li>
                        <li className="social__item">
                          <Link
                            href=""
                            className="social__link social__link--rounded1"
                          >
                            <FontAwesomeIcon icon={faInstagram} />
                          </Link>
                      </li> */}
                        <li className="social__item">
                          <Link
                            href="https://www.youtube.com/@RYDLearning"
                            className="social__link social__link--rounded1"
                          >
                            <FontAwesomeIcon icon={faYoutube} />
                          </Link>
                        </li>
                        <li className="social__item">
                          <Link
                            href="https://twitter.com/rydLearning"
                            target="_blank"
                            className="social__link social__link--rounded1"
                          >
                            <FontAwesomeIcon icon={faTwitter} />
                          </Link>
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
                      <p className=" mb-0">
                        © 2024 Copyright | All Rights Reserved.
                      </p>
                    </div>
                    <div>
                      <ul className="footer__end-links">
                        <li className="footer__end-item">
                          <Link href="">Terms & Conditions</Link>
                        </li>
                        <li className="footer__end-item">
                          <Link href="">Privacy Policy</Link>
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
        className="scroll-to-top--home1"
        viewBox="0 0 448 512"
        svgPath="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
      />
    </>
  );
};

export default Footer;

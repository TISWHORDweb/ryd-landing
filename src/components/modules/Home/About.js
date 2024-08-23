import Link from "next/link";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://youtu.be/Hh1UCOizzMc",
          "https://youtu.be/Hh1UCOizzMc",
          "https://youtu.be/Hh1UCOizzMc",
        ]}
      />
      <section className="about about--style1 padding-top padding-bottom">
        <div className="container">
          <div className="about__wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div
                  className="about__thumb"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <div className="about__thumb-inner">
                    <div className="about__thumb-image">
                      <img src="/images/about/1.png" alt="about-image" />
                      <div className="about__thumb-video">
                        <img src="/images/about/2.png" alt="intro-thumbil" />
                        <div className="about__thumb-plybtn">
                          <Link
                            href=""
                            onClick={(e) => {
                              setToggler(!toggler);
                              e.preventDefault();
                            }}
                          >
                            <img
                              src="/images/about/play-icon.png"
                              alt="ply-btn"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="about__content"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="about__content-inner">
                    <p className="subtitle">About Us</p>
                    <h2>We Are Maximize Your Learning Growth</h2>
                    <p>
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur duis deserunt mollit dolore
                      cillum minim tempor enim. Elit aute irure tempo.
                    </p>
                    <ul className="about-list">
                      <li>
                        <img src="/images/icon/svg/1.svg" alt="list-icon" />{" "}
                        Training Services
                      </li>
                      <li>
                        <img src="/images/icon/svg/1.svg" alt="list-icon" /> Big
                        Experience
                      </li>
                      <li>
                        <img src="/images/icon/svg/1.svg" alt="list-icon" />{" "}
                        Expert Trainer
                      </li>
                      <li>
                        <img src="/images/icon/svg/1.svg" alt="list-icon" />{" "}
                        Lifetime access
                      </li>
                    </ul>
                    <Link
                      href="/about"
                      className="trk-btn trk-btn--rounded trk-btn--secondary1"
                    >
                      Explore More +
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

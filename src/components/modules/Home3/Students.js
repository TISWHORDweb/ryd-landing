import testimonials from "../../../api/index3/home_testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { useState } from "react";
import Link from "next/link";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import FsLightbox from "fslightbox-react";
import Icons from "./Icons";

const Students = () => {
  const link = ["https://www.youtube.com/watch?v=Hh1UCOizzMc"];
  const [thumbswiper, setThumbsSwiper] = useState(null);
  const [toggler, setToggler] = useState(false);
  const author_breakpoints = {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  }

  return (
    <>
      <FsLightbox toggler={toggler} sources={link} />
      <section className="testimonial testimonial--style3 padding-top padding-bottom brand3-bg-1">
        <div className="container" data-aos="fade-up" data-aos-duration="800">
          <div className="section-header text-center">
            <h2>Loved by Our Students</h2>
          </div>
          <div className="testimonial__wrapper">

            <Swiper className="testimonial__slider3"
              modules={[Thumbs]}
              thumbs={{ swiper: thumbswiper && !thumbswiper.destroyed ? thumbswiper : null }}
              slidesPerView={1}
              spaceBetween={40}
              grabCursor={true}
              loop={true}
              speed={3000}
            >
              <div className="swiper-wrapper">
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index} style={{ paddingLeft: '20px' }}>
                    <div className="row g-5 align-items-center">
                      <div className="col-md-6">
                        <div className="testimonial__item">
                          <div className="testimonial__item-inner">
                            <div className="testimonial__content">
                              <div className="testimonial__writer">
                                <h5>{item.name}</h5>
                                <p>{item.role}</p>
                                <span>
                                  <Icons numberOfIcon={item.rating} />
                                </span>
                              </div>
                              <blockquote className="blockquote">
                                <p>{item.quote}</p>
                              </blockquote>
                              <span className="quote"><FontAwesomeIcon icon={faQuoteRight} /></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="testimonial__item">
                          <div className="testimonial__item-inner">
                            <div className="testimonial__thumb">
                              <img src={item.banner} alt="testimonial" />
                              <div className="testimonial__thumb-playbtn">
                                <Link href="" onClick={(e) => {
                                  setToggler(!toggler)
                                  e.preventDefault()
                                }}>
                                  <img
                                    src="/images/testimonial/home3/play-btn.png"
                                    alt="ply-btn"
                                  />
                                </Link>

                                <p>Testimonial by</p>
                                <span>{item.name}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>


            <div className="testimonial__author3 swiper mt-5">
              <Swiper
                modules={[Thumbs]}
                onClick={setThumbsSwiper}
                breakpoints={author_breakpoints}
                watchSlidesProgress={true}
                slidesPerView={4}
                grabCursor={true}
                loop={true}
                spaceBetween={24}

              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className=" testimonial__storyteller">
                      <div className="testimonial__storyteller-thumb">
                        <img src={item.thumbnail} alt="storyteller" />
                      </div>
                      <div className="testimonial__storyteller-content">
                        <h6>{item.name}</h6>
                        <p className="mb-0">{item.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Students;

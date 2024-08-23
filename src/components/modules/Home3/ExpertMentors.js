import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import mentordata from '../../../api/index3/expert-mentors.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ExpertMentors = () => {
    const breakpoints = {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    };
    const autoplay1 = {
        delay: 1000,
        disableOnInteraction: true,
    }
    const autoplay2 = {
                                
        delay: 1000,
        disableOnInteraction: true,
        reverseDirection: true
    }
    return (
        <section className="team team--style2 padding-top padding-bottom">
            <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="section-header text-center">
                    <h2>Meet with Our Expert Mentor</h2>
                    <p className="style2">
                        Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. duis enim velit mollit.
                        Exercitation veniam consequat.
                    </p>
                </div>
                <div className="team__wrapper">
                    <Swiper className="team__slider1 mb-5"
                        modules={[Autoplay]}
                        breakpoints={breakpoints}
                        slidesPerView={2}
                        spaceBetween={24}
                        grabCursor = {true}
                        loop={true}
                        autoplay={
                            autoplay1
                        }
                        speed={5000}
                    >
                        {
                            mentordata.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="team__item">
                                        <div className="team__item-inner">
                                            <div className="team__item-thumb">
                                                <img src={item.thumbnail} alt="Team Image" />
                                            </div>
                                            <div className="team__item-content">
                                                <div className="team__item-author">
                                                    <h6>
                                                        <Link href='/mentor-details'>{item.mentorName}</Link>
                                                    </h6>
                                                    <p>{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <Swiper className="team__slider2"
                        modules={[Autoplay]}
                        breakpoints={breakpoints}
                        slidesPerView={2}
                        spaceBetween={24}
                        grabCursor= {true}
                        loop={true}
                        autoplay={
                            autoplay2
                        }
                        speed={5000}
                        
                    >
                        {
                            mentordata.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="team__item">
                                        <div className="team__item-inner">
                                            <div className="team__item-thumb">
                                                <img src={item.thumbnail} alt="Team Image" />
                                            </div>
                                            <div className="team__item-content">
                                                <div className="team__item-author">
                                                    <h6>
                                                        <Link href='/mentor-details'>{item.mentorName}</Link>
                                                    </h6>
                                                    <p>{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="text-center">
                        <Link href='/mentors' className="trk-btn trk-btn--secondary3 mt-5">
                            {"All Experts "}
                            <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default ExpertMentors;
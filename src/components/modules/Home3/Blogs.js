import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import BlogCard from "../../partials/BlogCard";
import Link from "next/link";
import blogdata from "../../../api/index3/latest-blog.json";
const Blogs = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 5,
    },
  };
  return (
    <section className="blog blog--style3 padding-top padding-bottom">
      <div
        className="container-fluid px-sm-0 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="section-header text-center">
          <div className="subtitle subtitle--style3 justify-content-center">
            <img src="/images/icon/home3/1.png" alt="roket icon" />
            <p className="mb-0">Latest Blog</p>
          </div>
          <h2>Every Day, Read Our News & Blog.</h2>
          <p className="style2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam.
          </p>
        </div>
        <div className="blog__wrapper">
          <Swiper
            className="blog__slider"
            breakpoints={breakpoints}
            slidesPerView={5}
            spaceBetween={25}
            loop={true}
          >
            {blogdata.map((item, index) => (
              <SwiperSlide key={index}>
                <BlogCard details={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center">
            <Link href="blogs" className="trk-btn  trk-btn--secondary3 mt-5">
              {" "}
              {"View All Blog "}
              <span>
                <FaArrowRight />
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blogs;

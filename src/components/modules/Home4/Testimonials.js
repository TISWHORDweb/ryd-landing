import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FreeMode, Thumbs, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { useEffect, useState } from 'react';
// import testimonials from '../../../api/index4/home-testimonials.json';
import { baseUrl } from "@/src/Network";
import axios from "axios";

const Testimonials = () => {
  const [thumbswiper, setThumbsSwiper] = useState(null)
  const [testimonials, setTestimonials] = useState([]);

  const breakpointsTumbs = {
    768: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  };



  const fetchTestimonial = async () => {
    try {
      const response = await axios.get(`${baseUrl}/common/testimonial/all`);
      setTestimonials(response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchTestimonial();
  }, []);


  const effect = "fade"

  return (
    <section className='testimonial testimonial--style1 padding-top padding-bottom brand-4'>
      <div className='container'>
        <div className="section-header text-center section-header--dark">
          <h2 className='style2-h2'>What parents say!!!</h2>
          {/* <p className="style2">Check out what the parents and guardians of our students have to say about us. Some of our students have also expressed their immense joy and fulfilment in passing through our program.</p> */}
        </div>
        <div className="testimonial__wrapper">
        <Swiper
            className='testimonial__slider '
            modules={[FreeMode, Thumbs, Autoplay, EffectFade]}
            loop={true}
            autoplay={
              {
                delay:2000,
                disableOnInteraction: false,
              }
            }
            speed={1000}
            thumbs={{ swiper: thumbswiper && !thumbswiper.destroyed ? thumbswiper : null }}
            grabCursor={true}
            slidesPerView={1}
            effect={'fade'}

          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial__item">
                  <div className="testimonial__item-inner">
                    <div className="testimonial__item-content">
                      <span>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                      <blockquote className="blockquote">
                        <p>{item.testimonial}</p>
                        <h4 className="mt-3 ">{ item.parentId ? item?.parent?.firstName+ " "+ item?.parent?.lastName : item?.name} </h4> 
                        <small>{item.parentId ? item?.parent?.state+", "+ item?.parent?.country : item?.country}</small>
                      </blockquote>
                      {/* <div className="testimonial__item-author">
                        <p>{item.name}</p>
                        <span>{item.role}</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <Swiper
            className="testimonial__author mt-5"
            modules={[Thumbs]}
            breakpoints={breakpointsTumbs}
            onClick={setThumbsSwiper}
            slidesPerView={5}
            spaceBetween={10}
            onSwiper={setThumbsSwiper}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} >
                <div className="testimonial__author-thumb">
                  <img src={item.thumbnail} alt="author-image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </section>

  );
};

export default Testimonials;

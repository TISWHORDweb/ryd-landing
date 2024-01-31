import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const partnerThree = [
  {
    "img": "/images/partner/home3/1.png"
  },
  {
    "img": "/images/partner/home3/2.png"
  },
  {
    "img": "/images/partner/home3/3.png"
  },
  {
    "img": "/images/partner/home3/4.png"
  },
  {
    "img": "/images/partner/home3/5.png"
  },
  {
    "img": "/images/partner/home3/1.png"
  },
  {
    "img": "/images/partner/home3/2.png"
  },
  {
    "img": "/images/partner/home3/3.png"
  },
  {
    "img": "/images/partner/home3/4.png"
  },
  {
    "img": "/images/partner/home3/5.png"
  },
  {
    "img": "/images/partner/home3/1.png"
  },
  {
    "img": "/images/partner/home3/2.png"
  },
  {
    "img": "/images/partner/home3/3.png"
  },
  {
    "img": "/images/partner/home3/4.png"
  },
  {
    "img": "/images/partner/home3/5.png"
  }
]
const Partners = () => {
  const breakpoints = {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  };

  const autoplay = {
    delay: 1,
    disableOnInteraction: true,
  };

  const speed = 3000;

  return (

      <section className='partner partner--style2 aos-init aos-animate' data-aos="fade-up" data-aos-duration="800">
        <div className='container aos-init aos-animate' data-aos='fade-up' data-aos-duration="1000" data-aos-delay='100'>
          <div className="section-header text-center">
            <h6>Trusted by 4,000+ companies</h6>
          </div>
          <div className="partner__wrapper">
            <Swiper className="partner__slider"
              modules={[Autoplay]}
              slidesPerView={5}
              breakpoints={breakpoints}
              loop={true}
              autoplay={autoplay}
              speed={speed}

              grabCursor={true}
            >

              {partnerThree.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="partner__item">
                    <div className="partner__item-inner">
                      <img src={item.img} alt="partner logo" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>


  );
};

export default Partners;

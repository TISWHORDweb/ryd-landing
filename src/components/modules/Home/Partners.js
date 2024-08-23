import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
const partnerOne = [
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/1.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/2.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/3.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/4.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/5.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/1.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/2.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/3.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/4.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/5.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/1.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/2.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/3.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/4.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/5.png"
  },
  {
    "img": "https://thetork.com/demos/vue/educax/images/partner/1.png"
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

 

  return (
    <div>
      <section className='partner padding-bottom aos-init aos-animate' data-aos="fade-up" data-aos-duration="800">
        <div className='container'>
          <div className="section-header text-center">
            <h6>Trusted by 4,000+ companies</h6>
          </div>
          <div className="partner__wrapper">
            <Swiper className="partner__slider"
               slidesPerView={5}
               breakpoints={breakpoints}
               speed={3000}
               loop={true}
               autoplay={{
                 delay: 500,
                 disableOnInteraction: false,
               }}
               modules={[Autoplay]}
            >

              {partnerOne.map((item, index) => (
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

    </div>

  )
}

export default Partners
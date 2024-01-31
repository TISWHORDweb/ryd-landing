import { Swiper } from "swiper/react";
import Link from "next/link";
const testimonialData = [
    {
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        quote: "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
        image: "/images/testimonial/home3/review/1.png"
    },
    {
        name:"Annette Black",
        role:"Web Designer",
        quote:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage",
        image: "/images/testimonial/home3/review/2.png"
    },
    {
        name:"Brooklyn lye",
        role: "Software Developer",
        quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
        image: "/images/testimonial/home3/review/3.png"
    },
    {
        name: "Simmons Dev",
        role: "Graphic Designer",
        quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
        image: "/images/testimonial/home3/review/4.png"
    }
]
const Testimonial = () => {
  return (
    <section className="testimonial testimonial--style3 padding-top padding-bottom brand3-bg-1">
      <div className="container" data-aos="fade-up" data-aos-duration="800">
        <div className="section-header text-center">
          <h2>Loved by Our Students</h2>
        </div>
        <div className="testimonial__wrapper">
            <Swiper className="testimonial__slider3">
                {
                    testimonialData.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <div className="row g-5 align-items-center">
                                <div className="col-md-6">
                                    <div className="testimonial__item">
                                        <div className="testimonial__item-inner">
                                            <div className="testimonial__content">
                                                <div className="testimonial__writer">
                                                    <h5>{item.name}</h5>
                                                    <p>{item.role}</p>
                                                    <span>
                                                        <i className="fa-solid fa-star"></i><i
                                                            className="fa-solid fa-star"></i><i
                                                            className="fa-solid fa-star"></i><i
                                                            className="fa-solid fa-star"></i><i
                                                            className="fa-solid fa-star"></i></span>
                                                </div>
                                                <blockquote className="blockquote">
                                                    <p>{item.quote}</p>
                                                </blockquote>

                                                <span className="quote"><i className="fa-solid fa-quote-right"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="testimonial__item">
                                        <div className="testimonial__item-inner">
                                            <div className="testimonial__thumb">
                                                <img src={item.image}
                                                    alt="testimonial"/>
                                                <div className="testimonial__thumb-playbtn">
                                                    <Link href="https://www.youtube.com/watch?v=Hh1UCOizzMc"
                                                        data-fslightbox><img
                                                            src="/images/testimonial/home3/play-btn.png"
                                                            alt="ply-btn"/></Link>
                                                    <p>Testimonial by</p>
                                                    <span>Annette Black</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

import CustomSlider from "../../base/slots/CustomSlider";
import ReviewsData from "../../../api/reviews.json";
import Link from "next/link";
const RealReview = ({toggler, setToggler}) => {
  const reviews = ReviewsData;
  const spaceBetween = 24;
  const grabCursor = true;
  const loop = true;
  const breakpoints = {
    576: {
      slidesPerView: 2,
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
      spaceBetween: 25,
    },
  };

  const autoplay = {
    delay: 1,
    disableOnInteraction: true,
  };

  const speed = 5000;

  return (
    <>
      <div className="section-header">
        <h3>Real Review</h3>
        <p className="mute">
          Here's what our students have to say about their experience with
          Designership.
        </p>
      </div>
      <div className="studentreview__wrapper">
        <CustomSlider
          className="slider__pagination-1"
          dataList={reviews}
          breakpoints={breakpoints}
          loop={loop}
          autoplay={autoplay}
          speed={speed}
          grabCursor={grabCursor}
        >
          {(props) => (
            <div className="studentreview__item">
              <div className="studentreview__item-inner">
                <div className="studentreview__thumb">
                  <img
                    className="studentreview__thumb-image"
                    src={props.item.thumbnail}
                    alt="review Images"
                  />
                  <div className="studentreview__thumb-top">
                    <img
                      src="/images/testimonial/home1/review/Logo.png"
                      alt="icon"
                    />
                    <p>{props.item.videoTitle}</p>
                  </div>
                  <div className="studentreview__thumb-playbtn">
                      <Link href="" onClick={(e)=>{setToggler(!toggler); e.preventDefault()}}>
                        <img
                          src="/images/testimonial/home1/review/Youtube.png"
                          alt="ply-btn" 
                        />
                      </Link>
                  </div>
                </div>

                <div className="studentreview__item-author">
                  <h6>{props.item.name}</h6>
                  <span>{props.item.role}</span>
                </div>
              </div>
            </div>
          )}
        </CustomSlider>
      </div>
    </>
  );
};

export default RealReview;
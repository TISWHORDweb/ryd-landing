import React from "react";
import CustomSlider from "../../base/slots/CustomSlider";
import CourseCard from "../../partials/CourseCard";

class FeaturedCourse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      breakpoints: {
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
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      speed: 3000,
      pagination: {
        el: ".slider__pagination-1",
        clickable: true,
      },
    };
  }

  render() {
    const { courses } = this.props;

    return (
      <>
        <div className="section-header">
          <h2>Featured Course</h2>
        </div>
        <div className="course__wrapper">
          <CustomSlider
            dataList={courses}
            breakpoints={this.state.breakpoints}
            loop={this.state.loop}
            autoplay={this.state.autoplay}
            speed={this.state.speed}
            pagination={this.state.pagination}
            grabCursor={this.state.grabCursor}
          >
            {(item) => <CourseCard courseDetails={item.item} />}
          </CustomSlider>
          <div className="slider__pagination-1 mt-5 py-2 text-center"></div>
        </div>
      </>
    );
  }
}

export default FeaturedCourse;

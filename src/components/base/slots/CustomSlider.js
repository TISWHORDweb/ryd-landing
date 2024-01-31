import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Pagination, Autoplay } from "swiper/modules";

const CustomSlider = (props) => {
 
  const {
    dataList,
    breakpoints,
    SliderContainerClass,
    slidesPerView,
    loop,
    clickable,
    freeMode,
    grabCursor,
    autoplay,
    pagination,
    spaceBetween,
    speed,
    effect,
  } = props;

  const modules = [Pagination, Autoplay];

  return (
    <Swiper
      modules={modules}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      pagination={pagination}
      autoplay={autoplay}
      loop={loop}
      clickable={clickable}
      freeMode={freeMode}
      grabCursor={grabCursor}
      speed={speed}
      effect={effect}
    >
      {dataList?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="client-only">
            {props.children && props.children({ item })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSlider;

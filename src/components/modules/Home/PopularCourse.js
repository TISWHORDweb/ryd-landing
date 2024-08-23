import {  Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
const courseList = [
  {
    index: 1,
    img: '/images/course/1.png',
    tag: 'Web Development',
    tagClass: 'course__meta-tag course__meta-tag--cat1',
    rating: '4.9',
    star: '/images/course/star.png',
    sale: '(526)',
    description: 'Contrar to popuar belieif loreme Ipsum is an not consectetur cites of the word in...',
    mentorImg: '/images/avatar/1.png',
    mentorName: ' John Doe',
    delPrice: '$100',
    price: '$50.00'
  },
  {
    index: 2,
    img: 'images/course/2.png',
    tag: 'English',
    tagClass: 'course__meta-tag course__meta-tag--cat1',
    rating: '4.5',
    star: '/images/course/star.png',
    sale: '(1326)',
    description: 'How to Learning Basic English Strategy for Research',
    mentorImg: '/images/avatar/2.png',
    mentorName: ' Jenny Wilsone',
    delPrice: '$100',
    price: '$50.00'


  },
  {
    index: 3,
    img: '/images/course/3.png',
    tag: 'Content Writing',
    tagClass: 'course__meta-tag course__meta-tag--cat2',
    rating: '4.5',
    star: '/images/course/star.png',
    sale: '(326)',
    description: 'Content is King: Writing Killer Conte-nt Web & Marketing',
    mentorImg: '/images/avatar/3.png',
    mentorName: ' Theresa Webb',
    delPrice: '$100',
    price: '$50.00'


  },
  {
    index: 4,
    img: '/images/course/4.png',
    tag: 'Art & Design',
    tagClass: 'course__meta-tag course__meta-tag--cat3',
    rating: '4.5',
    star: '/images/course/star.png',
    sale: '(2326)',
    description: 'How to Learning Basic design Strategy for Research.',
    mentorImg: '/images/avatar/4.png',
    mentorName: ' Wade Warren',
    delPrice: '$100',
    price: '$50.00'


  },
  {
    index: 5,
    img: '/images/course/1.png',
    tag: 'Web Development',
    tagClass: 'course__meta-tag course__meta-tag--cat1',
    rating: '4.9',
    star: '/images/course/star.png',
    sale: '(526)',
    description: 'Contrar to popuar belieif loreme Ipsum is an not consectetur cites of the word in...',
    mentorImg: '/images/avatar/1.png',
    mentorName: '  John Doe',
    delPrice: '$100',
    price: '$50.00'


  },
  {
    index: 6,
    img: 'images/course/2.png',
    tag: 'English',
    tagClass: 'course__meta-tag course__meta-tag--cat1',
    rating: '4.5',
    star: '/images/course/star.png',
    sale: '(1326)',
    description: 'How to Learning Basic English Strategy for Research',
    mentorImg: '/images/avatar/2.png',
    mentorName: ' Jenny Wilsone',
    delPrice: '$100',
    price: '$50.00'


  },

  {
    index: 1,
    img: '/images/course/1.png',
    tag: 'Web Development',
    tagClass: 'course__meta-tag course__meta-tag--cat1',
    rating: '4.9',
    star: '/images/course/star.png',
    sale: '(526)',
    description: 'Contrar to popuar belieif loreme Ipsum is an not consectetur cites of the word in...',
    mentorImg: '/images/avatar/1.png',
    mentorName: ' John Doe',
    delPrice: '$100',
    price: '$50.00'
  },
  {
    index: 2,
    img: 'images/course/2.png',
    tag: 'English',
    tagClass: 'course__meta-tag course__meta-tag--cat1',
    rating: '4.5',
    star: '/images/course/star.png',
    sale: '(1326)',
    description: 'How to Learning Basic English Strategy for Research',
    mentorImg: '/images/avatar/2.png',
    mentorName: ' Jenny Wilsone',
    delPrice: '$100',
    price: '$50.00'


  },
  {
    index: 3,
    img: '/images/course/3.png',
    tag: 'Content Writing',
    tagClass: 'course__meta-tag course__meta-tag--cat2',
    rating: '4.5',
    star: '/images/course/star.png',
    sale: '(326)',
    description: 'Content is King: Writing Killer Conte-nt Web & Marketing',
    mentorImg: '/images/avatar/3.png',
    mentorName: ' Theresa Webb',
    delPrice: '$100',
    price: '$50.00'


  },
  {
    index: 4,
    img: '/images/course/4.png',
    tag: 'Art & Design',
    tagClass: 'course__meta-tag course__meta-tag--cat3',
    rating: '4.5',
    star: '/images/course/star.png',
    sale: '(2326)',
    description: 'How to Learning Basic design Strategy for Research.',
    mentorImg: '/images/avatar/4.png',
    mentorName: ' Wade Warren',
    delPrice: '$100',
    price: '$50.00'


  },
  {
    index: 5,
    img: '/images/course/1.png',
    tag: 'Web Development',
    tagClass: 'course__meta-tag course__meta-tag--cat1',
    rating: '4.9',
    star: '/images/course/star.png',
    sale: '(526)',
    description: 'Contrar to popuar belieif loreme Ipsum is an not consectetur cites of the word in...',
    mentorImg: '/images/avatar/1.png',
    mentorName: '  John Doe',
    delPrice: '$100',
    price: '$50.00'


  },
  {
    index: 6,
    img: 'images/course/2.png',
    tag: 'English',
    tagClass: 'course__meta-tag course__meta-tag--cat1',
    rating: '4.5',
    star: '/images/course/star.png',
    sale: '(1326)',
    description: 'How to Learning Basic English Strategy for Research',
    mentorImg: '/images/avatar/2.png',
    mentorName: ' Jenny Wilsone',
    delPrice: '$100',
    price: '$50.00'


  },
];
const PopularCourse = ({ title }) => {
  const breakpoints = {
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
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }


  const autoplay = {
    delay: 1,
    disableOnInteraction: false,
  };

  const bulletCount = 4;  
  return (
    <section className="course course--style1 padding-top padding-bottom brand-1">
      <div className="container-fluid px-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
        <div className="section-header text-center section-header--dark">
          <h2>{title}</h2>
          <p className="style4">Not certain what course to enrol your ward in? You can explore some of these options or get professional counselling from our in-house experts.</p>
        </div>
        <div className='course__wrapper'>
          <Swiper className='course__slider'
            modules={[Pagination, Autoplay]}
            breakpoints={breakpoints}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={autoplay}
            speed={3000}
            pagination={{
              el: ".slider__pagination-1",
              clickable: true,
              renderBullet: function (index, className) {
                if(index < bulletCount){
                  return '<span class="' + className + '">'  + '</span>';
                }
                return ''
              },
            }}

            >
            {courseList.map((course, index) => (
              <SwiperSlide key={index}>
                <div className='course__item'>
                  <div className='course__item-inner'>
                    <div className='course__thumb'>
                      <img src={course.img} alt='course Images' />
                      <Link href='' className={course.index % 2 == 0 ? 'course__btn course__btn--save course__btn--active' : 'course__btn course__btn--save'}>
                        <FontAwesomeIcon icon={faBookmark} />
                      </Link>
                    </div>
                    <div className='course__content'>
                      <div className='course__content-top'>
                        <span className={course.tagClass}>{course.tag}</span>
                        <div className='course__focus-inner'>
                          <span>{course.rating}</span>
                          <img src="/images/course/star.png" alt="review-star" />
                          <span>{course.sale}</span>
                        </div>
                      </div>
                      <h6>
                        <Link href="course-details">{course.description}</Link>
                      </h6>
                      <div className='course__content-bottom'>
                        <Link href='mentor-details'>
                          <img src={course.mentorImg} />
                          {course.mentorName}
                        </Link>
                        <div className='course-price'>
                          <del>{course.delPrice}</del>
                          <span>{course.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
            <div className="slider__pagination-1"></div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default PopularCourse
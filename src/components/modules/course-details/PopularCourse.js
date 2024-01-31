import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import "swiper/css";
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
        mentorName: ' Jenny',
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
        mentorName: ' Theresa',
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
        mentorName: ' Rani',
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
        mentorName: ' Jenny',
        delPrice: '$100',
        price: '$50.00'


    },
    {
        index: 7,
        img: '/images/course/3.png',
        tag: 'Content Writing',
        tagClass: 'course__meta-tag course__meta-tag--cat2',
        rating: '4.5',
        star: '/images/course/star.png',
        sale: '(326)',
        description: 'Content is King: Writing Killer Conte-nt Web & Marketing',
        mentorImg: '/images/avatar/3.png',
        mentorName: ' Theresa',
        delPrice: '$100',
        price: '$50.00'


    },
    {
        index: 8,
        img: '/images/course/4.png',
        tag: 'Art & Design',
        tagClass: 'course__meta-tag course__meta-tag--cat3',
        rating: '4.5',
        star: '/images/course/star.png',
        sale: '(2326)',
        description: 'How to Learning Basic design Strategy for Research.',
        mentorImg: '/images/avatar/4.png',
        mentorName: ' Rani',
        delPrice: '$100',
        price: '$50.00'


    },
    {
        index: 9,
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
        index: 10,
        img: 'images/course/2.png',
        tag: 'English',
        tagClass: 'course__meta-tag course__meta-tag--cat1',
        rating: '4.5',
        star: '/images/course/star.png',
        sale: '(1326)',
        description: 'How to Learning Basic English Strategy for Research',
        mentorImg: '/images/avatar/2.png',
        mentorName: ' Jenny',
        delPrice: '$100',
        price: '$50.00'


    },
    {
        index: 11,
        img: '/images/course/3.png',
        tag: 'Content Writing',
        tagClass: 'course__meta-tag course__meta-tag--cat2',
        rating: '4.5',
        star: '/images/course/star.png',
        sale: '(326)',
        description: 'Content is King: Writing Killer Conte-nt Web & Marketing',
        mentorImg: '/images/avatar/3.png',
        mentorName: ' Theresa',
        delPrice: '$100',
        price: '$50.00'


    },
    {
        index: 12,
        img: '/images/course/4.png',
        tag: 'Art & Design',
        tagClass: 'course__meta-tag course__meta-tag--cat3',
        rating: '4.5',
        star: '/images/course/star.png',
        sale: '(2326)',
        description: 'How to Learning Basic design Strategy for Research.',
        mentorImg: '/images/avatar/4.png',
        mentorName: ' Rani',
        delPrice: '$100',
        price: '$50.00'


    }
];
const PopularCourses = () => {
    const breakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 1,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 22,
            slidesPerGroup: 1,
        },
    };

    const autoplay = {
        delay: 1,
        disableOnInteraction: true,
    };
    const speed = 2000;
    return (
        <>
            <div className="section-header">
                <h2>Some More Courses For You</h2>
            </div>
            <div className="course__wrapper">
                <Swiper
                    modules={[Autoplay]}
                    className="course__sliderpopular"
                    autoplay={autoplay}
                    slidesPerView={4}
                    breakpoints={breakpoints}
                    loop={true}
                    speed={speed}
                    grabCursor={true}
                >
                    {
                        courseList.map((item) => (
                            <SwiperSlide key={item.index}>
                                <div className="course__item">
                                    <div className="course__item-inner">
                                        <div className="course__thumb">
                                            <img src={item.img} />
                                            <Link href='' className={item.index % 2 == 0 ? 'course__btn course__btn--save course__btn--active' : 'course__btn course__btn--save'}>
                                                <FontAwesomeIcon icon={faBookmark} />
                                            </Link>
                                        </div>
                                        <div className="course__content">
                                            <div className="course__content-top">
                                                <span className={item.tagClass}>{item.tag}</span>
                                                <div className="couurse__focus-inner">
                                                    <span>{item.rating}</span>
                                                    <img src={item.star} />
                                                    <span>{item.sale}</span>
                                                </div>
                                            </div>
                                            <h6>
                                                <Link href="">{item.description}</Link>
                                            </h6>
                                            <div className="course__content-bottom">
                                                <Link href=""><img src={item.mentorImg} alt="avatar" />{item.mentorName}</Link>
                                                <div className="course-price">
                                                    <del>{item.delPrice}</del>
                                                    <span> {item.price}</span>
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
        </>
    )
}
export default PopularCourses;
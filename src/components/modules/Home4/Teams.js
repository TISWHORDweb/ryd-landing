 
import Link from 'next/link'
import  { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import coursedata from '../../../api/index4/advanced-courses.json'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// const mentors = [
//     {
//         "avatar": "/images/team/home4/1.png",
//         "name": "Jenny Wilson",
//         "role": "UI Designer"
//     },
//     {
//         "avatar": "/images/team/home4/2.png",
//         "name": "Robert Fox",
//         "role": "Product Designer"
//     },
//     {
//         "avatar": "/images/team/home4/3.png",
//         "name": "Devone Lane",
//         "role": "Web Developer"
//     },
//     {
//         "avatar": "/images/team/home4/4.png",
//         "name": "Jerome Bell",
//         "role": "Marketer"
//     },
//     {
//         "avatar": "/images/team/home4/5.png",
//         "name": "Marvin McKi",
//         "role": "UI/UX Designer"
//     },
//     {
//         "avatar": "/images/team/home4/6.png",
//         "name": "Darrell Bell",
//         "role": "Graphic Designer"
//     }
// ]
const Teams = () => {

    const backgroundImage = {
        backgroundImage: "url('/images/bg/home4/2.png')",
        marginBottom: '100px'
    };
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
        }
      };
      const autoplay = {
        delay: 2000,
        disableOnInteraction: false,
      };
      const speed = 3000;
      const bulletCount = 3


    return (
        <div>
            <section className='course course--style4 padding-top padding-bottom bg--full' style={backgroundImage}>
                {/* <div className='container'> */}
                    {/* <div className="team__wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                <div className="team__header">
                                    <h2 className="style2-h2">Meet Our Experts</h2>
                                    <p className="style2">Our team comprises certified and experienced teachers, industry professionals, and tech enthusiasts dedicated to redefining online learning for children aged 7+ to 16.</p>
                                    <Link href="/mentors" className="trk-btn trk-btn--rounded trk-btn--secondary4">{"See More "}
                                        <span><span><FaArrowRight /></span></span></Link>
                                </div>
                            </div>
                            {mentors.map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-sm-6">
                                        <div className="team__item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                            <div className="team__item-inner">
                                                <div className="team__item-thumb team__item-thumb--style1">
                                                    <img src={item.avatar} alt="Team Image" />
                                                </div>
                                                <div className="team__item-content team__item-content--style1">
                                                    <div className="team__item-author">
                                                        <h6><Link href="/mentor-details">{item.name}</Link> </h6>
                                                        <p>{item.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}      
                         </div>
                    </div> */}
                {/* </div> */}
                <div className='container aos-init aos-animate' data-aos='fade-up' data-aos-duration="800" data-aos-delay="100">
                    <div className="section-header text-center section-header--dark section-header--max20">
                        <h2 className="style2-h2">Our Most Advanced Courses</h2>
                    </div>
                    <div className='course__wrapper'>
                        <Swiper className='course__slider course__slider--style4'
                            modules={[Pagination, Autoplay]}
                            grabCursor={true}
                            loop={true}
                            slidesPerView={1}
                            spaceBetween={24}
                            breakpoints={breakpoints}
                            autoplay={autoplay}
                            speed={speed}
                            pagination={{
                            el: ".slider__pagination-2",
                            clickable: true,
                            renderBullet: (index, className) => {
                                if (index < bulletCount) {
                                return `<span class=${className}></span>`;
                                }
                                return '';
                            }
                            }}
                        >
                            {
                            coursedata.map((item, index) => {
                                const lines = item.description.split('\n');
                                return (
                                    <SwiperSlide key={index}>
                                        <div className='course__item'>
                                            <div className='course__item-inner'>
                                            <div className='course__thumb'>
                                                <img src={item.thumbnail} alt="course Images" />
                                            </div>
                                            </div>
                                            <div className="course__content">
                                            <div className="course__content-top">
                                                <div className="course__author">
                                                <Link href="mentor-details"><img src={item.avatar} alt="avatar" /> {item.avatarName}</Link>
                                                </div>
                                                <div className="course__focus-inner">
                                                <span>{item.rating}</span>
                                                <img src="/images/course/star.png" alt="review-star" />
                                                <span>{`(${item.ratingCount})`}</span>
                                                </div>
                                            </div>
                                            <h5> <Link href="course-details">{item.title}</Link> </h5>
                                            <p>
                                                {lines.map((line, index) => (
                                                    // Add a <br /> after each line except the last one
                                                    <React.Fragment key={index}>
                                                    * {line}
                                                    {index !== lines.length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                            <div className="course__content-footer">
                                                <span><img src="/images/course/home4/1.svg" alt="icon" />{item.age}</span>
                                                <span><img src="/images/course/home4/4.svg" alt="icon" /> {`weeks ${item.duration}`}</span>
                                                <span><img src="/images/course/home4/3.svg" alt="icon" /> <Link href="">{`${item.class} classes`}</Link></span>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
})
                            }
                            <div className="slider__pagination-2"></div>
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Teams;


// const PopularCourse = () => {
//   const backgroundImage = {
//     backgroundImage: "url(/images/bg/home4/1.png)",
//   }

//   return (
//     <section className='course course--style4 bg--cover' style={backgroundImage}>
//       <div className='container aos-init aos-animate' data-aos='fade-up' data-aos-duration="800" data-aos-delay="100">
//         <div className="section-header text-center section-header--dark section-header--max20">
//           <h2 className="style2-h2">Our Most Popular Courses</h2>
//         </div>
//         <div className='course__wrapper'>
//           <Swiper className='course__slider course__slider--style4'
//             modules={[Pagination, Autoplay]}
//             grabCursor={true}
//             loop={true}
//             slidesPerView={1}
//             spaceBetween={24}
//             breakpoints={breakpoints}
//             autoplay={autoplay}
//             speed={speed}
//             pagination={{
//               el: ".slider__pagination-2",
//               clickable: true,
//               renderBullet: (index, className) => {
//                 if (index < bulletCount) {
//                 return `<span class=${className}></span>`;
//                 }
//                 return '';
//               }
//             }}
//           >
//             {
//               coursedata.map((item, index) => (
//                 <SwiperSlide key={index}>
//                   <div className='course__item'>
//                     <div className='course__item-inner'>
//                       <div className='course__thumb'>
//                         <img src={item.thumbnail} alt="course Images" />
//                       </div>
//                     </div>
//                     <div className="course__content">
//                       <div className="course__content-top">
//                         <div className="course__author">
//                           <Link href="mentor-details"><img src={item.avatar} alt="avatar" /> {item.avatarName}</Link>
//                         </div>
//                         <div className="course__focus-inner">
//                           <span>{item.rating}</span>
//                           <img src="/images/course/star.png" alt="review-star" />
//                           <span>{`(${item.ratingCount})`}</span>
//                         </div>
//                       </div>
//                       <h5> <Link href="course-details">{item.title}</Link> </h5>
//                       <p>{item.description}</p>
//                       <div className="course__content-footer">
//                         <span><img src="/images/course/home4/1.svg" alt="icon" />{item.age}</span>
//                         <span><img src="/images/course/home4/4.svg" alt="icon" /> {`${item.duration} mins`}</span>
//                         <span><img src="/images/course/home4/3.svg" alt="icon" /> <Link href="">{`${item.class} class`}</Link></span>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))
//             }
//             <div className="slider__pagination-2"></div>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PopularCourse

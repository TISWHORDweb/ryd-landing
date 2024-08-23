import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import CoursesData from '../../../api/index3/courses.json'
import Link from "next/link";
import { FaStar } from "react-icons/fa";
const PopularCourse = () => {
  const [courses, setCourses] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = CoursesData;
        setCourses(data);

        const uniqueCategories = [
          ...new Set(data.map((item) => item.categoryID)),
        ];
        const categories = uniqueCategories.map((categoryID) => {
          const category = data.find(
            (item) => item.categoryID === categoryID,
          ).category;
          return { categoryID, category };
        });
        setCategoryList(categories);
      } catch (error) {
        return null
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (categoryList && categoryList.length) {
      setSelectedCategory(categoryList[0].categoryID);
    }
  }, [categoryList]);

  useEffect(() => {
    const filtered = courses.filter(
      (course) => course.categoryID === selectedCategory,
    );
    setFilteredCourses(filtered);
  }, [courses, selectedCategory]);
  return (
    <section className="course course--style3 padding-top padding-bottom brand3-bg-1">
      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <div className="section-header text-center">
          <div className="subtitle subtitle--style3 justify-content-center">
            <img src="/images/icon/home3/2.png" alt="roket icon" />
            <p className="mb-0">Course</p>
          </div>
          <h2>Display the special course we provide.</h2>
        </div>
        <div className="course__wrapper">
          <ul className="nav nav-pills" >
            {
              categoryList.map((item, index) => (
                <li key={index} className="nav-item" role="presentation">
                  <button className={`tab-btn ${selectedCategory === item.categoryID ? "active" : ""
                    }`} id="pills-web-tab" data-bs-toggle="pill" data-bs-target="#pills-web" role="tab" aria-controls="pills-web" aria-selected={selectedCategory === item.categoryID ? true : false}
                    onClick={() => setSelectedCategory(item.categoryID)}>
                    {item.category}
                  </button>
                </li>
              ))
            }
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {
              categoryList.map((item, index) => (
                <div key={index} className={`tab-pane fade ${item.categoryID === selectedCategory ? 'active show' : ''}`}>
                  <div className="row g-4">
                    {
                      courses.filter((item1) => item1.categoryID === item.categoryID).map((item3, index) => (
                        <div className="col-xxl-3 col-lg-4 col-md-6" key={index}>
                          <div className="course__item">
                            <div className="course__item-inner">
                              <div className="course__thumb">
                                <img src={item3.thumbnail} />
                              </div>
                              <div className="course__content">
                                <div className="course__content-top">
                                  <div className="course__focus">
                                    <FaStar />
                                    <span>{item3.rating}</span>
                                    <span>{`(${item3.ratingCount})`}</span>
                                  </div>
                                  <div className="course__price">
                                    <p className="mb-0">{`$${item3.discountedPrice}`}</p>
                                  </div>
                                </div>
                                <h6>
                                  <Link href="/course-details">{item3.title}</Link>
                                </h6>
                                <div className="course__content-bottom course__content-bottom--border ">
                                  <div className="course__mentor">
                                    <img src={item3.avatar} alt="mentor" />
                                    <div className="course__mentor-name">
                                      <Link href="/mentor-details">{item3.avatarName}</Link>
                                    </div>
                                  </div>
                                  <div className="course__content-enroll">
                                    <Link href="/signin" className="text-btn text-btn--small">
                                      {" Enroll Now"}
                                      <span><FaArrowRight /></span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
          <div className="text-center">
            <Link href="/courses" className="trk-btn  trk-btn--secondary3 mt-5">
              {" All Courses "}
              <span>
                <FaArrowRight />
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
export default PopularCourse;
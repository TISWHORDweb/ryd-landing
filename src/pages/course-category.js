import { useState } from "react";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import PageHeader from "../components/modules/Home/PageHeader";
import Newsletter from "../components/modules/newsletter/Newsletter";
import CoursesData from "../api/course-category/courseCategory.json";
import Pagination from "../components/base/slots/Pagination";
import CourseCard from "../components/partials/CourseCard";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CourseCategory = () => {
  const courses = CoursesData;
  const [current, setCurrent] = useState(1);
  const updateCurrent = (i) => {
    setCurrent(i);
  };

  return (
    <>
      <Header />
      <PageHeader
        title="Course Category"
        subtitle="Course Category"
        image='/images/bg/home1/2.png'
      />

      <div className="course course--style1 padding-top padding-bottom">
        <div className="container">
          <div
            className="course__topbar mb-5"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="course__topbar-left">
              <select name="cars" className="form-select categories-filter">
                <option value="">Filter By</option>
                <option value="content">UI/UX</option>
                <option value="web">Web Design</option>
                <option value="graphic">Graphic</option>
                <option value="seo">Social</option>
              </select>
            </div>

            <div className="course__topbar-right">
              <div className="course__search">
                <div className="body">
                  <form className="" action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button type="submit" className="search-btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Pagination dataList={courses} paginate={9}>
            <div slot="content">
              <div className="row g-4">
                {courses
                  .slice((current - 1) * 9, current * 9)
                  .map((itm, idx) => (
                    <div key={idx} className="col-lg-4 col-md-6">
                      <CourseCard courseDetails={itm} />
                    </div>
                  ))}
              </div>
            </div>
            <div slot="button">
              <div className="paginations">
                <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                  <li>
                    <Link
                      href=""
                      onClick={() => updateCurrent(current - 1 || 1)}
                    >
                      <FaArrowLeft />
                    </Link>
                  </li>
                  {Array.from(
                    { length: Math.ceil(courses.length / 9) },
                    (_, i) => i + 1,
                  ).map((item) => (
                    <li key={item}>
                      <Link
                        href=""
                        className={current === item ? "active" : ""}
                        onClick={() => updateCurrent(item)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href=""
                      onClick={() =>
                        updateCurrent(
                          current < Math.ceil(courses.length / 9)
                            ? current + 1
                            : current,
                        )
                      }
                    >
                      <FaArrowRight />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Pagination>
        </div>
      </div>

      <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
        <Newsletter  title="Our mission is to transform learning into an exhilarating journey of discovery."/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseCategory;

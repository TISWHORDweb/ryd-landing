import { useState } from "react";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import PageHeader from "../components/modules/Home/PageHeader";
import CourseCurriculum from "../components/modules/course-details/CourseCurriculum";
import Details from "../components/modules/course-details/Details";
import Instructor from "../components/modules/course-details/Instructor";
import RealReviews from "../components/modules/course-details/RealReviews";
import PopularCourses from "../components/modules/course-details/PopularCourse";
import FsLightbox from "fslightbox-react";
const Course_details = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
        <FsLightbox toggler={toggler} sources={["https://youtu.be/Hh1UCOizzMc"]} />
      <Header />
      <PageHeader
        title="Course Details"
        subtitle="Course Details"
        image='images/bg/home1/11.png'
      />
      <Details></Details>
        
      <div className="coursedetails coursedetails--style2 padding-top padding-bottom brand1-bg-1">
        <div className="container" data-aos="fade-up" data-aos-duration="800">
          <CourseCurriculum />
        </div>
      </div>

      <section className="team team--details padding-top">
        <div className="container" data-aos="fade-up" data-aos-duration="600">
          <Instructor />
        </div>
      </section>

      <section className="studentreview padding-top">
        <div className="container" data-aos="fade-up" data-aos-duration="600">
          <RealReviews toggler={toggler} setToggler={setToggler} />
        </div>
      </section>

      <section className="course course--style1 padding-top padding-bottom">
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
          <PopularCourses />
        </div>
      </section>

      <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
        <Newsletter  title="Our mission is to transform learning into an exhilarating journey of discovery."/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course_details;

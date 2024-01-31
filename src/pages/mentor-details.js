import PageHeader from "../components/modules/Home/PageHeader";
import Courses from "../components/modules/mentor-details/Courses";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Team from "../components/modules/mentor-details/Team";
import Header from "../components/headers/Header";
import courses from "../api/featured_courses.json";
import Footer from "../components/footers/Footer";

function MentorDetails() {


  return (
    <>
    <Header />
      <PageHeader
        title="Mentor Details"
        subtitle="Mentor Details"
        image='images/bg/home1/6.png'
      />
      <Team />
        <section className="course course--style1 padding-top ">
          <div className="container">
            <Courses courses={courses} />
          </div>
        </section>
      



      <Newsletter  title="How can I get free Pro memberships for mentors?"/>
      <Footer />
    </>
  );
}

export default MentorDetails;

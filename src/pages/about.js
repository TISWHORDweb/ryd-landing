import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import WhoWeAre from "../components/modules/Home/WhoWeAre";
import FeaturedSection from "../components/partials/FeaturedSection";
import PopularCourse from "../components/modules/Home/PopularCourse";
import MeetOurExpert from "../components/modules/Home/MeetOurExpert";
import Testimonials from "../components/modules/Home/Testimonials";
import Newsletter from "../components/modules/newsletter/Newsletter";
const About = () => {
  return (
    <>
      <Header />
      <PageHeader
        title="About Us"
        subtitle="About Us"
        image='images/bg/home1/1.png'
      />

      <section className="about about--style5 padding-top padding-bottom">
        <div className="container">
          <WhoWeAre />
        </div>
      </section>
      {/* <section className="feature padding-bottom padding-top ">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="section-header text-center">
            <div className="subtitle subtitle--style5 justify-content-center">
              <p className="mb-0">Our specialties</p>
            </div>
            <h2>Look into Featured Courses</h2>
            <p className="style2">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim.2
            </p>
          </div>
          <FeaturedSection />
        </div>
      </section> */}
      {/* <PopularCourse title="Our Popular Courses" /> */}
      <MeetOurExpert additionalClass="padding-top" />
      {/* <Testimonials /> */}
      <Newsletter additionalClass="padding-top" title="Our mission is to transform learning into an exhilarating journey of discovery." />
      <Footer />
    </>
  );
};

export default About;

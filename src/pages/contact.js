import ContactForm from "../components/modules/Contact/ContactForm";
import DetailsInfo from "../components/modules/Contact/DetailsInfo";
import MapLink from "../components/modules/Contact/MapLink";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Footer from "../components/footers/Footer";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";
const Contact = () => {

  return (
    <>
      <Header />
      <PageHeader
        title="Contact Us"
        subtitle="Contact Us"
        image='../../../images/bg/home1/7.png'
      />
      
      <div className="conatct padding-top padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5 scroll-component">
              
                  <div className="col-lg-6" data-aos="fade-right">
                    <DetailsInfo />
                  </div>
                  <div className="col-lg-6" data-aos="fade-left">
                    <ContactForm />
                  </div>
               
            </div>
          </div>
        </div>
      </div>
      {/* <MapLink /> */}

      <Newsletter title = "Join us on a transformative journey where knowledge knows no bounds."/>

      <Footer />

    </>
  );
};

export default Contact;

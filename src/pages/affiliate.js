import DetailsInfo from "../components/modules/Contact/DetailsInfo";
import MapLink from "../components/modules/Contact/MapLink";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Footer from "../components/footers/Footer";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";
import AffiliateForm from "../components/modules/Affiliate/AffiliateForm";
import AffiliateTable from "../components/modules/Affiliate/AffiliateTable";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../Network";
const Contact = () => {
    const [affiliates, setAffiliates] = useState()

    const HandleAffiliate = async (code,key) => {
        try {
            const response = await axios.get(`${baseUrl}/common/affiliates/${code}/${key}`);
            setAffiliates(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
      <Header />
      <PageHeader
        title="Affiliate"
        subtitle="Affiliate"
        image='../../../images/bg/home1/13.png'
      />
      
      <div className="conatct padding-top padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5 scroll-component">
              
                  <div className="col-lg-6" data-aos="fade-right">
                    <AffiliateTable affiliates={affiliates}/>
                  </div>
                  <div className="col-lg-6" data-aos="fade-left">
                    <AffiliateForm HandleAffiliate={HandleAffiliate} />
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

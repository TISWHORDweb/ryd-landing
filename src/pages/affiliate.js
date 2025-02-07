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
const Affiliate = () => {
  const [affiliates, setAffiliates] = useState()
  const [error, setError] = useState("")


  const HandleAffiliate = async (e, code, key) => {
    e.preventDefault()
    try {
      const response = await axios.get(`${baseUrl}/common/affiliates/${code}/${key}`);
      if (!response.data.status) {
        setError("Invalid code or access key try again later")
        return;
      }
      setAffiliates(response.data.data);
      setError("")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="affiliate">
      <Header />
      <PageHeader
        title="Affiliate"
        subtitle="Affiliate"
        image='../../../images/bg/home1/13.png'
      />

      <div className="conatct  padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="scroll-component">

              <div className="" data-aos="fade-right">
                <AffiliateTable affiliates={affiliates} />
              </div>
              <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6" data-aos="fade-left">
                <p className="text-danger">{error}</p>
                <AffiliateForm HandleAffiliate={HandleAffiliate} />
              </div>
              <div className="col-lg-3"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <MapLink /> */}

      <Newsletter title="Join us on a transformative journey where knowledge knows no bounds." />

      <Footer />

    </div>
  );
};

export default Affiliate;

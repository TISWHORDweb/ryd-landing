import { useEffect } from "react";
import Link from "next/link";
import "aos/dist/aos.css";
const Newsletter = ({ title, additionalClass }) => {
  useEffect(() => {
    document
      .getElementById("custom-footer")
      ?.classList.add("footer__top--style1");
  }, []);
  return (
    <div className={`newsletter ${additionalClass}`} >
      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <div
              className="newsletter__content-inner newsletter__content-inner--style1 text-center"
              style={{
                backgroundImage: 'url(images/footer/2.png)',
              }}
            >
              <h2>{title}</h2>
              <Link
                href="https://app.rydlearning.com/auth-register"
                className="trk-btn trk-btn--rounded trk-btn--primary1">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

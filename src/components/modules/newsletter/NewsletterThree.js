import { useEffect } from "react";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    document
      .getElementById("custom-footer")
      ?.classList.add("footer__top--style1");
  }, []);
  return (
    <div className="newsletter__wrapper">
      <div className="newsletter__content">
        <div
          className="newsletter__content-inner newsletter__content-inner--style1 text-center"
          style={{
            backgroundImage: 'url(images/footer/2.png)',
          }}
        >
          <h2 className="style2-h2">Enter Your Email To Get The Latest News</h2>
          <Link
            href="/signin"
            className="trk-btn trk-btn--rounded trk-btn--primary1"
          >
            Join With Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

import { useEffect } from "react";

const Newsletterfour = () => {
  useEffect(() => {
    document
      .getElementById("custom-footer")
      ?.classList.add("footer__top--style1");
  }, []);
  return (
    <div className="newsletter" style={{ marginTop: '150px'}}>
      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <div
              className="newsletter__content-inner newsletter__content-inner--style4 text-center"
              style={{
                backgroundImage: 'url(images/footer/5.png)',
              }}
            >
              <h2 className="style2-h2">Get The Latest News On Our Courses</h2>

              <form className="form form-subscribe" action="">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-success btn-lg" type="submit">
                      Subscribe
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletterfour;

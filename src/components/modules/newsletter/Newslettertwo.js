const Newslettertwo = () => {
  return (
    <div className="cta padding-bottom">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div
          className="cta__wrapper bg--cover br-16"
          style={{
            backgroundImage: 'url(images/others/newsletter.png)',
          }}
        >
          <div className="cta__content">
            <div className="cta__content-inner text-center">
              <div className="subtitle">
                <img src="/images/icon/home2/2.png" alt="star icon" />
                <p className="mb-0">Subscribe for free</p>
              </div>
              <h2>Subscribe to our Newsletter</h2>
              <form className="form form-subscribe" action="">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control style1"
                    placeholder="Enter your email..."
                  />
                  <span className="input-group-btn">
                    <button
                      className="trk-btn cta-btn trk-btn--primary2"
                      type="submit"
                    >
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

export default Newslettertwo;

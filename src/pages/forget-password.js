import Footer from "../components/footers/Footer";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";
import Link from "next/link";
const forget_password = () => {
  return (
    <>
      <PageHeader
        title="Forget Password"
        subtitle="Forget Password"
        image='images/bg/home1/11.png'
      />
      <Header />
      <section className="account padding-top padding-bottom">
        <div className="container-fluid">
          <div
            className="account__wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="account__content">
                  <div className="account__header">
                    <h3>Forget Password</h3>
                    <p>No worries, we’ll send you reset instructions.</p>
                  </div>

                  <form action="" className="account__form">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="account-email"
                            placeholder="Enter  email"
                            required
                          />
                          <div className="valid-tooltip">
                            This email is valid
                          </div>
                          <div className="invalid-tooltip">
                            Please enter a valid email
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--secondary1 d-block mt-4"
                    >
                      Reset password
                    </button>
                  </form>
                  <div className="account__switch">
                    <p>
                      Don't have a account yet?{" "}
                      <Link href="/Signup">Create an Account</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default forget_password;

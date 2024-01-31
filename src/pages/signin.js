import $ from "jquery";
import { useEffect } from "react";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const Signin = () => {
  useEffect(() => {
    $(".account__wrapper").fadeIn();
  }, []);
  return (
    <>
      
      <Header />
      <PageHeader
        title="Sign in"
        subtitle="Sign in"
        image='images/bg/home1/10.png'
      />
      <section className="account padding-top padding-bottom">
        <div className="container-fluid">
          <div className="account__wrapper" data-aos="fade-up">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="account__content">
                  <div className="account__header">
                    <h3>Log in to your account</h3>
                    <p>Welcome back! Please enter your details.</p>
                  </div>

                  <form
                    action=""
                    className="account__form needs-validation"
                    noValidate
                  >
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="account-email"
                            placeholder="Enter your email"
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
                      <div className="col-lg-12">
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control showhide-pass"
                            id="account-pass"
                            placeholder="Password"
                            required
                          />

                          <button
                            type="button"
                            id="btnToggle"
                            className="toggle"
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                          <div className="valid-tooltip">Looks good!</div>
                          <div className="invalid-tooltip">
                            Enter a strong password
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="account__form-passcheck">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value=""
                          id="terms-check"
                        />
                        <label htmlFor="terms-check" className="form-check-label">
                          Remember for 30 days
                        </label>
                      </div>
                      <div className="account__form-forgotpass">
                        <Link href="/forget_password">Forgot Password?</Link>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--secondary1 d-block mt-4"
                    >
                      Sign in
                    </button>
                  </form>

                  {/* <div className="account__social">
                    <Link href="/" className="account__social-btn">
                      <span>
                        <img
                          src="/images/others/google.svg"
                          alt="google icon"
                        />
                      </span>
                      Sign in with google
                    </Link>
                  </div> */}

                  <div className="account__switch">
                    <p>
                      Dont have an account? <Link href="/signup">Sign up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Signin;

import $ from "jquery";
import { useEffect } from "react";
import PageHeader from "../components/modules/Home/PageHeader";
import Footer from "../components/footers/Footer";
import Header from "../components/headers/Header";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const signup = () => {
  useEffect(() => {
    $(".account__wrapper").fadeIn();
  }, []);
  return (
    <>
     
      <Header />
      <PageHeader
        title="Sign up"
        subtitle="Sign up"
        image='images/bg/home1/12.png'
      />
      <section className="account padding-top padding-bottom">
        <div className="container-fluid">
          <div className="account__wrapper" data-aos="fade-up">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="account__content">
                  <div className="account__header">
                    <h3>Create an account</h3>
                    <p>Start your 30-day free trail.</p>
                  </div>

                  <form action="" className="account__form">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="account-name"
                            placeholder="Enter name"
                            required
                          />
                          <div className="valid-tooltip">Looks good!</div>
                          <div className="invalid-tooltip">
                            Please enter a full name
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="account-email"
                            placeholder="Enter email"
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
                            type="number"
                            className="form-control"
                            id="account-mobile"
                            placeholder="Enter number"
                            required
                          />
                          <div className="valid-tooltip">
                            This mobile is valid
                          </div>
                          <div className="invalid-tooltip">
                            Please enter a valid number
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
                          Agree to our <Link href=""> terms & conditions</Link>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--secondary1 d-block mt-4"
                    >
                      Sign Up
                    </button>
                  </form>

                  {/* <div className="account__social">
                    <Link href="" className="account__social-btn">
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
                      Already have an account?{" "}
                      <Link href="/signin">Log in</Link>
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

export default signup;

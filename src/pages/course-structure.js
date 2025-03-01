import Link from "next/link";
import React from "react";
import HeaderBg from "../components/headers/HeaderBg";
import Newsletter from "../components/modules/Gallery/Newsletter";
import Footer from "../components/footers/Footer";
import PageHeader from "../components/modules/Home/PageHeader";
import Header from "../components/headers/Header";

const ProgramStructure = () => {
    const primaryColor = "#aa468e";

    return (
        <>
            <Header />
            <PageHeader
                title="Courses"
                subtitle="Courses"
                image='../../../images/bg/home1/2.png'
            />
            <div className="container py-5">
                <header className="text-center mb-5 ">
                    <h2 className="display-6 fw-bold mb-3" style={{ color: primaryColor }}>Learning Program Structure</h2>
                    <p className="lead">Structured learning paths tailored to different age groups and skill levels</p>
                </header>

                {/* Main Program Cards */}
                <div className="row g-4 mb-5">
                    <div className="col-lg-4">
                        <div className="card h-100 shadow border-0 rounded-3 overflow-hidden">
                            <div className="card-header p-4 text-white border-0" style={{ backgroundColor: primaryColor }}>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h3 className="m-0 fw-bold">Basic Program</h3>
                                    <span className="badge bg-white text-dark rounded-pill px-3 py-2">Ages 6-11</span>
                                </div>
                                <p>Block-based coding using drag-and-drop tools for foundational skills</p>
                            </div>
                            <div className="card-body">
                                <h5 className="fw-bold mb-3">Program Details</h5>
                                <ul className="list-group list-group-flush mb-4">
                                    <li className="list-group-item px-0 d-flex align-items-center border-0">
                                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: `${primaryColor}20`, width: "36px", height: "36px" }}>
                                            <i className="bi bi-layers-fill" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <strong>12 Levels </strong>
                                            <div className="text-muted small">2 years to complete</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 d-flex align-items-center border-0">
                                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: `${primaryColor}20`, width: "36px", height: "36px" }}>
                                            <i className="bi bi-calendar3" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <strong>8 weeks per level</strong>
                                            <div className="text-muted small">1 class per week</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 d-flex align-items-center border-0">
                                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: `${primaryColor}20`, width: "36px", height: "36px" }}>
                                            <i className="bi bi-clock" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <strong>1 hour per class</strong>
                                            <div className="text-muted small">Beginner-friendly pace</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer bg-light p-4 border-0">
                            <Link href="/courses">
                                <button className="btn btn-lg w-100 text-white" style={{ backgroundColor: primaryColor }}>
                                <small> Explore Basic Program</small>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card h-100 shadow border-0 rounded-3 overflow-hidden position-relative">
                            <div className="position-absolute bg-warning text-dark fw-bold px-4 py-1"
                                style={{
                                    right: "-40px",
                                    top: "20px",
                                    transform: "rotate(45deg)",
                                    width: "170px",
                                    zIndex: 1
                                }}>
                                Most Popular
                            </div>
                            <div className="card-header p-4 text-white border-0" style={{ backgroundColor: primaryColor }}>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h3 className="m-0 fw-bold text-white">Advanced Program</h3>
                                    <span className="badge bg-white text-dark rounded-pill px-3 py-2">Ages 12-16</span>
                                </div>
                                <p className="text-black">Text-based coding teaching programming languages and technical skills</p>
                            </div>
                            <div className="card-body">
                                <h5 className="fw-bold mb-3">Program Details</h5>
                                <ul className="list-group list-group-flush mb-4">
                                    <li className="list-group-item px-0 d-flex align-items-center border-0">
                                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: `${primaryColor}20`, width: "36px", height: "36px" }}>
                                            <i className="bi bi-layers-fill" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <strong>12 Levels</strong>
                                            <div className="text-muted small">2 years to complete</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 d-flex align-items-center border-0">
                                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: `${primaryColor}20`, width: "36px", height: "36px" }}>
                                            <i className="bi bi-calendar3" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <strong>8 weeks per level</strong>
                                            <div className="text-muted small">1 class per week</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 d-flex align-items-center border-0">
                                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: `${primaryColor}20`, width: "36px", height: "36px" }}>
                                            <i className="bi bi-code-slash" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <strong>Real programming languages</strong>
                                            <div className="text-muted small">Building technical skills</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer bg-light p-4 border-0">
                            <Link href="/courses">
                                <button className="btn btn-lg w-100 text-white" style={{ backgroundColor: primaryColor }}>
                                <small> Explore Advanced Program</small>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card h-100 shadow border-0 rounded-3 overflow-hidden">
                            <div className="card-header p-4 text-white border-0" style={{ backgroundColor: primaryColor }}>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h3 className="m-0 fw-bold">Special Program</h3>
                                    <span className="badge bg-white text-dark rounded-pill px-3 py-2">Ages 17+</span>
                                </div>
                                <p>Mature, text-based coding with advanced topics for older students</p>
                            </div>
                            <div className="card-body">
                                <h5 className="fw-bold mb-3">Program Details</h5>
                                <ul className="list-group list-group-flush mb-4">
                                    <li className="list-group-item px-0 d-flex align-items-center border-0">
                                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: `${primaryColor}20`, width: "36px", height: "36px" }}>
                                            <i className="bi bi-code-square" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <strong>Advanced topics</strong>
                                            <div className="text-muted small">For mature coders</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 d-flex align-items-center border-0">
                                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: `${primaryColor}20`, width: "36px", height: "36px" }}>
                                            <i className="bi bi-calendar3" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <strong>8-week cohorts</strong>
                                            <div className="text-muted small">Separate program structure</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 d-flex align-items-center border-0">
                                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: `${primaryColor}20`, width: "36px", height: "36px" }}>
                                            <i className="bi bi-clock-history" style={{ color: primaryColor }}></i>
                                        </div>
                                        <div>
                                            <strong>Flexible scheduling</strong>
                                            <div className="text-muted small">Weekly live sessions</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer bg-light p-4 border-0">
                            <Link href="/courses">
                                <button className="btn btn-lg w-100 text-white" style={{ backgroundColor: primaryColor }}>
                                <small> Explore Special Program</small>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Program Features */}
                <div className="row g-4 mb-5">
                    <div className="col-12">
                        <div className="card border-0 rounded-3 shadow-sm">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-md-6 p-4 border-end">
                                        <h4 className="fw-bold mb-4" style={{ color: primaryColor }}>
                                            <i className="bi bi-check-circle-fill me-2"></i>
                                            Level Completion
                                        </h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-3 d-flex">
                                                <div className="me-3 text-center" style={{ width: "24px" }}>
                                                    <i className="bi bi-arrow-right-circle-fill" style={{ color: primaryColor }}></i>
                                                </div>
                                                <div>
                                                    <strong>8 classes per level</strong>
                                                    <div className="text-muted">1 class per week, 1 hour per class</div>
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex">
                                                <div className="me-3 text-center" style={{ width: "24px" }}>
                                                    <i className="bi bi-arrow-right-circle-fill" style={{ color: primaryColor }}></i>
                                                </div>
                                                <div>
                                                    <strong>6 levels per year</strong>
                                                    <div className="text-muted">With continuous enrollment</div>
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex">
                                                <div className="me-3 text-center" style={{ width: "24px" }}>
                                                    <i className="bi bi-arrow-right-circle-fill" style={{ color: primaryColor }}></i>
                                                </div>
                                                <div>
                                                    <strong>2 years to completion</strong>
                                                    <div className="text-muted">For Basic and Advanced Programs</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 p-4">
                                        <h4 className="fw-bold mb-4" style={{ color: primaryColor }}>
                                            <i className="bi bi-calendar-check-fill me-2"></i>
                                            Flexible Scheduling
                                        </h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-3 d-flex">
                                                <div className="me-3 text-center" style={{ width: "24px" }}>
                                                    <i className="bi bi-arrow-right-circle-fill" style={{ color: primaryColor }}></i>
                                                </div>
                                                <div>
                                                    <strong>Choose your time slot</strong>
                                                    <div className="text-muted">1 hour per week, multiple options available</div>
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex">
                                                <div className="me-3 text-center" style={{ width: "24px" }}>
                                                    <i className="bi bi-arrow-right-circle-fill" style={{ color: primaryColor }}></i>
                                                </div>
                                                <div>
                                                    <strong>Designed for busy schedules</strong>
                                                    <div className="text-muted">Consistent weekly commitment</div>
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex">
                                                <div className="me-3 text-center" style={{ width: "24px" }}>
                                                    <i className="bi bi-arrow-right-circle-fill" style={{ color: primaryColor }}></i>
                                                </div>
                                                <div>
                                                    <strong>8-week cohort structure</strong>
                                                    <div className="text-muted">Weekly live virtual sessions</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center p-5 rounded-3 mb-4" style={{ backgroundColor: `${primaryColor}15` }}>
                    <h2 className="fw-bold mb-4" style={{ color: primaryColor }}>Ready to start your coding journey?</h2>
                    <p className="lead mb-4">All courses run in 8-week cohorts with weekly live virtual sessions!</p>
                    <Link href="/courses">
                        <button className="btn btn-lg px-5 py-3 text-white" style={{ backgroundColor: primaryColor }}>
                            <i className="bi bi-rocket-takeoff me-2"></i>
                            Explore Our Courses
                        </button>
                    </Link>
                </div>

                {/* Features Row */}
                <div className="row g-4 text-center">
                    <div className="col-md-4">
                        <div className="py-3">
                            <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle"
                                style={{ backgroundColor: `${primaryColor}20`, width: "70px", height: "70px" }}>
                                <i className="bi bi-people-fill fs-1" style={{ color: primaryColor }}></i>
                            </div>
                            <h5 className="fw-bold mb-2">Age-Appropriate Content</h5>
                            <p className="text-muted">Programs tailored to different age groups and learning levels</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="py-3">
                            <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle"
                                style={{ backgroundColor: `${primaryColor}20`, width: "70px", height: "70px" }}>
                                <i className="bi bi-laptop-fill fs-1" style={{ color: primaryColor }}></i>
                            </div>
                            <h5 className="fw-bold mb-2">Live Virtual Sessions</h5>
                            <p className="text-muted">Interactive online classes with expert instructors</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="py-3">
                            <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle"
                                style={{ backgroundColor: `${primaryColor}20`, width: "70px", height: "70px" }}>
                                <i className="bi bi-graph-up-arrow fs-1" style={{ color: primaryColor }}></i>
                            </div>
                            <h5 className="fw-bold mb-2">Progressive Learning</h5>
                            <p className="text-muted">Structured curriculum that builds skills systematically</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
                <div className="container">
                    <Newsletter title="Our mission is to transform learning into an exhilarating journey of discovery." />
                </div>
            </div>
            <Footer /></>
    );
};

export default ProgramStructure;
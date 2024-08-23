import Link from "next/link";

const Blog = () => {
    return (
        <section className="blog blog--style1 padding-top padding-bottom">
            <div className="container">
                <div className="blog__header">
                    <h2 className="style2-h2--max20">Latest News, Blog & Articles</h2>
                    <Link href="blogs" className="trk-btn trk-btn--rounded trk-btn--secondary1">View More</Link>
                </div>
                <div className="blog__wrapper">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="600">
                            <div className="blog__item">
                                <div className="blog__item-inner">
                                    <div className="blog__thumb">
                                        <img src="/images/blog/1.png" alt="blog Images" />
                                    </div>

                                    <div className="blog__content">
                                        <div className="blog__content-top">
                                            <span className="blog__meta-tag blog__meta-tag--cat3">Art & Design</span>
                                        </div>
                                        <h6> <Link href="blog-details">Why Product Thinking is the next big thing in UX
                                            Design</Link> </h6>

                                        <div className="blog__content-bottom blog__content-bottom--border">
                                            <Link href=""><span><i className="fa-solid fa-calendar-days"></i></span>
                                                30
                                                January 2024</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="800">
                            <div className="blog__item">
                                <div className="blog__item-inner">
                                    <div className="blog__thumb">
                                        <img src="/images/blog/2.png" alt="blog Images" />
                                    </div>

                                    <div className="blog__content">
                                        <div className="blog__content-top">
                                            <span className="blog__meta-tag blog__meta-tag--cat2">Business</span>
                                        </div>
                                        <h6> <Link href="blog-details">Range Input That Looks Consistent Across All
                                            Browser</Link> </h6>

                                        <div className="blog__content-bottom blog__content-bottom--border">
                                            <Link href=""><span><i className="fa-solid fa-calendar-days"></i></span>
                                                13
                                                March 2024</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="blog__item">
                                <div className="blog__item-inner">
                                    <div className="blog__thumb">
                                        <img src="/images/blog/3.png" alt="blog Images" />
                                    </div>

                                    <div className="blog__content">
                                        <div className="blog__content-top">
                                            <span className="blog__meta-tag blog__meta-tag--cat1">Development</span>
                                        </div>
                                        <h6> <Link href="blog-details">Generating RPG Tethered : Phase of
                                            Development</Link> </h6>

                                        <div className="blog__content-bottom blog__content-bottom--border">
                                            <Link href=""><span><i className="fa-solid fa-calendar-days"></i></span>
                                                21
                                                April 2024</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;

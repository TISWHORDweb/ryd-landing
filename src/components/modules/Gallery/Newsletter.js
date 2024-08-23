const Newsletter = () => {
    return (
        <div className="newsletter" data-aos="fade-up" data-aos-duration="800">
            <div className="container">
                <div className="newsletter__wrapper">
                    <div className="newsletter__content">
                        <div className="newsletter__content-inner newsletter__content-inner--style4 text-center"
                            style={{ backgroundImage: 'url(/images/footer/5.png)' }}>
                            <h2 className="style2-h2">Enter Your Email To Get The Latest News</h2>

                            <form className="form form-subscribe" action="">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter your email..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-success btn-lg" type="submit">Subscribe</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
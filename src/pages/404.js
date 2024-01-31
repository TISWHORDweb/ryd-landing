import Header from '../components/headers/Header'
import Preloader from '../components/headers/Preloader/Preloader'
import PageHeader from '../components/modules/Home/PageHeader'
import Footer from '../components/footers/Footer'
import Link from 'next/link';

const Error = () => {
    return (
        <>
            <Preloader />
            <Header />
            <PageHeader
                title="404 Page"
                subtitle="404 Page"
                image='images/bg/home1/8.png'/>
            <section className="error padding-top padding-bottom">
                <div className="container" data-aos="zoom-in" data-aos-duration="800">
                    <div className="section-header text-center ">
                        <h2>OOPS!</h2>
                        <p className="style2">Page not found</p>
                    </div>
                </div>
                <div className="error__inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="error__content text-center">
                        <img className=" mb-4" src={`/images/others/404.png`} alt="404 image" />
                        <div className="text-center mt-5">
                            <Link href="/" className="trk-btn trk-btn--rounded trk-btn--secondary1">Go To Home</Link>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Error
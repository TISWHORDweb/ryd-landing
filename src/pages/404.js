import Header from '../components/headers/Header'
import Preloader from '../components/headers/Preloader/Preloader'
import PageHeader from '../components/modules/Home/PageHeader'
import Footer from '../components/footers/Footer'
import Link from 'next/link';

const Error = () => {
    const error_area = {
        
    };
    const container = {};
    const error_content = {}


    return (
        <>
            <Preloader />
            {/* <Header /> */}
            
            {/* <PageHeader
                title="404 Page"
                subtitle="404 Page"
                image='images/bg/home1/8.png'/> 
            */}
                <section className="error-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="error__content">
                                    <h1 className="error-area__h1">
                                        <span className='error-area__h1-four'>4</span>
                                        <span className='error-area__h1-zero'>0</span>
                                        <span className='error-area__h1-four'>4</span>
                                    </h1>
                                    <h2 className="error-area__title">Page Not Found!</h2>
                                    <p className="style2">Oops! it could be you or us, there is no page here. It might have <br />been moved or deleted.</p>
                                    <div className="text-center mt-5">
                                        <Link href="/" className="trk-btn trk-btn--rounded trk-btn--secondary1">Go Back To Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* <Footer /> */}
        </>
    )
}

export default Error
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
const mentors = [
    {
        "avatar": "/images/team/home4/1.png",
        "name": "Jenny Wilson",
        "role": "UI Designer"
    },
    {
        "avatar": "/images/team/home4/2.png",
        "name": "Robert Fox",
        "role": "Product Designer"
    },
    {
        "avatar": "/images/team/home4/3.png",
        "name": "Devone Lane",
        "role": "Web Developer"
    },
    {
        "avatar": "/images/team/home4/4.png",
        "name": "Jerome Bell",
        "role": "Marketer"
    },
    {
        "avatar": "/images/team/home4/5.png",
        "name": "Marvin McKi",
        "role": "UI/UX Designer"
    },
    {
        "avatar": "/images/team/home4/6.png",
        "name": "Darrell Bell",
        "role": "Graphic Designer"
    }
]
const Teams = () => {
    const backgroundImage = {
        backgroundImage: "url('/images/bg/home4/2.png')",
        marginBottom: '100px'
    };
    return (
        <div>
            <section className='team team--style1 team--home4 padding-top padding-bottom bg--full' style={backgroundImage}>
                <div className='container'>
                    <div className="team__wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                <div className="team__header">
                                    <h2 className="style2-h2">Meet Our Experts</h2>
                                    <p className="style2">Our team comprises certified and experienced teachers, industry professionals, and tech enthusiasts dedicated to redefining online learning for children aged 7+ to 16.</p>
                                    <Link href="/mentors" className="trk-btn trk-btn--rounded trk-btn--secondary4">{"See More "}
                                        <span><span><FaArrowRight /></span></span></Link>
                                </div>
                            </div>
                            {mentors.map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-sm-6">
                                        <div className="team__item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                            <div className="team__item-inner">
                                                <div className="team__item-thumb team__item-thumb--style1">
                                                    <img src={item.avatar} alt="Team Image" />
                                                </div>
                                                <div className="team__item-content team__item-content--style1">
                                                    <div className="team__item-author">
                                                        <h6><Link href="/mentor-details">{item.name}</Link> </h6>
                                                        <p>{item.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}       </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Teams
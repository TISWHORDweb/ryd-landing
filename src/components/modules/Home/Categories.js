import Link from 'next/link';
const dataone = [
    {
        "icon": "https://thetork.com/demos/vue/educax/images/icon/home1/1.png",
        "title": "Data Science"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/icon/home1/2.png",
        "title": "English"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/icon/home1/3.png",
        "title": "Finance"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/icon/home1/4.png",
        "title": "Content Writing"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/icon/home1/5.png",
        "title": "Development"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/icon/home1/6.png",
        "title": "Art & Design"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/icon/home1/7.png",
        "title": "Management"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/icon/home1/8.png",
        "title": "Business"
    }
]
const Categories = () => {
   
    return (
        <div>
            <div className="categories categories--style1  padding-bottom brand1-bg-1">
                <div className="categories__wrapper container">
                    <div className="row g-4">
                        <div className="col-lg-4" data-aos="fade-right" data-aos-duration="800">
                            <div className="section-header pe-3">
                                <h2>Explore <br /> Our Categories</h2>
                                <p>Look into yourself, get something in return as your AchievementLook into yourself,
                                    get something Return as your achievement</p>
                                <Link href="/course-category" className="trk-btn trk-btn--rounded trk-btn--secondary1">Explore
                                    Categories</Link>
                            </div>
                        </div>

                        <div className="col-lg-8" >
                            <div className="row g-4" data-aos="fade-left">
                                {dataone.map((curElem, index) => {
                                    return (

                                        <div key={'c-cat_' + index} className="col-lg-3 col-md-3 col-sm-3 col-4">
                                            <div className="categories__item">
                                                <div className="categories__item-inner">
                                                    <div className={`categories__thumb categories__thumb--cat${index % 3 || 3}`}>
                                                        <img src={curElem.icon} alt="course icon" />
                                                    </div>


                                                    <div className="categories__item-content">
                                                        <Link href="/course-category" className="stretched-link active">{curElem.title}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default Categories;
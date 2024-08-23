import React from 'react'
const featureList=[
    {
        "image": "https://thetork.com/demos/vue/educax/images/about/home1/3.png",
        "title": "Discover From Anywhere",
        "subtitle": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below."
    },
    {
        "image": "https://thetork.com/demos/vue/educax/images/about/home1/4.png",
        "title": "Our Expert Creator",
        "subtitle": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below."
    },
    {
        "image": "https://thetork.com/demos/vue/educax/images/about/home1/5.png",
        "title": "24/7 Live Support",
        "subtitle": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below."
    }
]
const FeaturedSection = () => {
  return (
    <div>
        <div className="feature__wrapper">
        <div className="row g-4">
        {featureList.map((item, index)=>{
            return( 
        <div key={index} className="col-md-4 col-sm-6">
              <div className="feature__item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <div className="feature__item-inner">
                        <div className="feature__thumb">
                            <img src={item.image} alt="feature-image"/>
                        </div>
                        <div className="feature__content">
                            <h5>{ item.title }</h5>
                            <p className="mb-0">{ item.subtitle }</p>
                        </div>
                    </div>
                </div>

            </div>
            )})}
            </div>
            </div>
       



    </div>
  )
}

export default FeaturedSection
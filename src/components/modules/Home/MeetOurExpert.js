import Link from 'next/link';
const memeber = [
   {
      "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/1.png",
      "name": "Jenny Wilson",
      "role": "Ul Designer"
   },
   {
      "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/2.png",
      "name": "Robert Fox",
      "role": "Product Designer"
   },
   {
      "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/3.png",
      "name": "Devon Lane",
      "role": "Web Developer"
   },
   {
      "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/4.png",
      "name": "Devon Lane",
      "role": "Marketer"
   },
   {
      "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/5.png",
      "name": "Marvin McKi",
      "role": "UX Designer"
   },
   {
      "avatar": "https://thetork.com/demos/vue/educax/images/team/home1/6.png",
      "name": "Darrell Bell",
      "role": "Graphic Designer"
   }
]
const MeetOurExpert = () => {

   return (

      <section className={`team team--style1 padding-bottom `} data-aos="fade-up" data-aos-duration="800">
         <div className='container'>
            <div className="team__wrapper">
               <div className="row g-4">
                  <div className="col-md-6 col-sm-12">
                     <div className="team__header">
                        <h2>Meet Our Expert</h2>
                        <p className="style3">Our team comprises certified and experienced teachers, industry professionals, and tech enthusiasts dedicated to redefining online learning for children aged 7+ to 16. </p>
                        <Link href="/mentors" className="trk-btn trk-btn--rounded trk-btn--secondary1">
                           All Members
                        </Link>
                     </div>
                  </div>
                  {memeber.map((item, index) => {
                     return (
                        <div key={index} className="col-lg-3 col-sm-6">
                           <div className="team__item">
                              <div className="team__item-inner">
                                 <div className="team__item-thumb">
                                    <img src={item.avatar} alt='nothing' />
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
                  })}

               </div>
            </div>
         </div >
      </section>

   );
};

export default MeetOurExpert;
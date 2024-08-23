import { useState } from 'react';
import Link from 'next/link';
import FsLightbox from 'fslightbox-react';
const OurSuccessStory = () => {
   const [toggler, setToggler] = useState(false);

   return (
      <>
      <FsLightbox toggler={toggler} sources={["https://youtu.be/Hh1UCOizzMc","https://youtu.be/Hh1UCOizzMc","https://youtu.be/Hh1UCOizzMc"]} />
      <section className="story padding-top padding-bottom" data-aos="fade-up" data-os-offset="screenHeight/5" data-aos-duration="800">
         <div className='container'>
            <div className="section-header text-center">
               <h2>Our Success Story</h2>
               <p className="style2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat
                  duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="story__wrapper">
               <div className="story__thumb">
                  <div className="story__thumb-inner">
                     <img src="/images/story/1.png" alt="story-image"/>
                     <div className="story__thumb-playbtn">
                        
                        <Link href="" onClick={()=>setToggler(!toggler)}><img src="/images/story/2.png" alt="ply-btn"/></Link>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div >
      </section>
      </>
   );
};

export default OurSuccessStory;
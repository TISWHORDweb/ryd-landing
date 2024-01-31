import { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
const Story = () => {
    const [toggler, setToggler] = useState(false);
    return ( 
    <>
        <FsLightbox
        toggler={toggler}
        sources={[
          "https://youtu.be/Hh1UCOizzMc",
        ]}
      />
      <section className="story padding-top padding-bottom">
        <div className="container aos-init">
          <div className="section-header text-center">
            <h2 className="style2-h2 style2-h2--defult">Take a video Tour</h2>
            <p className="style2">
              Enroll your child today and become part of a community shaping the future through innovative, hands-on learning experiences.
            </p>
          </div>
          <div className="story__wrapper">
            <div className="story__thumb">
              <div className="story__thumb-inner">
                <img src="/images/story/3.png" alt="story-image" />
                <div className="story__thumb-playbtn">         
                    <Link href="" onClick={(e)=>{
                        setToggler(!toggler)
                        e.preventDefault()
                    }}>
                      <img src="/images/story/2.png" alt="ply-btn" />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;

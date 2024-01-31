import { faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'
import FsLightbox from 'fslightbox-react'
const images = [
  "/images/gallery/home4/1.png",
  "/images/gallery/home4/2.png",
  "/images/gallery/home4/3.png",
  "/images/gallery/home4/4.png",
  "/images/gallery/home4/5.png",
]
const Gallery = () => {
  const [toggler, setToggler] = useState(false)
  const [productIndex, setProductIndex] = useState(0)
  const handleLightbox = (index)=>{
    setToggler(!toggler)
    setProductIndex(index)
    
  }
  return (
    <>
    <FsLightbox toggler={toggler} sources={images} sourceIndex={productIndex} />
    <section className="gallery padding-bottom padding-top">
      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
        <div className="section-header text-center">
          <h2 className="style2-h2 style2-h2--defult">Our Gallery</h2>
        </div>
        <div className="gallery__wrapper">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="row g-4">
                <div className="col-md-12">
                  <div className="gallery__item">
                    <Link href=""
                    onClick={(e)=>{
                      handleLightbox(0)
                      
                      e.preventDefault()
                    }}
                    >
                      <img src="/images/gallery/home4/1.png" alt="gallery image" />
                    </Link>
                    <div className="gallery__item-view">
                      <div className="view-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="gallery__item">
                    <Link href="" 
                    onClick={(e)=>{
                      handleLightbox(1)
                      
                      e.preventDefault()
                    }}
                    >
                      <img src="/images/gallery/home4/2.png" alt="gallery image" />
                    </Link>
                    <div className="gallery__item-view">
                      <div className="view-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="gallery__item">
                <Link href="" 
                onClick={(e)=>{
                  handleLightbox(2)
                  
                  e.preventDefault()
                }}
                >
                  <img src="/images/gallery/home4/3.png" alt="gallery image" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="aos-init aos-animate" />
                </Link>
                <div className="gallery__item-view">
                  <div className="view-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
              <div className="row g-4">
                <div className="col-md-12">
                  <div className="gallery__item">
                    <Link href="" 
                    onClick={(e)=>{
                      handleLightbox(3)
                      
                      e.preventDefault()
                    }}
                    >
                      <img src="/images/gallery/home4/4.png" alt="gallery image" />
                    </Link>
                    <div className="gallery__item-view">
                      <div className="view-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="gallery__item">
                    <Link href="" 
                    onClick={(e)=>{
                      handleLightbox(4)
                      
                      e.preventDefault()
                    }}>
                      <img src="/images/gallery/home4/5.png" alt="gallery image" />
                    </Link>
                    <div className="gallery__item-view">
                      <div className="view-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="text-center">
            <Link href="/gallery" className="trk-btn trk-btn--rounded trk-btn--secondary4 mt-5">See All
              Gallery
              <span><span><FontAwesomeIcon icon={faArrowRight} /></span></span></Link>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Gallery
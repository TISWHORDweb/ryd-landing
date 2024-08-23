import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
const images = [
  "/images/gallery/home4/1.png",
  "/images/gallery/home4/2.png",
  "/images/gallery/home4/4.png",
  "/images/gallery/home4/5.png",
  "/images/gallery/home4/3.png",
  "/images/gallery/home4/3.png",
  "/images/gallery/home4/1.png",
  "/images/gallery/home4/2.png",
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
    <section className="gallery padding-bottom padding-top" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="style2-h2 style2-h2--defult">Our Gallery</h2>
            </div>
            <div className="gallery__wrapper">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="row g-4">
                            <div className="col-md-12">
                                <div className="gallery__item">
                                    <Link href=""  onClick={(e)=>{
                                      handleLightbox(0)
                                      
                                      e.preventDefault()
                                    }} >
                                        <img src="/images/gallery/home4/1.png" alt="gallery image"/>
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
                                    <Link href="" onClick={(e)=>{
                                    handleLightbox(1)
                                    
                                    e.preventDefault()}
                                    } >
                                        <img src="/images/gallery/home4/2.png" alt="gallery image"/>
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
                        <div className="row g-4">
                            <div className="col-md-12">
                                <div className="gallery__item">
                                    <Link href="" onClick={(e)=>{
                                      handleLightbox(2)
                                      e.preventDefault()
                                    }} >
                                        <img src="/images/gallery/home4/4.png" alt="gallery image"/>
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
                                <Link href="" onClick={(e)=>{
                                    handleLightbox(3)
                                  
                                  e.preventDefault()
                                }} >
                                        <img src="/images/gallery/home4/5.png" alt="gallery image"/>
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
                        <Link href="" onClick={(e)=>{
                          handleLightbox(4)
                          
                          e.preventDefault()
                        }} >
                                <img src="/images/gallery/home4/3.png" alt="gallery image" data-aos="fade-up"
                                    data-aos-duration="800" data-aos-delay="100"/>
                            </Link>
                            <div className="gallery__item-view">
                                <div className="view-icon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gallery__item">
                        <Link href="" onClick={(e)=>{
                          handleLightbox(5)
                          
                          e.preventDefault()
                        }} >
                                <img src="/images/gallery/home4/3.png" alt="gallery image" data-aos="fade-up"
                                    data-aos-duration="800" data-aos-delay="100"/>
                            </Link>
                            <div className="gallery__item-view">
                                <div className="view-icon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row g-4">
                            <div className="col-md-12">
                                <div className="gallery__item">
                                <Link href="" onClick={(e)=>{
                                  handleLightbox(6)
                                  
                                  e.preventDefault()
                                }} >
                                        <img src="/images/gallery/home4/1.png" alt="gallery image"/>
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
                                <Link href="" onClick={(e)=>{
                                 handleLightbox(7)
                                  
                                  e.preventDefault()
                                }} >
                                        <img src="/images/gallery/home4/2.png" alt="gallery image"/>
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
                        <div className="row g-4">
                            <div className="col-md-12">
                                <div className="gallery__item">
                                <Link href="" onClick={(e)=>{
                                  handleLightbox(8)
                                  e.preventDefault()
                                }} >
                                        <img src="/images/gallery/home4/4.png" alt="gallery image"/>
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
                                <Link href="" onClick={(e)=>{
                                  handleLightbox(9)
                                  
                                  e.preventDefault()
                                }} >
                                        <img src="/images/gallery/home4/5.png" alt="gallery image"/>
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
            </div>
        </div>
    </section>
    </>
  );
};

export default Gallery;

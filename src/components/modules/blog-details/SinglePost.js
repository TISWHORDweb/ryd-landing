import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faEye, faComment, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
const SinglePost = () => {
  return (
    <div>
      <div className="section__wrapper">
        <div className="row g-5">
          <div className="col-lg-8 col-12">
            <div className="row g-4 justify-content-center">
              <div className="col-12">
                <div className="blog__item">
                  <div className="blog__inner">
                    <div className="blog__thumb">
                      <img src="/images/blog/home3/details/1.png" alt="blog-images" />
                    </div>
                    <div className="blog__content">
                      <div className="blog__meta">
                        <ul>
                          <li><FontAwesomeIcon icon={faUser} />
                            Esther Howard</li>
                          <li><FontAwesomeIcon icon={faClock} />
                            November 21, 2024</li>
                          <li><FontAwesomeIcon icon={faEye} />
                            120 Views</li>
                          <li>
                            <Link href=""><FontAwesomeIcon icon={faComment} />
                              Comments (03)</Link>
                          </li>
                        </ul>
                      </div>
                      <h2>Discover New Learning Tools of Education</h2>
                      <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic
                        fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3
                        wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth
                        art party deep v chillwave. Seitan High Life reprehenderit consectetur
                        cupidatat kogi. Et leggings fanny pack.</p>
                      <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch
                        freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit
                        kale chips proident chillwave deep v laborum. Aliquip veniam delectus,
                        Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone
                        Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan.
                        Help your team feel more connected to your company by incorporating the
                        right digital technology tools into their workflow.Andrea Meyer</p>
                      <p>See-through delicate embroidered organza blue lining luxury acetate-mix
                        stretch pleat detailing. Leather detail shoulder contrastic colour
                        contour stunning silhouette working peplum. Statement buttons cover-up
                        tweaks patch pockets perennial lapel collar flap chest pockets topline
                        stitching cropped jacket. Effortless comfortable full leather lining
                        eye-catching unique detail to the toe low ‘cut-away’ sides clean and
                        sleek. Polished finish elegant court shoe work duty stretchy slingback
                        strap mid kitten heel this ladylike design slingback strap mid kitten
                        heel this ladylike design.</p>
                    </div>
                  </div>
                </div>
                <div className="blog__tag">
                  <ul className="social-link-list">
                    <li><Link href="" className="facebook"><FaFacebookF />Share</Link>
                    </li>
                    <li><Link href="" className="twitter"><FaTwitter />Tweet</Link>
                    </li>
                    <li><Link href="" className="linkedin"><FaLinkedin />LinkedIn</Link>
                    </li>
                  </ul>
                  <ul className="tags">
                    <li><Link href="">Advices</Link></li>
                    <li><Link href="">business</Link></li>
                    <li><Link href="">strategy</Link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-8  col-12">
            <div className="sidebar">
              <div className="row g-4">
                <div className="col-12">
                  <div className="sidebar__search">
                    <div className="body">
                      <form className="" action="#">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search" />
                          <button type="submit" className="search-btn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sidebar__recentpost">
                    <div className="head">
                      <h6>Recent Post</h6>
                    </div>
                    <div className="body">
                      <ul>
                        <li>
                          <div className="thumb">
                            <Link href="/blog-details"><img src="/images/blog/home3/details/2.png"
                              alt="recentpost-image" /></Link>
                          </div>
                          <div className="content">
                            <p><Link href="/blog-details">How to create natural backlinks
                              that produce results</Link></p>
                          </div>
                        </li>
                        <li>
                          <div className="thumb">
                            <Link href="/blog-details"><img src="/images/blog/home3/details/3.png"
                              alt="recentpost-image" /></Link>
                          </div>
                          <div className="content">
                            <p><Link href="/blog-details">How to create natural backlinks
                              that produce results</Link></p>
                          </div>
                        </li>
                        <li>
                          <div className="thumb">
                            <Link href="/blog-details"><img src="/images/blog/home3/details/4.png"
                              alt="recentpost-image" /></Link>
                          </div>
                          <div className="content">
                            <p><Link href="/blog-details">How to create natural backlinks
                              that produce results</Link></p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sidebar__categorie">
                    <div className="head">
                      <h6>Categories</h6>
                    </div>
                    <div className="body">
                      <div className="content">
                        <ul>
                          <li>
                            <Link href="">
                              Advices</Link>
                          </li>
                          <li>
                            <Link href="">
                              Business</Link>
                          </li>
                          <li>
                            <Link href="">
                              Consulting</Link>
                          </li>
                          <li>
                            <Link href="">
                              Marketing</Link>
                          </li>
                          <li>
                            <Link href="">
                              Personal</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sidebar__tags">
                    <div className="head">
                      <h6>Tags</h6>
                    </div>
                    <div className="body">
                      <div className="content">
                        <ul>
                          <li><Link href="" className="active">Web Design</Link></li>
                          <li><Link href="">Education</Link></li>
                          <li><Link href="">Marketing</Link></li>
                          <li><Link href="">Seo</Link></li>
                          <li><Link href="">Graphic Design</Link></li>
                          <li><Link href="">Management</Link></li>
                          <li><Link href="">Learning</Link></li>
                          <li><Link href="">Development</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SinglePost
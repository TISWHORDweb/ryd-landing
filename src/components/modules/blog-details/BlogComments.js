import Link from 'next/link'
import { FaReply } from 'react-icons/fa'
const BlogComments = () => {
    return (
        <div>
            <div className="section__wrapper">
                <div className="row g-5">
                    <div className="col-lg-8 col-12">
                        <div className="row g-4 justify-content-center">
                            <div className="sidebar">
                                <div className="row g-5">
                                    <div className="col-12">
                                        <div className="sidebar__comment">
                                            <div className="head">
                                                <h3 className="comment">2 Comment</h3>
                                            </div>
                                            <div className="body">
                                                <ul>
                                                    <li className="sidebar__comment-item">
                                                        <div className="comment">
                                                            <div className="thumb">
                                                                <img src="/images/blog/home3/details/5.png" alt="comment-author" />
                                                            </div>
                                                            <div className="content">
                                                                <div className="content__top">
                                                                    <div className="name">
                                                                        <h6>Rassel Hossain</h6>
                                                                        <span>24 Marrch 2024 , at 02:00 pm</span>
                                                                    </div>
                                                                    <div className="reply reply--web">
                                                                        <Link href="" className=""> <FaReply />
                                                                            {" reply"}</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="content__bottom">
                                                                    <p>believe that everyone should have the chance to
                                                                        advance technology and get new skills. For the
                                                                        first time, Sydney's price of luxury homes
                                                                        dropped. Our sports writers and arts critics
                                                                        from around the world.</p>

                                                                    <div className="reply reply--mobile">
                                                                        <Link href="" className=""> <FaReply />
                                                                            {" reply"}</Link>
                                                                    </div>
                                                                </div>

                                                                <ul>
                                                                    <li>
                                                                        <div className="comment comment--reply">
                                                                            <div className="thumb">
                                                                                <img src="/images/blog/home3/details/6.png"
                                                                                    alt="comment-author" />
                                                                            </div>
                                                                            <div className="content">
                                                                                <div className="content__top">
                                                                                    <div className="name">
                                                                                        <p>Jacob Jones</p>
                                                                                        <span>26 April 2024 , at 02:00
                                                                                            pm</span>
                                                                                    </div>
                                                                                    <div className="reply reply--web">
                                                                                        <Link href=""><FaReply />
                                                                                            {" reply"}</Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="content__bottom">
                                                                                    <p className="reply">believe that
                                                                                        everyone should have
                                                                                        the chance to advance technology
                                                                                        and get new skills. For the
                                                                                        first time, Sydney's price of
                                                                                        luxury homes dropped. Our sports
                                                                                        writers and arts critics from
                                                                                        around the world.</p>
                                                                                    <div className="reply reply--mobile">
                                                                                        <Link href="" className=""> <i
                                                                                            className="fa-solid fa-reply"></i>
                                                                                            {" reply"}</Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </li>
                                                    <li className="sidebar__comment-item">
                                                        <div className="comment">
                                                            <div className="thumb">
                                                                <img src="/images/blog/home3/details/7.png" alt="comment-author" />
                                                            </div>
                                                            <div className="content">
                                                                <div className="content__top">
                                                                    <div className="name">
                                                                        <h6>Johanna Erika</h6>
                                                                        <span>26 Marrch 2024 , at 02:00 pm</span>
                                                                    </div>
                                                                    <div className="reply reply--web">
                                                                        <Link href=""> <FaReply />
                                                                            reply</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="content__bottom">
                                                                    <p>Sedut perspicati und omnis istesre natu error
                                                                        sitilei voluptatem accusantium doloremque
                                                                        laudantium totam rem aperiam eaque</p>

                                                                    <div className="reply reply--mobile">
                                                                        <Link href="" className=""> <FaReply />
                                                                            reply</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="sidebar__commentForm" id="post">
                                            <div className="head">
                                                <h3>Post a Comment</h3>
                                            </div>
                                            <div className="body">

                                                <form action="/">
                                                    <div className="row g-4">
                                                        <div className="col-lg-6">
                                                            <div className="input-group">
                                                                <input className="form-control" type="text" placeholder="Full Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="input-group">
                                                                <input className="form-control" type="text" placeholder="Subject" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-group">
                                                                <input className="form-control" type="email" placeholder="Email here" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-group">
                                                                <textarea cols="30" rows="5" className="form-control"
                                                                    placeholder="Enter Your Message"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit"
                                                        className="trk-btn trk-btn--rounded trk-btn--secondary1 mt-5">Post
                                                        Now</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogComments
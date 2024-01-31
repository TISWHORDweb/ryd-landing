import Link from "next/link";
import BlogCard from "../../partials/BlogCard";
import { FaArrowRight } from "react-icons/fa";
const posts = [
  {
    thumbnail: "/images/blog/home4/1.png",
    title: "Range Input That Looks Consistent Across All  Browser",
    tagClass: 4,
    category: "Art & Design",
    date: " September 25, 2024",
  },
  {
    thumbnail: "/images/blog/home4/2.png",
    title: "Generating RPG Tethered Assets: Phase of Development",
    tagClass: 3,
    category: "Activities",
    date: " September 25, 2024",
  },
  {
    thumbnail: "/images/blog/home4/3.png",
    title: "Generating RPG Tethered Assets: Phase of Development",
    tagClass: 1,
    category: "Activities",
    date: " September 25, 2024",
  },
];
const Blogs = () => {
  const backgroundImage = {
    backgroundImage: 'url(/images/bg/home4/3.png)',
  };
  return (
    <section
      className="blog blog--style1 padding-top padding-bottom bg--defult"
      style={{
        backgroundImage: 'url(/images/bg/home4/3.png)',
      }}
    >
      <div className="container">
        <div className="blog__header">
          <h2 className="style2-h2 style2-h2--defult style2-h2--max20">
            Latest News, Blogs & Articles
          </h2>
          <Link
            href="/blogs"
            className="trk-btn trk-btn--rounded trk-btn--secondary4"
          >
            {"More Blog "}
            <span>
              <span>
                <FaArrowRight />
              </span>
            </span>
          </Link>
        </div>
        <div className="blog__wrapper">
          <div className="row g-4">
            {posts.map((item, index) => {
              return (
                <div
                  v-for="(item, index) in posts.slice(0, 3)"
                  key={index}
                  className="col-lg-4 col-md-6"
                >
                  <BlogCard details={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Blogs;

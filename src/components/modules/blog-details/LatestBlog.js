import BlogCard from "../../partials/BlogCard";
const LatestBlog = ({ data }) => {
  return (
    <div className="container">
      <div className="section-header">
        <h2>Latest Article</h2>
      </div>

      <div className="blog__wrapper">
        <div className="row g-4">
          {data.slice(0,3).map((item, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="600"
              key={index}
            >
              <BlogCard details={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;

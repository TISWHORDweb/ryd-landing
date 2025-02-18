// Blog.jsx
import React, { useEffect, useState } from 'react';
import Newsletter from "../../components/modules/newsletter/Newsletter";
import Footer from "../../components/footers/Footer";
import PageHeader from "../../components/modules/Home/PageHeader";
import Header from "../../components/headers/Header";
import { User, Clock, Search, ChevronDown, ThumbsUpIcon, Eye } from 'lucide-react';
import axios from 'axios';
import { baseUrl } from '../../Network';
import { Thumbs } from 'swiper/modules';
import { useRouter } from 'next/router';
import DOMPurify from 'dompurify';


const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [blogs, setBlogs] = useState([])
  const [featured, setFeatured] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetchBlogs()
  }, [])

  const categories = [
    'All',
    'News',
    'Technology',
    'Education',
    'Python',
    'Web Development',
    'Kids & Learning',
  ];


  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${baseUrl}/common/blogs/all`);
      setBlogs(response.data.data.blogs);
      setFeatured(response.data.data.featured);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Filter posts based on search and category
  const filteredPosts = blogs?.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const router = useRouter();
  const handleReadMore = async (blogId) => {
    try {
      // Update the blog views
      await axios.put(`${baseUrl}/common/blog/views/${blogId}`);

      // Redirect to the blog details page
      router.push(`/blog/${blogId}`);
    } catch (error) {
      console.error("Error updating views:", error);
    }
  };

  const truncateContent = (content, maxLength) => {
    const cleanContent = DOMPurify.sanitize(content);
    if (cleanContent.length <= maxLength) return cleanContent;
    return cleanContent.substring(0, maxLength) + '...';
  };


  return (
    <div className="blog-page">
      <Header />
      <PageHeader
        title="Blog"
        subtitle="Blog"
        image='../../../images/bg/home1/2.png'
      />

      <main className="blog-main">
        <div className="container">
          {/* Search and Filter Section */}
          <div className="search-filter">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="category-filter">
              <button
                className="category-dropdown"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={20} />
              </button>

              {isDropdownOpen && (
                <div className="category-dropdown__menu">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`category-dropdown__item ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Featured Post */}
          {featured?.length > 0 ? (
            <div className="featured-post">
              {featured?.map((blog, index) => (
                <div className="featured-post__card">
                  <div className="featured-post__image">
                    <img src={blog.featuredImage} alt="Featured blog post" />
                  </div>
                  <div className="featured-post__content">
                    <span className="category-tag">Featured</span>
                    <h2>{blog.title}</h2>
                    <div
                    dangerouslySetInnerHTML={{
                      __html: truncateContent(blog.content, 300),
                    }}
                  />
                    <div className="author-info">
                      <div className="author-info__detail">
                        <User size={16} />
                        <span>Ryd Learning</span>
                      </div>
                      <div className="author-info__detail">
                        <Clock size={16} />
                        <span>{blog.readTime} min read</span>
                      </div>
                      <div className="author-info__detail">
                        <ThumbsUpIcon size={16} />
                        <span>{blog.likes}</span>
                      </div>
                      <div className="author-info__detail">
                        <Eye size={16} />
                        <span>{blog.views} views</span>
                      </div>
                    </div>
                    <button
                      className="trk-btn trk-btn--rounded trk-btn--secondary1 mt-4"
                      onClick={() => handleReadMore(blog.id)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : <></>}

          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredPosts?.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-card__image">
                  <img src={post.featuredImage} alt={post.title} />
                </div>
                <div className="blog-card__content">
                  <span className="category-tag">{post.category}</span>
                  <h3>{post.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: truncateContent(post.content, 300),
                    }}
                  />
                  <div className="author-info">
                    <div className="author-info__detail">
                      <User size={16} />
                      <span>Ryd Learning</span>
                    </div>
                    <div className="author-info__detail">
                      <Clock size={16} />
                      <span>{post.readTime + " min read"}</span>
                    </div>
                    <div className="author-info__detail">
                      <ThumbsUpIcon size={16} />
                      <span>{post.likes}</span>
                    </div>
                    <div className="author-info__detail">
                      <Eye size={16} />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <button
                    className="trk-btn trk-btn--rounded trk-btn--secondary1 mt-4"
                    onClick={() => handleReadMore(post.id)}
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Show message if no posts found */}
          {filteredPosts?.length === 0 && (
            <div className="no-results">
              <p>No posts found matching your criteria.</p>
            </div>
          )}

        </div>
      </main>

      <Newsletter title="Join us on a transformative journey where knowledge knows no bounds." />
      <Footer />
    </div>
  );
};

export default Blog;
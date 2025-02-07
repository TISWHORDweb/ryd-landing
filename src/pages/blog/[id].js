import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { baseUrl } from '../../Network';
import { ThumbsUpIcon, Eye, Calendar, Clock, Share2, ArrowLeft } from 'lucide-react';
import Footer from '@/src/components/footers/Footer';
import Newsletter from '@/src/components/modules/Gallery/Newsletter';
import HeaderBg from '@/src/components/headers/HeaderBg';

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);
  const [liked, setLiked] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  useEffect(() => {
    if (id) {
      fetchBlogDetails();
    }
  }, [id]);

  const fetchBlogDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}/common/blog/${id}`);
      setBlog(response.data.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  const handleLike = async () => {
    if (liked) return;
    try {
      await axios.put(`${baseUrl}/common/blog/like/${id}`);
      setLiked(true);
      setBlog((prevBlog) => ({
        ...prevBlog,
        likes: prevBlog.likes + 1,
      }));
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };

  const handleShare = async () => {
    const currentUrl = window.location.href;
    
    try {
      if (navigator.share) {
        // Use Web Share API if available
        await navigator.share({
          title: blog.title,
          text: 'Check out this blog post!',
          url: currentUrl,
        });
      } else {
        // Fallback to clipboard copy
        await navigator.clipboard.writeText(currentUrl);
        setShareMessage('Link copied to clipboard!');
        setTimeout(() => setShareMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
      setShareMessage('Failed to share');
      setTimeout(() => setShareMessage(''), 3000);
    }
  };

  const handleBack = () => {
    router.push('/blog/all');
  };

  if (!blog) {
    return (
      <div className="blog_details_page__loading">
        <div className="blog_details_page__loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="blog_details_page">
      <HeaderBg />
      
      <main className="blog_details_page__main">
        <button onClick={handleBack} className="blog_details_page__back-button">
          <ArrowLeft size={20} />
          <span>Back to Blogs</span>
        </button>

        <article className="blog_details_page__article">
          <div className="blog_details_page__hero">
            <img 
              src={blog.featuredImage} 
              alt={blog.title}
              className="blog_details_page__hero-image"
            />
          </div>

          <div className="blog_details_page__content">
            <div className="blog_details_page__meta">
              <div className="blog_details_page__meta-item">
                <Calendar size={16} />
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="blog_details_page__meta-item">
                <Clock size={16} />
                <span>5 min read</span>
              </div>
              <div className="blog_details_page__meta-item">
                <Eye size={16} />
                <span>{blog.views} views</span>
              </div>
            </div>

            <h1 className="blog_details_page__title">{blog.title}</h1>

            <div className="blog_details_page__text" dangerouslySetInnerHTML={{ __html: blog.content }} />

            <div className="blog_details_page__actions">
              <div className="blog_details_page__buttons">
                <button
                  onClick={handleLike}
                  disabled={liked}
                  className={`blog_details_page__button ${liked ? 'blog_details_page__button--liked' : ''}`}
                >
                  <ThumbsUpIcon size={18} />
                  <span>{blog.likes} Likes</span>
                </button>
                
                <div className="blog_details_page__share-container">
                  <button 
                    onClick={handleShare} 
                    className="blog_details_page__button"
                  >
                    <Share2 size={18} />
                    <span>Share</span>
                  </button>
                  {shareMessage && (
                    <div className="blog_details_page__share-message">
                      {shareMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <div className="blog_details_page__newsletter">
        <Newsletter title="Join us on a transformative journey where knowledge knows no bounds." />
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogDetails;
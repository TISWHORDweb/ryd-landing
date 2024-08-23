import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
export default function BlogCard(props) {
  const { details } = props;

  return (
    <>
      <div className="blog__item">
        <div className="blog__item-inner">
          <div className="blog__thumb">
            <img src={details.thumbnail} alt="blog Images" />
          </div>

          <div className="blog__content">
            <div className="blog__content-top">
              <span className={details.tagClass?`blog__meta-tag blog__meta-tag--cat${details.tagClass}`: `blog__meta-tag`}>
                {details.category}
              </span>
            </div>
            <h6>
              <Link href="/blog-details">
                {details.title}
              </Link>
            </h6>

            <div className="blog__content-bottom blog__content-bottom--border">
              <span>
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              {details.date}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

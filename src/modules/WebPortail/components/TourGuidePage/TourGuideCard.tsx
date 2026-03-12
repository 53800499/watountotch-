/** @format */

import type { TourGuideCardInterface } from "../../interfaces/TourGuideCardInterface";

export const TourGuideCard: React.FC<TourGuideCardInterface> = ({
  image,
  alt,
  category,
  prix,
  title,
  link,
  author,
  stats
}) => {
  return (
    <div className="blog-news-card" data-aos="fade-up">
      <div className="blog-image">
        <img src={image} alt={alt} />
        {category && <div className="blog-category">{category}</div>}
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{prix}</span>
        </div>

        <h3 className="blog-title">
          <a href={link}>{title}</a>
        </h3>

        <div className="blog-footer">
          <div className="blog-author">
            <span className="author-name">{author.name}</span>
          </div>

          <div className="blog-engagement">
            <div className="engagement-item">
              <svg viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <span>{stats.likes}</span>
            </div>
            <div className="engagement-item">
              <svg viewBox="0 0 24 24">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span>{stats.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

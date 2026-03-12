/** @format */

import { WORDS } from "../../../../common/constants/wording";
import { eventsMockData } from "../../../../common/mocks/events";
import type { BlogCard } from "../../interfaces/eventInterface";

export const EventContainer = () => {
  const renderBlogCard = (card: BlogCard) => (
    <div key={card.id} className="blog-news-card" data-aos="fade-up">
      <div className="blog-image">
        <img src={card.image} alt={card.title} />
        <div className="blog-category">{card.category}</div>
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{card.date}</span>
          <span className="blog-read-time">{card.readTime} read</span>
        </div>

        <h3 className="blog-title">
          <a href={card.link}>{card.title}</a>
        </h3>

        <p className="blog-excerpt">{card.excerpt}</p>

        <div className="blog-footer">
          <div className="blog-author">
            <div className="author-avatar">
              <img src={card.author.avatar} alt={card.author.name} />
            </div>
            <span className="author-name">{card.author.name}</span>
          </div>

          <div className="blog-engagement">
            <div className="engagement-item">
              <svg viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <span>{card.stats.likes}</span>
            </div>
            <div className="engagement-item">
              <svg viewBox="0 0 24 24">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span>{card.stats.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="include-aside">
      <div className="content-news">
        <div className="box-news two-column pt-5" data-crop-images="">
          {eventsMockData.map(renderBlogCard)}
        </div>

        <div className="text-center pt-5" data-aos="fade-down">
          <a href="javascript:void(0)" className="btn btn-more">
            {WORDS.event_page.list.load_more_button}
          </a>
        </div>
      </div>

      <aside className="blog-aside mt-5" data-aos="fade-left">
        {/* <!-- Search Widget --> */}
        <div className="aside-widget search-widget">
          <h3 className="widget-title">
            {WORDS.event_page.sidebar.search.title}
          </h3>
          <form
            className="search-form"
            action="javascript:void(0)"
            method="get">
            <input
              type="text"
              className="search-input"
              placeholder={WORDS.event_page.sidebar.search.placeholder}
              name="q"
            />
            <button type="submit" className="search-btn">
              <svg viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* <!-- Categories Widget --> */}
        <div className="aside-widget categories-widget">
          <h3 className="widget-title">
            {WORDS.event_page.sidebar.categories.title}
          </h3>
          <ul className="categories-list">
            {WORDS.event_page.sidebar.categories.items.map((category) => (
              <li key={category.name}>
                <a href={category.href} className="category-item">
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">{category.count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- Recent Posts Widget --> */}
        <div className="aside-widget recent-posts-widget">
          <h3 className="widget-title">Recent Posts</h3>
          <div className="recent-posts-list">
            <article className="recent-post-item">
              <a href="/evenement/tabar" className="recent-post-link">
                <div className="recent-post-image">
                  <img
                    src="/src/assets/images/blog/post-01.jpg"
                    alt="10 Hidden Travel Destinations"
                  />
                </div>
                <div className="recent-post-content">
                  <h4 className="recent-post-title">
                    10 Hidden Travel Destinations You Must Visit in 2025
                  </h4>
                  <span className="recent-post-date">September 20, 2025</span>
                </div>
              </a>
            </article>

            <article className="recent-post-item">
              <a href="/evenement/tabar" className="recent-post-link">
                <div className="recent-post-image">
                  <img
                    src="/src/assets/images/blog/post-02.jpg"
                    alt="How to Travel Europe on $50 a Day"
                  />
                </div>
                <div className="recent-post-content">
                  <h4 className="recent-post-title">
                    How to Travel Europe on $50 a Day: A Complete Guide
                  </h4>
                  <span className="recent-post-date">September 19, 2025</span>
                </div>
              </a>
            </article>

            <article className="recent-post-item">
              <a href="/evenement/tabar" className="recent-post-link">
                <div className="recent-post-image">
                  <img
                    src="/src/assets/images/blog/post-03.jpg"
                    alt="Sustainable Travel"
                  />
                </div>
                <div className="recent-post-content">
                  <h4 className="recent-post-title">
                    Sustainable Travel: How to Reduce Your Carbon Footprint
                  </h4>
                  <span className="recent-post-date">September 18, 2025</span>
                </div>
              </a>
            </article>
          </div>
        </div>

        {/* <!-- Tags Widget --> */}
        <div className="aside-widget tags-widget">
          <h3 className="widget-title">
            {WORDS.event_page.sidebar.tags.title}
          </h3>
          <div className="tags-cloud">
            {WORDS.event_page.sidebar.tags.items.map((tag) => (
              <a key={tag} href="javascript:void(0)" className="tag-item">
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* <!-- Newsletter Widget --> */}
        <div className="aside-widget newsletter-widget">
          <h3 className="widget-title">
            {WORDS.event_page.sidebar.newsletter.title}
          </h3>
          <p className="widget-description">
            {WORDS.event_page.sidebar.newsletter.description}
          </p>
          <form className="newsletter-form" action="/subscribe" method="post">
            <input
              type="email"
              className="newsletter-input"
              placeholder={WORDS.event_page.sidebar.newsletter.placeholder}
            />
            <button type="submit" className="newsletter-btn">
              {WORDS.event_page.sidebar.newsletter.submit}
            </button>
          </form>
        </div>

        {/* <!-- Social Follow Widget --> */}
        <div className="aside-widget social-widget">
          <h3 className="widget-title">
            {WORDS.event_page.sidebar.social.title}
          </h3>
          <div className="social-links">
            <a href="javascript:void(0)" className="social-link facebook">
              <svg>
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
            <a href="javascript:void(0)" className="social-link instagram">
              <svg>
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
            <a href="javascript:void(0)" className="social-link twitter">
              <svg>
                <use xlinkHref="#twitter-x"></use>
              </svg>
            </a>
            <a href="javascript:void(0)" className="social-link youtube">
              <svg>
                <use xlinkHref="#youtube"></use>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

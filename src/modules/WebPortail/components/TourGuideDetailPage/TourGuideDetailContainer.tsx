/** @format */

import { Fragment } from "react";
import { WORDS } from "../../../../common/constants/wording";
import {
  EVENT_DETAIL_AUTHOR_AVATAR_AMANDA,
  EVENT_DETAIL_COMMENT_AVATAR_AMANDA_REPLY,
  EVENT_DETAIL_COMMENT_AVATAR_MARK,
  EVENT_DETAIL_CURRENT_USER_AVATAR,
  EVENT_DETAIL_HERO_MAIN_IMAGE
} from "../../../../assets/images";
import { BookingForm } from "./BookingForm";
import { TourDetailContent } from "./TourDetailContent";

export const TourGuideDetailContainer = () => {
  const { hero, content, reactions, comments } = WORDS.tour_guide_detail_page;
  const commentAvatarByAuthor: Record<string, string> = {
    "Mark Stevens": EVENT_DETAIL_COMMENT_AVATAR_MARK,
    "Amanda Wilson": EVENT_DETAIL_COMMENT_AVATAR_AMANDA_REPLY
  };

  return (
    <Fragment>
      {/* Hero Section */}
      <div className="blog-featured-image">
        <img
          className="image"
          src={EVENT_DETAIL_HERO_MAIN_IMAGE}
          alt={hero.image_alt}
        />

        <div className="blog-header">
          <h1 className="blog-title" data-aos="fade-down">
            {hero.title}
          </h1>

          <div className="blog-author-info" data-aos="fade-up">
            <div className="author-avatar">
              <img
                src={EVENT_DETAIL_AUTHOR_AVATAR_AMANDA}
                alt="Amanda Wilson"
              />
            </div>
            <div className="author-details">
              <span className="author-name">{hero.author.name}</span>
              <span className="author-bio">{hero.author.bio}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section with Booking Sidebar */}
      <div className="main pb-5">
        <div className="tour-detail-wrapper container">
          {/* Left Column - Tour Content */}
          <div className="tour-content-column">
            <section className="tour-detail-section">
              <TourDetailContent
                hero={hero}
                content={content}
                author_image={EVENT_DETAIL_AUTHOR_AVATAR_AMANDA}
              />

              {/* <!-- Blog Reactions --> */}
              <div className="blog-reactions">
                <div className="reaction-stats">
                  <span className="reaction-count">{reactions.liked_text}</span>
                </div>

                <div className="reaction-buttons">
                  <button className="reaction-btn active" data-reaction="like">
                    <svg className="heart" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="reaction-text">
                      {reactions.buttons.like_text}
                    </span>
                    <span className="reaction-number">
                      {reactions.buttons.like_count}
                    </span>
                  </button>

                  <button className="share-btn">
                    <svg viewBox="0 0 24 24">
                      <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                    </svg>
                    <span>{reactions.buttons.share_text}</span>
                  </button>
                </div>
              </div>

              {/* <!-- Comments Section --> */}
              <div className="comments-section">
                <h3 className="comments-title">{comments.title}</h3>

                {/* <!-- Comment Form --> */}
                <div className="comment-form">
                  <div className="user-avatar">
                    <img
                      src={EVENT_DETAIL_CURRENT_USER_AVATAR}
                      alt={comments.form.avatar_alt}
                    />
                  </div>
                  <div className="comment-input-wrapper">
                    <textarea
                      className="comment-input"
                      placeholder={comments.form.placeholder}></textarea>
                    <button className="comment-submit">
                      {comments.form.submit}
                    </button>
                  </div>
                </div>

                {/* <!-- Comments List --> */}
                <div className="comments-list">
                  {comments.list.map((comment, index) => (
                    <div
                      key={`${comment.author}-${index}`}
                      className={`comment${index === 0 ? "" : " reply"}`}>
                      <div className="comment-avatar">
                        <img
                          src={
                            commentAvatarByAuthor[comment.author] ??
                            EVENT_DETAIL_COMMENT_AVATAR_MARK
                          }
                          alt={comment.author}
                        />
                      </div>
                      <div className="comment-content">
                        <div className="comment-header">
                          <span className="comment-author">
                            {comment.author}
                          </span>
                          {comment.badge && (
                            <span className="author-badge">
                              {comment.badge}
                            </span>
                          )}
                          <span className="comment-time">{comment.time}</span>
                        </div>
                        <p className="comment-text">{comment.text}</p>
                        <div className="comment-actions">
                          <button className="comment-like">
                            <svg viewBox="0 0 24 24">
                              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            <span>{comment.likes}</span>
                          </button>
                          <button className="comment-reply">
                            {comment.reply}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="load-more-comments">
                  <button className="load-more-btn">
                    {comments.load_more}
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Booking Form (Sticky) */}
          <aside className="booking-form-column">
            <BookingForm
              price={1000}
              currency="FCFA"
              guideName={hero.author.name}
            />
          </aside>
        </div>
      </div>
    </Fragment>
  );
};

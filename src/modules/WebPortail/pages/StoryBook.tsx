/** @format */
import React from "react";
import type { StoryBookProps } from "../interfaces/StoryInterface";
import { Timeline } from "../components/StoriesPage/Timeline";
import { AudioLines } from "lucide-react";
import { timelineData } from "../../../common/mocks";



export const StoryBook: React.FC<StoryBookProps> = ({
  story,
  chapterIndex,
  setChapterIndex,
  pageIndex,
  setPageIndex
}) => {
  const [showTimelineModal, setShowTimelineModal] = React.useState(false);
  const [showChaptersModal, setShowChaptersModal] = React.useState(false);

  const chapter = story.chapters[chapterIndex];
  const currentPage = chapter.pages[pageIndex] ?? chapter.pages[0];

  const nextPage = () => {
    if (pageIndex < chapter.pages.length - 1) {
      setPageIndex(pageIndex + 1);
    } else if (chapterIndex < story.chapters.length - 1) {
      setChapterIndex(chapterIndex + 1);
      setPageIndex(0);
    }
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    } else if (chapterIndex > 0) {
      const prevChapter = story.chapters[chapterIndex - 1];
      setChapterIndex(chapterIndex - 1);
      setPageIndex(prevChapter.pages.length - 1);
    }
  };

  const timelineItems = story.chapters.map((ch, i) => ({
    year: (i + 1).toString(),
    title: ch.title,
    description: ch.description
  }));

  return (
    <main className="story-book-shell">
      <aside className="story-book-toc">
        <Timeline
          items={timelineItems}
          showDescriptions={false}
          activeIndex={chapterIndex}
          onSelectIndex={(i) => {
            setChapterIndex(i);
            setPageIndex(0);
          }}
        />
      </aside>
      {/* Modal Trigger Buttons - Visible on tablet/mobile */}
      <div className="story-book-modal-triggers">
        <button
          className="story-book-modal-btn"
          onClick={() => setShowChaptersModal(true)}
          title="Afficher les chapitres">
          Chapitres
        </button>
        <button
          className="story-book-modal-btn"
          onClick={() => setShowTimelineModal(true)}
          title="Afficher la timeline">
          Temps forts
        </button>
      </div>
      <section className="story-book-page">
        <div className="story-book-page-inner">
          <header className="story-book-page-header">
            <p className="story-book-page-meta">
              {story.title} · {story.year}
            </p>
            {currentPage.title && <h3>{currentPage.title}</h3>}
          </header>

          <div className="story-book-page-body">
            <p>{currentPage.content}</p>
            {currentPage.image && (
              <img
                src={currentPage.image}
                alt={currentPage.title || "Story page image"}
                className="story-page-image"
              />
            )}
          </div>

          <div className="story-book-page-actions">
            <button
              className="story-book-btn ghost"
              onClick={prevPage}
              disabled={pageIndex === 0}>
              Page précédente
            </button>
            <button
              className="story-book-btn primary"
              onClick={nextPage}
              disabled={pageIndex === chapter.pages.length - 1}>
              Page suivante
            </button>
          </div>
        </div>
      </section>

      <aside className="story-book-right">
        <div className="story-options">
          <button className="option-btn audio-btn">
            <span className="audio-btn-text">Lecture Audio</span>
            <AudioLines className="audio-btn-icon" />
          </button>
          <div className="timeline-container">
            <h4 className="timeline-title">Les Premiers Pas</h4>

            <div className="timeline2">
              {timelineData.map((item) => (
                <div className="timeline-item" key={item.date}>
                  <div className="timeline-marker">
                    <span className="dot"></span>
                    {timelineData.indexOf(item) !== timelineData.length - 1 && (
                      <span className="line"></span>
                    )}
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-date">{item.date}</div>
                    {item.content && (
                      <div className="timeline-card2">
                        <div className="card-body p-3">{item.content}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Chapters Modal - Visible on tablet/mobile */}
      {showChaptersModal && (
        <div
          className="story-book-modal-overlay active"
          onClick={() => setShowChaptersModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chapters-modal-title"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setShowChaptersModal(false);
            }
          }}>
          <div
            className="story-book-modal"
            onClick={(e) => e.stopPropagation()}
            role="document">
            <div className="story-book-modal-header">
              <h3 id="chapters-modal-title">Chapitres</h3>
              <button
                className="story-book-modal-close"
                onClick={() => setShowChaptersModal(false)}
                aria-label="Fermer le modal">
                ✕
              </button>
            </div>
            <div className="story-book-modal-content">
              <Timeline
                items={timelineItems}
                showDescriptions={false}
                activeIndex={chapterIndex}
                onSelectIndex={(i) => {
                  setChapterIndex(i);
                  setPageIndex(0);
                  setShowChaptersModal(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Timeline Modal - Visible on tablet/mobile */}
      {showTimelineModal && (
        <div
          className="story-book-modal-overlay active"
          onClick={() => setShowTimelineModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="timeline-modal-title"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setShowTimelineModal(false);
            }
          }}>
          <div
            className="story-book-modal"
            onClick={(e) => e.stopPropagation()}
            role="document">
            <div className="story-book-modal-header">
              <h3 id="timeline-modal-title">Les Premiers Pas</h3>
              <button
                className="story-book-modal-close"
                onClick={() => setShowTimelineModal(false)}
                aria-label="Fermer le modal">
                ✕
              </button>
            </div>
            <div className="story-book-modal-content">
              <div className="timeline-container">
                <div className="timeline2">
                  {timelineData.map((item) => (
                    <div className="timeline-item" key={item.date}>
                      <div className="timeline-marker">
                        <span className="dot"></span>
                        {timelineData.indexOf(item) !==
                          timelineData.length - 1 && (
                          <span className="line"></span>
                        )}
                      </div>

                      <div className="timeline-content">
                        <div className="timeline-date">{item.date}</div>
                        {item.content && (
                          <div className="timeline-card2">
                            <div className="card-body p-3">{item.content}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

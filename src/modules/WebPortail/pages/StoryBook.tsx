/** @format */
import React from "react";
import type { StoryBookProps } from "../interfaces/StoryInterface";
import { Timeline } from "../components/StoriesPage/Timeline";
import { AudioLines, Play, Pause } from "lucide-react";
import { timelineData } from "../../../common/mocks";

export const StoryBook: React.FC<StoryBookProps> = ({
  story,
  chapterIndex,
  setChapterIndex,
  pageIndex,
  setPageIndex
}) => {
  const pageContainerRef = React.useRef<HTMLElement | null>(null);
  const pageBodyRef = React.useRef<HTMLDivElement | null>(null);
  const [showTimelineModal, setShowTimelineModal] = React.useState(false);
  const [showChaptersModal, setShowChaptersModal] = React.useState(false);
  const [showAudioModal, setShowAudioModal] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [pageFlip, setPageFlip] = React.useState<{
    direction: "next" | "prev";
    toChapterIndex: number;
    toPageIndex: number;
    from: { content: string; title?: string; image?: string };
    to: { content: string; title?: string; image?: string };
  } | null>(null);

  const chapter = story.chapters[chapterIndex];
  const currentPage = chapter.pages[pageIndex] ?? chapter.pages[0];

  React.useEffect(() => {
    if (pageFlip) return;
    const el = pageContainerRef.current;
    const bodyEl = pageBodyRef.current;

    if (el) {
      try {
        el.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        (el as HTMLElement).scrollTop = 0;
      }
    }

    if (bodyEl) {
      try {
        bodyEl.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        bodyEl.scrollTop = 0;
      }
    }
  }, [story.id, chapterIndex, pageIndex, pageFlip]);

  const resolveTarget = (direction: "next" | "prev") => {
    if (direction === "next") {
      if (pageIndex < chapter.pages.length - 1) {
        return { toChapterIndex: chapterIndex, toPageIndex: pageIndex + 1 };
      }
      if (chapterIndex < story.chapters.length - 1) {
        return { toChapterIndex: chapterIndex + 1, toPageIndex: 0 };
      }
      return null;
    }

    // prev
    if (pageIndex > 0) {
      return { toChapterIndex: chapterIndex, toPageIndex: pageIndex - 1 };
    }
    if (chapterIndex > 0) {
      const prevChapter = story.chapters[chapterIndex - 1];
      return {
        toChapterIndex: chapterIndex - 1,
        toPageIndex: prevChapter.pages.length - 1
      };
    }
    return null;
  };

  React.useEffect(() => {
    if (!pageFlip) return;
    const t = window.setTimeout(() => {
      setChapterIndex(pageFlip.toChapterIndex);
      setPageIndex(pageFlip.toPageIndex);
      setPageFlip(null);
    }, 650);
    return () => window.clearTimeout(t);
  }, [pageFlip, setChapterIndex, setPageIndex]);

  const nextPage = () => {
    if (pageFlip) return;
    const target = resolveTarget("next");
    if (!target) return;
    const nextChapter = story.chapters[target.toChapterIndex];
    const next = nextChapter.pages[target.toPageIndex] ?? nextChapter.pages[0];
    setPageFlip({
      direction: "next",
      toChapterIndex: target.toChapterIndex,
      toPageIndex: target.toPageIndex,
      from: {
        content: currentPage.content,
        title: currentPage.title,
        image: currentPage.image
      },
      to: { content: next.content, title: next.title, image: next.image }
    });
  };

  const prevPage = () => {
    if (pageFlip) return;
    const target = resolveTarget("prev");
    if (!target) return;
    const prevChapter = story.chapters[target.toChapterIndex];
    const prev = prevChapter.pages[target.toPageIndex] ?? prevChapter.pages[0];
    setPageFlip({
      direction: "prev",
      toChapterIndex: target.toChapterIndex,
      toPageIndex: target.toPageIndex,
      from: {
        content: currentPage.content,
        title: currentPage.title,
        image: currentPage.image
      },
      to: { content: prev.content, title: prev.title, image: prev.image }
    });
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
      <section
        className="story-book-page"
        ref={(el) => {
          pageContainerRef.current = el;
        }}
      >
        <div className="story-book-page-inner">
          <header className="story-book-page-header">
            <p className="story-book-page-meta">
              {story.title} · {story.year}
            </p>
            {currentPage.title && <h3>{currentPage.title}</h3>}
          </header>

          <div
            className={`story-book-page-body ${
              pageFlip ? `story-book-page-body--flip-${pageFlip.direction}` : ""
            }`}
            ref={pageBodyRef}
          >
            {pageFlip ? (
              <>
                <div className="story-book-page-body-layer story-book-page-body-layer--to">
                  <div className="story-book-page-body-layer-content">
                    <p>{pageFlip.to.content}</p>
                    {pageFlip.to.image && (
                      <img
                        src={pageFlip.to.image}
                        alt={pageFlip.to.title || "Story page image"}
                        className="story-page-image"
                      />
                    )}
                  </div>
                </div>
                <div className="story-book-page-body-layer story-book-page-body-layer--from">
                  <div className="story-book-page-body-layer-content">
                    <p>{pageFlip.from.content}</p>
                    {pageFlip.from.image && (
                      <img
                        src={pageFlip.from.image}
                        alt={pageFlip.from.title || "Story page image"}
                        className="story-page-image"
                      />
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>{currentPage.content}</p>
                {currentPage.image && (
                  <img
                    src={currentPage.image}
                    alt={currentPage.title || "Story page image"}
                    className="story-page-image"
                  />
                )}
              </>
            )}
          </div>

          <div className="story-book-page-actions">
            <button
              className="story-book-btn ghost"
              onClick={prevPage}
              disabled={!!pageFlip || (pageIndex === 0 && chapterIndex === 0)}>
              Page précédente
            </button>
            <span className="story-book-page-count">
              Page {pageIndex + 1} / {chapter.pages.length}
            </span>
            <button
              className="story-book-btn primary"
              onClick={nextPage}
              disabled={
                !!pageFlip ||
                (pageIndex === chapter.pages.length - 1 &&
                  chapterIndex === story.chapters.length - 1)
              }>
              Page suivante
            </button>
          </div>
        </div>
      </section>

      <aside className="story-book-right">
        <div className="story-options">
          <button
            className="option-btn audio-btn"
            onClick={() => setShowAudioModal(true)}
            title="Simulation lecture audio">
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

      {/* Audio Simulation Modal */}
      {showAudioModal && (
        <div
          className="story-book-modal-overlay active"
          onClick={() => setShowAudioModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="audio-modal-title"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setShowAudioModal(false);
            }
          }}>
          <div
            className="story-book-modal story-book-modal--audio"
            onClick={(e) => e.stopPropagation()}
            role="document">
            <div className="story-book-modal-header">
              <h3 id="audio-modal-title">Lecture audio</h3>
              <button
                className="story-book-modal-close"
                onClick={() => setShowAudioModal(false)}
                aria-label="Fermer le modal">
                ✕
              </button>
            </div>
            <div className="story-book-modal-content story-book-modal-content--audio">
              <p className="story-book-audio-intro">
                Écoutez la narration de cette histoire : {currentPage.title || story.title}
              </p>
              <div className="audio-player story-book-audio-player">
                <button
                  type="button"
                  className="play-btn story-book-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause" : "Lecture"}
                  title={isPlaying ? "Pause" : "Lecture"}>
                  {isPlaying ? (
                    <Pause size={20} strokeWidth={2.5} />
                  ) : (
                    <Play size={20} strokeWidth={2.5} className="play-icon-offset" />
                  )}
                </button>
                <div className="wave-form story-book-wave-form">
                  <div
                    className={`wave-progress story-book-wave-progress${isPlaying ? " story-book-wave-progress--playing" : ""}`}
                  />
                </div>
              </div>
              <p className="story-book-audio-note">
                Simulation de lecture audio — aucune piste audio n&apos;est actuellement chargée.
              </p>
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

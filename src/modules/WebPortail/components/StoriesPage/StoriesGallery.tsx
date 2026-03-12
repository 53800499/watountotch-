/** @format */
import React, { Fragment, useState } from "react";
import { STORIESTEST } from "../../../../common/mocks/stories";
import { StoryBook } from "../../pages/StoryBook";
import type { StoryTest } from "../../interfaces/StoryInterface";
import { CarouselCustom } from "./CarouselCustom";

export const StoriesGallery: React.FC = () => {
  const [activeStory, setActiveStory] = useState<StoryTest>(STORIESTEST[0]);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const handleSelectStory = (story: StoryTest) => {
    setActiveStory(story);
    setChapterIndex(0);
    setPageIndex(0);
  };

  return (
    <Fragment>
      {/* --- CAROUSEL --- */}
      <section className="stories-carousel-section">
        <div className="">
          <CarouselCustom
            stories={STORIESTEST}
            onSelectStory={handleSelectStory}
            activeStoryId={activeStory?.id}
          />
        </div>
      </section>

      {/* --- STORYBOOK --- */}
      <section className="stories-layout">
        <StoryBook
          story={activeStory}
          chapterIndex={chapterIndex}
          setChapterIndex={setChapterIndex}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      </section>
    </Fragment>
  );
};

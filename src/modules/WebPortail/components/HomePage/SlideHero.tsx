/** @format */
import { useCallback, useEffect, useRef, useState } from "react";

export interface Slide {
  country: string;
  city: string;
  text?: string;
  image?: string;
  button?: { label: string; link: string } | null;
}

export interface SlideHeroConfig {
  duration?: number; // ms
  autoplay?: { enabled: boolean };
  timeline?: { enabled: boolean; loop?: boolean };
}

interface Props {
  slides: Slide[];
  config?: SlideHeroConfig;
}

const defaultConfig: SlideHeroConfig = {
  duration: 5000,
  autoplay: { enabled: true },
  timeline: { enabled: true, loop: true }
};

export default function SlideHero({ slides: initSlides, config = {} }: Props) {
  const cfg = {
    ...defaultConfig,
    ...config,
    autoplay: { ...(defaultConfig.autoplay || {}), ...(config.autoplay || {}) },
    timeline: { ...(defaultConfig.timeline || {}), ...(config.timeline || {}) }
  };

  const [slides] = useState<Slide[]>(initSlides || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef<number>(0);
  const [displayIndex, setDisplayIndex] = useState(0);

  const heroBgImgRef = useRef<HTMLImageElement | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);
  const heroContainerRef = useRef<HTMLDivElement | null>(null);

  const timelineLineRef = useRef<HTMLDivElement | null>(null);
  const numberLineRef = useRef<HTMLDivElement | null>(null);
  const numRef = useRef<HTMLHeadingElement | null>(null);

  // Autoplay
  const rafId = useRef<number | null>(null);
  const animStart = useRef<number>(0);
  const progressRef = useRef<number>(0);
  const duration = cfg.duration || 5000;

  // Keep currentIndexRef synced
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const stopAutoplay = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = null;
    animStart.current = 0;
    progressRef.current = 0;
    if (timelineLineRef.current) timelineLineRef.current.style.width = "0%";
    if (numberLineRef.current) numberLineRef.current.style.width = "0%";
  }, []);

  const startAutoplay = useCallback(() => {
    if (!cfg.autoplay?.enabled) return;
    if (rafId.current) return;

    animStart.current = performance.now();
    progressRef.current = 0;

    const step = (time: number) => {
      const elapsed = time - animStart.current;
      const progress = Math.min(1, elapsed / duration);
      progressRef.current = progress;

      if (timelineLineRef.current && cfg.timeline?.enabled) {
        timelineLineRef.current.style.width = `${progress * 100}%`;
      }

      if (numberLineRef.current) {
        const totalSlides = slides.length || 1;
        const baseProgress = (currentIndexRef.current / totalSlides) * 100;
        const progressPerSlide = 100 / totalSlides;
        numberLineRef.current.style.width = `${
          baseProgress + progressPerSlide * progress
        }%`;
      }

      if (progress >= 1) {
        const next = (currentIndexRef.current + 1) % (slides.length || 1);
        setSlide(next, false);
        animStart.current = time;
        progressRef.current = 0;
        if (timelineLineRef.current) timelineLineRef.current.style.width = "0%";
      }

      rafId.current = requestAnimationFrame(step);
    };

    rafId.current = requestAnimationFrame(step);
  }, [cfg.autoplay?.enabled, cfg.timeline?.enabled, duration, slides.length]);

  // Initialize hero container ref
  useEffect(() => {
    const heroEl = document.querySelector(".hero");
    if (heroEl) heroContainerRef.current = heroEl as HTMLDivElement;
  }, []);

  useEffect(() => {
    if (cfg.autoplay?.enabled) startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay, cfg.autoplay?.enabled]);

  // --- Thumbnail cycling animation ---
  const cycleThumbnail = async (/* index: number, */ forward = true) => {
    const container = thumbnailsRef.current;
    if (!container || container.children.length <= 1) return;

    const thumb = forward
      ? container.firstElementChild
      : container.lastElementChild;
    if (!thumb) return;

    const rect = thumb.getBoundingClientRect();
    const heroDiv = heroContainerRef.current ?? document.body;

    const newDiv = document.createElement("div");
    newDiv.classList.add("image-xpasmall");
    Object.assign(newDiv.style, {
      position: "absolute",
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transition: "all 0.9s",
      zIndex: "100"
    });

    const nextIndex = forward
      ? (currentIndexRef.current + 1) % slides.length
      : (currentIndexRef.current - 1 + slides.length) % slides.length;

    const slideData = slides[nextIndex] || { image: "", city: "Unknown" };
    const newImage = document.createElement("img");
    newImage.src = slideData.image || "";
    newImage.alt = slideData.city || "";
    newImage.className = "image";
    newDiv.appendChild(newImage);
    heroDiv.insertAdjacentElement("beforeend", newDiv);

    // Animate clone
    setTimeout(() => {
      Object.assign(newDiv.style, {
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%"
      });
    }, 50);

    newDiv.addEventListener(
      "transitionend",
      () => {
        // Update main image only after transition
        if (heroBgImgRef.current && slideData.image) {
          heroBgImgRef.current.src = slideData.image;
          heroBgImgRef.current.alt = `${slideData.city} - ${slideData.country}`;
        }
        setDisplayIndex(nextIndex);
        newDiv.remove();
      },
      { once: true }
    );
  };

  const setSlide = (index: number, manualUpdate = true) => {
    if (index === currentIndexRef.current) return;

    const forward = index === (currentIndexRef.current + 1) % slides.length;

    cycleThumbnail(index, forward);

    setCurrentIndex(index);
    currentIndexRef.current = index;

    if (manualUpdate) {
      if (numRef.current)
        numRef.current.textContent = String(index + 1).padStart(2, "0");
      if (numberLineRef.current) numberLineRef.current.style.width = "0%";
      if (timelineLineRef.current) timelineLineRef.current.style.width = "0%";
      if (cfg.autoplay?.enabled) {
        stopAutoplay();
        startAutoplay();
      }
    }
  };

  const handleThumbnailClick = (originalIndex: number) => {
    setSlide(originalIndex, true);
  };
  const goPrev = () => {
    const prev = (currentIndexRef.current - 1 + slides.length) % slides.length;
    setSlide(prev, true);
  };
  const goNext = () => {
    const next = (currentIndexRef.current + 1) % slides.length;
    setSlide(next, true);
  };

  // --- Thumbnails order ---
  const [thumbnailsOrder, setThumbnailsOrder] = useState<Slide[]>(() => {
    if (!slides || slides.length === 0) return [];
    const arr: Slide[] = [];
    for (let i = 1; i < slides.length; i++) arr.push(slides[i]);
    arr.push(slides[0]);
    return arr;
  });

  useEffect(() => {
    const newOrder: Slide[] = [];
    for (let i = currentIndex + 1; i < slides.length; i++)
      newOrder.push(slides[i]);
    for (let i = 0; i <= currentIndex; i++) newOrder.push(slides[i]);

    setThumbnailsOrder(newOrder);

    if (numRef.current)
      numRef.current.textContent = String(currentIndex + 1).padStart(2, "0");
  }, [currentIndex, slides]);

  // --- renderThumbnail ---
  const renderThumbnail = (
    slide: Slide,
    idx: number,
    originalIndex: number
  ) => {
    const [src, setSrc] = useState<string>(slide.image || "");
    useEffect(() => {
      let mounted = true;
      if (!slide.image) return;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => mounted && setSrc(slide.image || "");
      img.src = slide.image;
      return () => {
        mounted = false;
      };
    }, [slide.image]);

    return (
      <div
        key={originalIndex}
        className={`image-small`}
        data-index={originalIndex}
        onClick={() => handleThumbnailClick(originalIndex)}>
        <div className="info-bottom">
          <span className="title">{slide.country}</span>
          <span className="subtitle">{(slide.city || "").toUpperCase()}</span>
        </div>
        <img
          className="image"
          src={src}
          alt={`${slide.city || ""}, ${slide.country || ""}`}
          width={250}
          height={370}
        />
      </div>
    );
  };

  const findOriginalIndex = (s: Slide) =>
    slides.findIndex(
      (x) => x.city === s.city && x.country === s.country && x.image === s.image
    );

  return (
    <div className="hero-container">
      <div className="hero">
        <div
          className="time-line"
          style={{ display: cfg.timeline?.enabled ? undefined : "none" }}>
          <div className="line" ref={timelineLineRef} />
        </div>

        <div className="hero-bg">
          <img
            ref={heroBgImgRef}
            className="image"
            src={slides[displayIndex]?.image || slides[0]?.image || ""}
            alt={`${slides[displayIndex]?.city || ""} - ${
              slides[displayIndex]?.country || ""
            }`}
          />

          <div className="hero-info-slide">
            <div className="info-main">
              <div className="info">
                <p className="title">{slides[displayIndex]?.country}</p>
                <h1 className="subtitle">{slides[displayIndex]?.city}</h1>
                <p className="text">{slides[displayIndex]?.text}</p>
                {slides[displayIndex]?.button && (
                  <a href={slides[displayIndex]!.button!.link} className="btn">
                    {slides[displayIndex]!.button!.label}
                  </a>
                )}
              </div>
            </div>

            <div className="box-slide-images">
              <div className="box-image" ref={thumbnailsRef}>
                {thumbnailsOrder.map((t, i) =>
                  renderThumbnail(t, i, findOriginalIndex(t))
                )}
              </div>

              <div className="function-bottom">
                <div className="arrow">
                  <div className="arrow-left" onClick={goPrev}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </div>
                  <div className="arrow-right" onClick={goNext}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>

                <div className="line-num">
                  <div className="box-line">
                    <div className="line" ref={numberLineRef} />
                  </div>
                  <h4 className="num" ref={numRef}>
                    {String(currentIndex + 1).padStart(2, "0")}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

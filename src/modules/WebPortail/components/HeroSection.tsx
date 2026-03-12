/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { GENERIC_HERO_TOURS_BACKGROUND } from "../../../assets/images";

export interface HeroSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  containerClassName?: string;
  /** CTA */
  ctaLabel?: string;
  ctaHref?: string;
  openInNewTab?: boolean;
  onCtaClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  imageSrc = GENERIC_HERO_TOURS_BACKGROUND,
  imageAlt = "Travel Tours",
  title = "Unforgettable Tours Await",
  subtitle = "Embark on journeys that inspire — from hidden gems in vibrant cities to breathtaking natural wonders. Discover, explore, and create memories that last a lifetime.",
  className = "hero-main-bg",
  imageClassName = "hero-image",
  containerClassName = "container",
  ctaLabel,
  ctaHref,
  openInNewTab = false,
  onCtaClick
}) => {
  const ctaProps = {
    onClick: onCtaClick,
    "aria-label": ctaLabel ?? "Action"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  return (
    <div className={className}>
      <div className="hero-background">
        <img src={imageSrc} alt={imageAlt} className={imageClassName} />
      </div>

      <div className={containerClassName}>
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up">
            {title}
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            {subtitle}
          </p>

          {ctaLabel ? (
            ctaHref ? (
              <Link
                to={ctaHref}
                {...ctaProps}
                target={openInNewTab ? "_blank" : undefined}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
                className="btn btn-primary mt-4"
                data-aos="fade-up">
                {ctaLabel}
              </Link>
            ) : (
              <button
                type="button"
                {...ctaProps}
                className="btn btn-primary mt-4"
                data-aos="fade-up">
                {ctaLabel}
              </button>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

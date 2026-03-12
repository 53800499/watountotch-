/** @format */

import React from "react";
import { Image } from "../../../../common/components/Image";
import { Link } from "react-router-dom";
import type { CallActionInterface } from "../../interfaces/CallActionInterface";
import { WORDS } from "../../../../common/constants/wording";
import { CONTACT_SECTION_HERO_IMAGE } from "../../../../assets/images";
import { Button } from "../../../../common/components";

export const CallActionSection: React.FC<CallActionInterface> = ({
  imageSrc = CONTACT_SECTION_HERO_IMAGE,
  imageAlt = WORDS.home_page.call_to_action_section.image_alt,
  text = WORDS.home_page.call_to_action_section.text,
  ctaLabel = WORDS.home_page.call_to_action_section.cta_label,
  ctaHref,
  openInNewTab = false,
  onCtaClick,
  className = "call-action-image",
  imageClassName = "image brightness",
  centralInfoClassName = "central-info"
}) => {
  const ctaProps = {
    className: "btn btn-get-quotes",
    onClick: onCtaClick,
    "aria-label": ctaLabel
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  return (
    <div className={className}>
      <Image className={imageClassName} src={imageSrc} alt={imageAlt} />

      <div className={centralInfoClassName}>
        <p className="text" data-aos="fade-down">
          {text}
        </p>

        {ctaHref ? (
          <Link
            to={ctaHref}
            {...ctaProps}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
            data-aos="fade-up">
            {ctaLabel}
          </Link>
        ) : (
          <Button type="button" {...ctaProps} data-aos="fade-up">
            {ctaLabel}
          </Button>
        )}
      </div>
    </div>
  );
};


export interface CallActionInterface {
  imageSrc?: string;
  imageAlt?: string;
  text?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  openInNewTab?: boolean;
  onCtaClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  className?: string;
  imageClassName?: string;
  centralInfoClassName?: string;
}

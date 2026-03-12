import React, { useState } from "react";
import clsx from "clsx";

interface BootstrapImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  caption?: string;
  rounded?: boolean;
  thumbnail?: boolean;
  fluid?: boolean;
  fallbackSrc?: string;
  className?: string;
}

export const BootstrapImage: React.FC<BootstrapImageProps> = ({
  alt,
  caption,
  rounded = false,
  thumbnail = false,
  fluid = true,
  fallbackSrc,
  src,
  className,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (fallbackSrc) setImgSrc(fallbackSrc);
  };

  const imgClasses = clsx(
    {
      "img-fluid": fluid,
      rounded: rounded,
      "img-thumbnail": thumbnail,
    },
    className
  );

  return (
    <figure className={clsx(caption && "figure")}>
      <img
        src={imgSrc}
        alt={alt}
        className={imgClasses}
        onError={handleError}
        {...props}
      />
      {caption && (
        <figcaption className="figure-caption text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

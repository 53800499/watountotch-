/** @format */

import React from "react";
import { BRAND_LOGO_COLORED } from "../../assets/images";
import { Image } from "./Image";

interface SpinnerProps {
  fullscreen?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ fullscreen = false }) => {
  
  return (
    <div
      className={`app-spinner ${fullscreen ? "app-spinner--fullscreen" : ""}`}
    >
      <div className="app-spinner-inner">
        <div className="app-spinner-ring" aria-hidden="true" />
        <div className="app-spinner-logo-wrapper">
          <Image
            src={BRAND_LOGO_COLORED}
            alt="Watountotche - Chargement"
            className="app-spinner-logo"
          />
        </div>
        <p className="app-spinner-text">Chargement de l'expérience…</p>
      </div>
    </div>
  );
};


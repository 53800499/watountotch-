/** @format */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { WORDS } from "../../../../common/constants/wording";

type AuthRouteKey = "login" | "register" | "forgot";

type AuthLayoutProps = {
  title: string;
  subtitle?: string;
  currentTab: AuthRouteKey;
  helperText?: React.ReactNode;
  children: React.ReactNode;
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  subtitle,
  currentTab,
  helperText,
  children
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const galleryRef = useRef<HTMLElement | null>(null);

  const t = useMemo(() => {
    const auth = WORDS.auth as {
      auth_slider: Array<{
        image: string;
        title: string;
        description: string;
        location: string;
      }>;
      auth_slider_login?: Array<{
        image: string;
        title: string;
        description: string;
        location: string;
      }>;
      auth_slider_register?: Array<{
        image: string;
        title: string;
        description: string;
        location: string;
      }>;
    };

    if (currentTab === "login" && auth.auth_slider_login) {
      return auth.auth_slider_login;
    }
    if (currentTab === "register" && auth.auth_slider_register) {
      return auth.auth_slider_register;
    }
    return auth.auth_slider;
  }, [currentTab]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % t.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [t.length]);

  const currentSlide = useMemo(() => t[activeSlide], [t, activeSlide]);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.style.setProperty(
        "--auth-gallery-image",
        `url(${currentSlide.image})`
      );
    }
  }, [currentSlide.image]);

  return (
    <div className="my-8 auth-container fade-in">
      <div className="auth-shell">
        <aside ref={galleryRef} className="auth-gallery">
          <div className="auth-gallery-gradient" />
          <div className="auth-gallery-content justify-content-between">
            <div className="auth-gallery-header"></div>

            <div className="auth-gallery-text">
              <p className="auth-gallery-location">{currentSlide.location}</p>
              <h1>{currentSlide.title}</h1>
              <p>{currentSlide.description}</p>
            </div>
          </div>
        </aside>

        <section className="auth-panel">
          <div className="auth-panel-header">
            <div>
              <h2>{title}</h2>
              {subtitle && <p className="auth-panel-subtitle">{subtitle}</p>}
            </div>
          </div>

          <div className="auth-panel-body">{children}</div>

          {helperText && <div className="auth-panel-footer">{helperText}</div>}
        </section>
      </div>
    </div>
  );
};


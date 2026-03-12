/** @format */

import React, { useEffect, useMemo, useState } from "react";
import { WORDS } from "../../../common/constants/wording";
import { Link } from "react-router-dom";
import { AuthLayout } from "../components";
import { Button } from "../../../common/components";
import { isValidEmail } from "../utils/field.utils";

export const Login: React.FC = () => {
  const t = WORDS.auth.login;

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPwd, setTouchedPwd] = useState(false);

  const isEmailValid = useMemo(() => isValidEmail(email), [email]);
  const isPasswordValid = useMemo(() => pwd.length >= 12, [pwd]);
  const isFormValid = isEmailValid && isPasswordValid;
  const [showPwd, setShowPwd] = useState(false);

  useEffect(() => {
    document.title = "Connexion | Watountotche";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Formulaire valide ► connexion…");
  };

  return (
    <AuthLayout
      currentTab="login"
      title={t.title}
      subtitle={t.subtitle}
      helperText={
        <p>
          {t.footer_paragraph.text}{" "}
          <Link to="/inscription">{t.footer_paragraph.link_text}</Link>
        </p>
      }>
      <form onSubmit={handleSubmit} className="form auth-step-card">
        <div className="field">
          <div className="label-row d-flex align-items-center">
            <div className="info-icon mb-1 mr-1">
              i<div className="tooltip">{t.form.emailInfo}</div>
            </div>
            <label>{t.form.email_label}</label>
            <span className="text-danger"> *</span>
          </div>
          <input
            type="email"
            className="input-modern"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouchedEmail(true)}
          />

          {touchedEmail && email.length === 0 && (
            <small className="error-text">{t.form.errEmailVide}</small>
          )}

          {touchedEmail && email.length > 0 && !isEmailValid && (
            <small className="error-text">{t.form.errFormatEmail}</small>
          )}
        </div>

        <div className="field">
          {/* Label + icône sur la même ligne */}
          <div className="label-row d-flex align-items-center">
            <div className="info-icon mb-1 mr-1">
              i<div className="tooltip">{t.form.passwordInfo}</div>
            </div>
            <label>{t.form.password_label}</label>
            <span className="text-danger"> *</span>
          </div>

          <div className="input-wrapper">
            <input
              type={showPwd ? "text" : "password"}
              className="input-modern"
              placeholder="Votre mot de passe"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              onBlur={() => setTouchedPwd(true)}
            />

            <button
              type="button"
              className="toggle-pwd"
              aria-label={
                showPwd ? "Masquer le mot de passe" : "Afficher le mot de passe"
              }
              onClick={() => setShowPwd(!showPwd)}>
              <i className={showPwd ? "bi bi-eye-slash" : "bi bi-eye"} />
            </button>
          </div>

          {touchedPwd && pwd.length === 0 && (
            <small className="error-text">{t.form.errPasswordVide}</small>
          )}
        </div>

        <div className="options">
          <label className="checkbox-soft">
            <input type="checkbox" />
            <span>{t.btn_checkbox}</span>
          </label>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/mot-de-passe-oublie" className="link-soft">
            {t.link_forgot_password}
          </Link>
        </div>

        <Button
          type="submit"
          disabled={!isFormValid}
          className={`btn-gradient w-100 btn animated-btn ${
            !isFormValid ? "disabled" : ""
          }`}>
          {t.btn_submit}
        </Button>

        <div className="social-connect">
          <p className="divider-text">ou continuer avec</p>
          <div className="social-connect-buttons">
            <Button type="button" className="btn gradient-btn animated-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 488 512">
                <path
                  fill="#FFFFFF"
                  d="M488 261.8c0-17.4-1.6-34.1-4.7-50.4H249v95.4h135.9c-5.9 31.8-23.7 58.7-50.4 76.7v63.7h81.6c47.7-43.9 74.9-108.7 74.9-185.4z"
                />
                <path
                  fill="#FFFFFF"
                  d="M249 512c67.5 0 124.2-22.4 165.6-60.8l-81.6-63.7c-22.7 15.3-52 24.5-84 24.5-64 0-118.1-43.2-137.3-101.3H28.1v63.2C69.8 462.4 152.4 512 249 512z"
                />
                <path
                  fill="#FFFFFF"
                  d="M111.7 310.7c-4.6-13.8-7.2-28.5-7.2-43.7s2.6-29.9 7.2-43.7v-63.2H28.1C10.3 193.3 0 220.3 0 249s10.3 55.7 28.1 88.3l83.6-26.6z"
                />
                <path
                  fill="#FFFFFF"
                  d="M249 98.3c36.7 0 69.6 12.6 95.7 37.4l71.6-71.6C373.1 23.5 316.5 0 249 0 152.4 0 69.8 49.6 28.1 126.5l83.6 63.2C130.9 141.5 185 98.3 249 98.3z"
                />
              </svg>
            </Button>
            <Button type="button" className="btn gradient-btn animated-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 384 512"
                fill="white">
                <path d="M318.7 268.4c-.3-36.1 16-63.7 50.3-84.1-18.5-27-46.7-42-82.5-43-34.5-1-64.7 21-77.1 21-13 0-47.1-20.5-73.2-20-37.5 .5-71.8 22-91.3 55.5-39.1 67.7-10 167.8 28.2 223.2 18.7 28.1 40.8 59.5 69.9 58.4 27.5-1 37.9-17.7 71-17.7 32.9 0 42.4 17.7 70.8 17.1 28.9-.5 47.2-28.5 65.5-56.9 20.5-32.3 28.9-63.5 29.1-65.2-1.1-.5-55.8-21.5-56-85.3zM260.2 86.7c17.7-21.5 29.5-51.5 26.2-81-25.4 1-56.2 16.9-74.5 38.4-16.3 18.5-30.5 48-26.7 76.1 28.2 2.3 57.3-14.2 75-33.5z" />
              </svg>
            </Button>
            <Button type="button" className="btn gradient-btn animated-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 512 512"
                fill="white">
                <path d="M459.4 151.7c.32 4.5 .32 9.1 .32 13.7 0 139.2-105.9 299.7-299.7 299.7-59.5 0-114.9-17.2-161.4-47 8.4 .97 16.8 1.44 25.6 1.44 49.2 0 94.4-16.8 130.2-45-46-1-84.8-31.2-98.1-72.8 6.5 .97 13 .97 19.8 .97 9.6 0 18.9-1.3 27.7-3.6-48.1-9.7-84.1-52.1-84.1-103v-1.3c14.3 7.9 30.7 12.7 48.1 13.3-28.4-19-47.2-51.1-47.2-87.5 0-19.2 5-37 13.7-52.5 51.7 63.5 129 105.2 216.2 109.6-1.8-7.7-2.7-15.6-2.7-23.6 0-57.7 46.7-104.7 104.7-104.7 30.2 0 57.4 12.7 76.5 33.3 23.9-4.7 46.5-13.5 66.8-25.6-7.8 24.3-24.3 44.8-46.1 57.7 21.3-2.3 41.6-8.2 60.5-16.7-14.2 21-32.3 39.5-52.9 54.3z" />
              </svg>
            </Button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

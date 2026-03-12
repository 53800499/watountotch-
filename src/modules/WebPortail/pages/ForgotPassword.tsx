/** @format */

import React, { useMemo, useState } from "react";
import { WORDS } from "../../../common/constants/wording";
import { Link } from "react-router-dom";
import { AuthLayout } from "../components";
import { isValidEmail } from "../utils/field.utils";
import { Button } from "../../../common/components";

export const ForgotPassword: React.FC = () => {
  const t = WORDS.auth.forgotPassword;

  const [email, setEmail] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);

  const isEmailValid = useMemo(() => isValidEmail(email), [email]);
  const isFormValid = isEmailValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Envoi du lien de réinitialisation pour :", email);
  };

  return (
    <AuthLayout
      currentTab="forgot"
      title={t.title}
      subtitle={t.subtitle}
      helperText={
        <p>
          {t.footer_paragraph.text}{" "}
          <Link to="/connexion">{t.footer_paragraph.link_text}</Link>
        </p>
      }>
      <form onSubmit={handleSubmit} className="form auth-step-card">
        {/* EMAIL */}
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

        {/* SUBMIT */}
        <Button
          type="submit"
          disabled={!isFormValid}
          className={`btn-gradient w-100 animated-btn btn ${
            !isFormValid ? "disabled" : ""
          }`}>
          {t.button.submit}
        </Button>
      </form>
    </AuthLayout>
  );
};

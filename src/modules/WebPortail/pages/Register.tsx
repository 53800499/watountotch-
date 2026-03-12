/** @format */

import React, { useEffect, useMemo, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { WORDS } from "../../../common/constants/wording";
import { Link } from "react-router-dom";
import { AuthLayout } from "../components";
import { Button } from "../../../common/components";

type RegisterFormState = {
  firstName: string;
  lastName: string;
  countryOrigin: string;
  countryResidence: string;
  language: string;
  story: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
  accountType: "user" | "guide" | "";
};

const STEP_SEQUENCE = ["identity", "contact", "security"] as const;

const INITIAL_FORM: RegisterFormState = {
  firstName: "",
  lastName: "",
  countryOrigin: "",
  countryResidence: "",
  language: "",
  story: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  termsAccepted: false,
  accountType: "user"
};

const INITIAL_TOUCHED: Record<keyof RegisterFormState, boolean> = {
  firstName: false,
  lastName: false,
  countryOrigin: false,
  countryResidence: false,
  language: false,
  story: false,
  email: false,
  phone: false,
  password: false,
  confirmPassword: false,
  termsAccepted: false,
  accountType: false
};

const LabelWithInfo: React.FC<{ label: string; info?: string }> = ({
  label,
  info
}) => (
  <div className="label-row d-flex align-items-center">
    {info && (
      <div className="info-icon mb-1 mr-1">
        i<div className="tooltip">{info}</div>
      </div>
    )}
    <label>{label} </label>
    <span className="text-danger">*</span>
  </div>
);

const LANGUAGES = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "fon", label: "Fon" },
  { value: "yo", label: "Yoruba" }
] as const;

const COUNTRIES = [
  { value: "BJ", label: "Bénin" },
  { value: "FR", label: "France" },
  { value: "CI", label: "Côte d'Ivoire" },
  { value: "SN", label: "Sénégal" },
  { value: "NG", label: "Nigéria" }
] as const;

export const Register: React.FC = () => {
  const t = WORDS.auth.register_page;
  const [formData, setFormData] = useState<RegisterFormState>(INITIAL_FORM);
  const [touchedFields, setTouchedFields] =
    useState<Record<keyof RegisterFormState, boolean>>(INITIAL_TOUCHED);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const stepperProgressRef = useRef<HTMLDivElement | null>(null);
  const stepperItems = useMemo(
    () => [
      { id: "identity", label: t.form.step_identity_label },
      { id: "contact", label: t.form.step_contact_label },
      { id: "security", label: t.form.step_security_label }
    ],
    [
      t.form.step_identity_label,
      t.form.step_contact_label,
      t.form.step_security_label
    ]
  );
  const currentStepKey = STEP_SEQUENCE[currentStep];

  const markFieldTouched = (field: keyof RegisterFormState) => {
    setTouchedFields((prev) => ({
      ...prev,
      [field]: true
    }));
  };

  const updateField = <Key extends keyof RegisterFormState>(
    field: Key,
    value: RegisterFormState[Key]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const isEmailValid = useMemo(
    () => /\S+@\S+\.\S+/.test(formData.email),
    [formData.email]
  );

  const isPasswordStrong = useMemo(() => {
    const strongPwdRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}$/;
    return strongPwdRegex.test(formData.password);
  }, [formData.password]);

  const isConfirmValid = useMemo(
    () =>
      formData.confirmPassword.length > 0 &&
      formData.confirmPassword === formData.password,
    [formData.confirmPassword, formData.password]
  );

  const stepValidations = useMemo(
    () => ({
      identity:
        formData.accountType.length > 0 &&
        formData.firstName.trim().length >= 2 &&
        formData.lastName.trim().length >= 2 &&
        formData.countryOrigin.length > 0 &&
        formData.countryResidence.length > 0 &&
        formData.language.length > 0,
      contact: isEmailValid && formData.phone.trim().length >= 8,
      security: isPasswordStrong && isConfirmValid && formData.termsAccepted
    }),
    [
      formData.accountType,
      formData.firstName,
      formData.lastName,
      formData.phone,
      formData.termsAccepted,
      formData.countryOrigin,
      formData.countryResidence,
      formData.language,
      isConfirmValid,
      isEmailValid,
      isPasswordStrong
    ]
  );

  const isCurrentStepValid = stepValidations[currentStepKey];
  const isLastStep = currentStep === STEP_SEQUENCE.length - 1;
  const progress = ((currentStep + 1) / STEP_SEQUENCE.length) * 100;

  useEffect(() => {
    if (stepperProgressRef.current) {
      stepperProgressRef.current.style.setProperty(
        "--auth-step-progress",
        `${progress}%`
      );
    }
  }, [progress]);

  const handleNext = () => {
    if (!isCurrentStepValid) return;
    setCurrentStep((prev) => Math.min(prev + 1, STEP_SEQUENCE.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isCurrentStepValid) return;
    if (!isLastStep) {
      handleNext();
      return;
    }
    console.table(formData);
  };

  const renderIdentityStep = () => (
    <>
      {/* <div className="d-flex justify-between gap-2"> */}
      <div className="auth-field-col">
        <LabelWithInfo
          label={t.form.firstname_label}
          info={t.form.firstname_info}
        />
        <input
          type="text"
          className="input-modern"
          placeholder={t.form.firstname_placeholder}
          value={formData.firstName}
          onChange={(e) => updateField("firstName", e.target.value)}
          onBlur={() => markFieldTouched("firstName")}
        />
        {touchedFields.firstName && formData.firstName.trim().length < 2 && (
          <small className="error-text">{t.form.err_firstname_min}</small>
        )}
      </div>
      <div className="auth-field-col">
        <LabelWithInfo
          label={t.form.lastname_label}
          info={t.form.lastname_info}
        />
        <input
          type="text"
          className="input-modern"
          placeholder={t.form.lastname_placeholder}
          value={formData.lastName}
          onChange={(e) => updateField("lastName", e.target.value)}
          onBlur={() => markFieldTouched("lastName")}
        />
        {touchedFields.lastName && formData.lastName.trim().length < 2 && (
          <small className="error-text">{t.form.err_lastname_min}</small>
        )}
      </div>
      {/* </div> */}
      <div className="d-flex justify-between gap-2">
        <div className="auth-field-col">
          <LabelWithInfo
            label={t.form.country_origin_label}
            info={t.form.country_origin_info}
          />
          <select
            className="input-modern"
            value={formData.countryOrigin}
            onChange={(e) => updateField("countryOrigin", e.target.value)}
            onBlur={() => markFieldTouched("countryOrigin")}>
            <option value="">{t.form.country_origin_placeholder}</option>
            {COUNTRIES.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {touchedFields.countryOrigin &&
            formData.countryOrigin.trim().length === 0 && (
              <small className="error-text">
                {t.form.err_country_origin_min}
              </small>
            )}
        </div>
        <div className="auth-field-col">
          <LabelWithInfo
            label={t.form.country_residence_label}
            info={t.form.country_residence_info}
          />
          <select
            className="input-modern"
            value={formData.countryResidence}
            onChange={(e) => updateField("countryResidence", e.target.value)}
            onBlur={() => markFieldTouched("countryResidence")}>
            <option value="">{t.form.country_residence_placeholder}</option>
            {COUNTRIES.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {touchedFields.countryResidence &&
            formData.countryResidence.trim().length === 0 && (
              <small className="error-text">
                {t.form.err_country_residence_min}
              </small>
            )}
        </div>
      </div>
      {/* <div className="d-flex justify-between gap-2"> */}
        <div className="field">
          <LabelWithInfo
            label={t.form.language_label}
            info={t.form.language_info}
          />
          <select
            className="input-modern"
            value={formData.language}
            onChange={(e) => updateField("language", e.target.value)}
            onBlur={() => markFieldTouched("language")}>
            <option value="">{t.form.language_placeholder}</option>
            {LANGUAGES.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          {touchedFields.language && formData.language.length === 0 && (
            <small className="error-text">{t.form.err_language_required}</small>
          )}
        </div>
        <div className="account-type-selector">
          <LabelWithInfo
            label="Type de compte"
            info="Veuillez selectionner un type de compte"
          />
          <div className="d-flex justify-content-between gap-3 px-2">
          {/* UTILISATEUR */}
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input custom-rect-radio user"
              type="radio"
              name="accountType"
              id="user"
              value="user"
              checked={formData.accountType === "user"}
              onChange={(e) =>
                updateField("accountType", e.target.value as "user" | "guide")
              }
              onBlur={() => markFieldTouched("accountType")}
            />
            <label className="form-check-label" htmlFor="user">
              Particulier
            </label>
          </div>

          {/* GUIDE */}
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input custom-rect-radio guide"
              type="radio"
              name="accountType"
              id="guide"
              value="guide"
              checked={formData.accountType === "guide"}
              onChange={(e) =>
                updateField("accountType", e.target.value as "user" | "guide")
              }
              onBlur={() => markFieldTouched("accountType")}
            />
            <label className="form-check-label" htmlFor="guide">
              Guide touristique
            </label>
          </div>
          </div>
          {/* </div> */}

          {touchedFields.accountType && formData.accountType.length === 0 && (
            <small className="error-text">
              Veuillez sélectionner un type de compte
            </small>
          )}
        </div>
      {/* </div> */}
    </>
  );

  const renderContactStep = () => (
    <>
      <div className="field">
        <LabelWithInfo label={t.form.email_label} info={t.form.email_info} />
        <input
          type="email"
          className="input-modern"
          placeholder={t.form.email_placeholder}
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          onBlur={() => markFieldTouched("email")}
        />
        {touchedFields.email && formData.email.length === 0 && (
          <small className="error-text">{t.form.err_email_required}</small>
        )}
        {touchedFields.email && formData.email.length > 0 && !isEmailValid && (
          <small className="error-text">{t.form.err_email_format}</small>
        )}
      </div>

      <div className="field-row">
        <div className="field">
          <LabelWithInfo label={t.form.phone_label} info={t.form.phone_info} />
          <PhoneInput
            international
            defaultCountry="BJ"
            value={formData.phone}
            onChange={(value) => updateField("phone", value || "")}
            className="phone-input-modern"
            onBlur={() => markFieldTouched("phone")}
          />
          {touchedFields.phone && formData.phone.trim().length === 0 && (
            <small className="error-text">{t.form.err_phone_required}</small>
          )}
          {touchedFields.phone &&
            formData.phone.trim().length > 0 &&
            formData.phone.trim().length < 8 && (
              <small className="error-text">{t.form.err_phone_min}</small>
            )}
        </div>
      </div>
    </>
  );

  const renderSecurityStep = () => (
    <>
      <div className="field">
        <LabelWithInfo
          label={t.form.password_label}
          info={t.form.password_info}
        />
        <div className="input-wrapper">
          <input
            type={showPwd ? "text" : "password"}
            className="input-modern"
            placeholder={t.form.password_placeholder}
            value={formData.password}
            onChange={(e) => updateField("password", e.target.value)}
            onBlur={() => markFieldTouched("password")}
          />
          <button
            type="button"
            className="toggle-pwd"
            aria-label={
              showPwd ?
                t.form.toggle_password_hide
              : t.form.toggle_password_show
            }
            onClick={() => setShowPwd((prev) => !prev)}>
            <i className={showPwd ? "bi bi-eye-slash" : "bi bi-eye"} />
          </button>
        </div>
        {touchedFields.password && formData.password.length === 0 && (
          <small className="error-text">{t.form.err_password_required}</small>
        )}
        {touchedFields.password &&
          formData.password.length > 0 &&
          !isPasswordStrong && (
            <small className="error-text">{t.form.err_password_strength}</small>
          )}
      </div>

      {isPasswordStrong && (
        <div className="field">
          <LabelWithInfo
            label={t.form.confirm_password_label}
            info={t.form.confirm_password_info}
          />
          <div className="input-wrapper">
            <input
              type={showConfirmPwd ? "text" : "password"}
              className="input-modern"
              placeholder={t.form.confirm_password_placeholder}
              value={formData.confirmPassword}
              onChange={(e) => updateField("confirmPassword", e.target.value)}
              onBlur={() => markFieldTouched("confirmPassword")}
            />
            <button
              type="button"
              className="toggle-pwd"
              aria-label={
                showConfirmPwd ?
                  t.form.toggle_confirm_hide
                : t.form.toggle_confirm_show
              }
              onClick={() => setShowConfirmPwd((prev) => !prev)}>
              <i className={showConfirmPwd ? "bi bi-eye-slash" : "bi bi-eye"} />
            </button>
          </div>
          {touchedFields.confirmPassword &&
            formData.confirmPassword.length === 0 && (
              <small className="error-text">
                {t.form.err_confirm_required}
              </small>
            )}
          {touchedFields.confirmPassword &&
            formData.confirmPassword.length > 0 &&
            !isConfirmValid && (
              <small className="error-text">
                {t.form.err_confirm_mismatch}
              </small>
            )}
        </div>
      )}

      <label className="checkbox-soft">
        <input
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={(e) => updateField("termsAccepted", e.target.checked)}
          onBlur={() => markFieldTouched("termsAccepted")}
        />
        <span>
          {t.form.terms_text_prefix}
          <Link to="/conditions">{t.form.terms_link_label}</Link>.
        </span>
      </label>
    </>
  );

  const renderStepContent = () => {
    if (currentStepKey === "identity") return renderIdentityStep();
    if (currentStepKey === "contact") return renderContactStep();
    return renderSecurityStep();
  };

  return (
    <AuthLayout
      currentTab="register"
      title={t.title}
      subtitle={t.subtitle}
      helperText={
        <p>
          {t.form.helper_text_prefix}{" "}
          <Link to="/connexion">{t.form.helper_text_link}</Link>
        </p>
      }>
      <div className="auth-stepper">
        <div ref={stepperProgressRef} className="auth-stepper-progress">
          <div />
        </div>
        <div className="auth-stepper-items">
          {stepperItems.map((step, index) => (
            <div
              key={step.id}
              className={`auth-stepper-item ${
                index === currentStep ? "current" : ""
              } ${index < currentStep ? "completed" : ""}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step.label}</p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form auth-step-card">
        {renderStepContent()}

        <div className="auth-step-actions">
          <button
            type="button"
            className="btn-soft ghost"
            onClick={handlePrev}
            disabled={currentStep === 0}>
            {t.form.prev_step_btn}
          </button>
          <Button
            type={isLastStep ? "submit" : "button"}
            onClick={!isLastStep ? handleNext : undefined}
            className={`btn-gradient animated-btn btn ${
              !isCurrentStepValid ? "disabled" : ""
            }`}
            disabled={!isCurrentStepValid}>
            {isLastStep ? t.form.submit_btn : t.form.next_step_btn}
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

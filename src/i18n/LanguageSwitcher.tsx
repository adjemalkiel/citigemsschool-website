"use client";

import { useLocale, useT } from "./LocaleProvider";
import type { Locale } from "./index";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const t = useT();

  const toggle = () => {
    const next: Locale = locale === "fr" ? "en" : "fr";
    setLocale(next);
  };

  return (
    <button
      type="button"
      className={`lang-toggle ${className}`}
      onClick={toggle}
      aria-label={t("header.lang")}
      title={t("header.lang")}
    >
      <span className={`lang-toggle__opt ${locale === "fr" ? "is-active" : ""}`}>
        FR
      </span>
      <span className={`lang-toggle__opt ${locale === "en" ? "is-active" : ""}`}>
        EN
      </span>
      <span
        className={`lang-toggle__thumb ${locale === "en" ? "is-en" : "is-fr"}`}
        aria-hidden="true"
      />
    </button>
  );
}

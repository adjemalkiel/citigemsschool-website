import fr, { type MessageKey } from "./fr";
import en from "./en";

export type Locale = "fr" | "en";
export type { MessageKey };

export const STORAGE_KEY = "citigems-lang";
export const DEFAULT_LOCALE: Locale = "fr";

export const dictionaries: Record<Locale, Record<MessageKey, string>> = {
  fr,
  en,
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "fr" || value === "en";
}

export function translate(locale: Locale, key: MessageKey): string {
  return dictionaries[locale][key] ?? dictionaries.fr[key] ?? key;
}

"use client";

import { LocaleProvider } from "./LocaleProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}

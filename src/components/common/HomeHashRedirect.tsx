"use client";

import { useEffect } from "react";

/** Send obsolete multi-page routes to the one-page home anchors. */
export default function HomeHashRedirect({ hash = "" }: { hash?: string }) {
  useEffect(() => {
    const target = hash ? `/#${hash}` : "/";
    window.location.replace(target);
  }, [hash]);

  return null;
}

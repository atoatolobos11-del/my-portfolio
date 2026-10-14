import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

/**
 * Shared check: does the resume PDF actually exist?
 * Returns true / false, or null while checking.
 */
export default function useResumeReady() {
  const [ready, setReady] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(profile.resumePdfPath, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setReady(res.ok);
      })
      .catch(() => {
        if (!cancelled) setReady(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
}

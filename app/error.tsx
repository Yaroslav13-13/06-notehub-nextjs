"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Упс! Сталася помилка 🚨</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          padding: "8px 16px",
          marginTop: "12px",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Спробувати знову
      </button>
    </div>
  );
}

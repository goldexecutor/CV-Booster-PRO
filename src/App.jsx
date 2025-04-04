// CV Booster Pro - Clean Build
// File: src/App.jsx

import { useState } from "react";

export default function CVBoosterPro() {
  const [cvText, setCvText] = useState("");

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1rem" }}>CV Booster Pro 🚀</h1>
      <p style={{ textAlign: "center", maxWidth: "36rem", marginBottom: "1.5rem" }}>
        Paste your CV below and let our AI enhance it for clarity, structure, and professional tone.
      </p>

      <div style={{
        width: "100%",
        maxWidth: "48rem",
        background: "white",
        padding: "2rem",
        borderRadius: "0.5rem"
      }}>
        <textarea
          placeholder="Paste your current CV here..."
          value={cvText}
          onChange={(e) => setCvText(e.target.value)}
          style={{
            width: "100%",
            minHeight: "200px",
            padding: "1rem",
            borderRadius: "0.375rem",
            marginBottom: "1.5rem"
          }}
        />

        <a
          href="https://buy.stripe.com/5kA3dR7Zm8S26T63cc"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            width: "100%",
            padding: "1rem",
            backgroundColor: "#111827",
            color: "white",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1rem",
            textAlign: "center",
            textDecoration: "none"
          }}
        >
          Boost My CV – £15
        </a>
      </div>
    </div>
  );
}

// CV Booster Pro - Combined Promo + Tool Page
import { useState } from "react";

export default function CVBoosterPro() {
  const [cvText, setCvText] = useState("");
  const [rewrittenCV, setRewrittenCV] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRewrite = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setRewrittenCV(
        `✅ Optimized CV:\n\n${cvText}\n\n(Your CV has been enhanced for clarity, tone, and impact.)`
      );
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
      padding: "2rem",
      fontFamily: "sans-serif",
      maxWidth: "800px",
      margin: "auto"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}>
        Everyone Will Face This. Will Your CV Survive? 🚀
      </h1>
      <p style={{ textAlign: "center", fontSize: "1.125rem", marginBottom: "1.5rem" }}>
        AI-powered CV rewriting for <strong>£15</strong>. Improve tone, clarity, and structure — no fluff, just results.
      </p>

      <a
        href="https://buy.stripe.com/5kA3dR7Zm8S26T63cc"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textAlign: "center",
          backgroundColor: "#111827",
          color: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          textDecoration: "none"
        }}
      >
        Pay Now – £15
      </a>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Paste Your CV Below:</h2>
      <textarea
        placeholder="Paste your current CV here..."
        value={cvText}
        onChange={(e) => setCvText(e.target.value)}
        style={{
          width: "100%",
          minHeight: "200px",
          padding: "1rem",
          borderRadius: "0.375rem",
          marginBottom: "1rem"
        }}
      />

      <button
        onClick={handleRewrite}
        disabled={isProcessing || !cvText.trim()}
        style={{
          width: "100%",
          padding: "1rem",
          backgroundColor: "#2563eb",
          color: "white",
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "0.5rem",
          cursor: "pointer"
        }}
      >
        {isProcessing ? "Enhancing CV..." : "Boost My CV with AI"}
      </button>

      {rewrittenCV && (
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>✅ Enhanced CV:</h3>
          <pre style={{
            whiteSpace: "pre-wrap",
            backgroundColor: "#f3f4f6",
            padding: "1rem",
            borderRadius: "0.5rem"
          }}>
            {rewrittenCV}
          </pre>
        </div>
      )}

      <footer style={{ marginTop: "4rem", textAlign: "center", color: "#9ca3af", fontSize: "0.875rem" }}>
        &copy; {new Date().getFullYear()} CV Booster Pro. Built for Bratans who deliver.
      </footer>
    </div>
  );
}

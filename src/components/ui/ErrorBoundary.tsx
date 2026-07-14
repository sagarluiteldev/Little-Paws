import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "24px",
            textAlign: "center",
            backgroundColor: "#fff0f8",
            color: "#18181b",
            fontFamily: '"Inter Tight", "Plus Jakarta Sans", system-ui, sans-serif',
          }}
        >
          <h2
            style={{
              color: "#f030a3",
              fontSize: "clamp(28px, 4vw, 36px)",
              margin: "0 0 16px 0",
              fontWeight: 600,
            }}
          >
            Oops! Something went wrong
          </h2>
          <p
            style={{
              color: "#62626b",
              fontSize: "18px",
              margin: "0 0 28px 0",
              maxWidth: "480px",
              lineHeight: 1.45,
            }}
          >
            An unexpected error occurred. Don't worry, your pet's records are safe! Please try reloading the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              height: "48px",
              padding: "0 28px",
              borderRadius: "999px",
              border: "none",
              background: "#ffc552",
              color: "#161617",
              fontSize: "16px",
              fontWeight: 500,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(255, 197, 82, 0.35)",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#ffd376";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#ffc552";
              e.currentTarget.style.transform = "none";
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

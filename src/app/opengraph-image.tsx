import { ImageResponse } from "next/og";

export const alt = "Lydia Groza — Web Developer & CS Student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#08090c",
          backgroundImage:
            "radial-gradient(circle at 50% -20%, rgba(79, 70, 229, 0.3), transparent 60%)",
          padding: "96px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#8b8ff8",
            fontSize: 28,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 48, height: 2, background: "#8b8ff8" }} />
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#f1f2f6",
            letterSpacing: "-0.03em",
          }}
        >
          Lydia Groza
          <span style={{ color: "#8b8ff8" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 36,
            color: "#9b9eb3",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Web developer & CS student — AI tools, full-stack apps, and the
          occasional piece of hardware.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 64,
            fontSize: 26,
            color: "#5d6075",
          }}
        >
          Brașov, Romania · github.com/lydiagroza
        </div>
      </div>
    ),
    { ...size }
  );
}

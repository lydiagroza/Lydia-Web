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
          background: "#08090a",
          backgroundImage:
            "radial-gradient(circle at 50% -20%, rgba(45, 212, 167, 0.18), transparent 60%)",
          padding: "96px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#2dd4a7",
            fontSize: 28,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 48, height: 2, background: "#2dd4a7" }} />
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#f2f3f2",
            letterSpacing: "-0.03em",
          }}
        >
          Lydia Groza
          <span style={{ color: "#2dd4a7" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 36,
            color: "#9aa39d",
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
            color: "#5c655f",
          }}
        >
          Brașov, Romania · github.com/lydiagroza
        </div>
      </div>
    ),
    { ...size }
  );
}

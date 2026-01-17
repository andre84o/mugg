import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MuggButiken - Joy in Every Cup";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fef2f2 0%, #ffffff 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo placeholder - röd mugg ikon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: "#dc2626" }}
          >
            <path
              d="M17 8h1a4 4 0 1 1 0 8h-1"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 1v3M10 1v3M14 1v3"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#1f1f1f",
            marginBottom: 20,
            display: "flex",
          }}
        >
          Mugg
          <span style={{ color: "#dc2626" }}>Butiken</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: "#dc2626",
            fontWeight: 600,
            marginBottom: 30,
          }}
        >
          Joy in Every Cup
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: "#6b7280",
            maxWidth: 800,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Handcrafted mugs designed to bring joy to your daily routine
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

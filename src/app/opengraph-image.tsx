import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Flixa — Instant AI-powered file sync";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const brandGradient = `linear-gradient(135deg, rgba(108,108,255,1) 0%, rgba(34,211,238,1) 100%)`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b0b10",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: brandGradient,
            opacity: 0.25,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "56px 72px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                color: "white",
                opacity: 0.9,
                fontSize: 20,
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 999,
                  background: "#22D3EE",
                  boxShadow: "0 0 24px rgba(34,211,238,0.8)",
                }}
              />
              Now syncing across 2.4M files/min
            </div>
            <div
              style={{
                fontSize: 104,
                fontWeight: 800,
                letterSpacing: -2.5,
                backgroundImage: brandGradient,
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
              }}
            >
              Flixa
            </div>
            <div
              style={{
                color: "#C8C9CF",
                fontSize: 34,
                lineHeight: 1.35,
                maxWidth: 900,
                fontWeight: 500,
              }}
            >
              Instant file sharing across devices with AI-powered secure cloud syncing.
            </div>
            <div style={{ display: "flex", gap: 20, marginTop: 8 }}>
              <Badge>End-to-end encrypted</Badge>
              <Badge>Unlimited devices</Badge>
              <Badge>Smart conflict resolution</Badge>
            </div>
          </div>
          <Illustration />
        </div>
        <div
          style={{
            position: "absolute",
            left: 72,
            bottom: 48,
            color: "#9CA3AF",
            fontSize: 22,
          }}
        >
          flixa.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

function Badge({ children }: { children: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 14px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.06)",
        color: "#D1D5DB",
        fontSize: 22,
      }}
    >
      {children}
    </div>
  );
}

function Illustration() {
  const box = {
    width: 180,
    height: 140,
    borderRadius: 24,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as const;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
      <div style={box}><FileIcon /></div>
      <div style={box}><CloudIcon /></div>
      <div style={box}><DeviceIcon /></div>
      <div style={box}><LinkIcon /></div>
    </div>
  );
}

function FileIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
      <path d="M7 3h6l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="#C7D2FE" strokeWidth="1.5"/>
      <path d="M13 3v4h4" stroke="#A5B4FC" strokeWidth="1.5"/>
      <path d="M8 10h8M8 13h8M8 16h5" stroke="#E5E7EB" strokeWidth="1.2"/>
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
      <path d="M7 16a4 4 0 1 1 0-8 5 5 0 0 1 9.6 1.2A3.5 3.5 0 1 1 17.5 16H7z" stroke="#99F6E4" strokeWidth="1.5"/>
    </svg>
  );
}

function DeviceIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="12" height="10" rx="2" stroke="#93C5FD" strokeWidth="1.5"/>
      <rect x="17" y="8" width="4" height="7" rx="1" stroke="#C4B5FD" strokeWidth="1.5"/>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
      <path d="M9 12a3 3 0 0 0 3 3h2m-8 0a3 3 0 0 1 0-6h3m4 0a3 3 0 0 1 0 6h-3" stroke="#86EFAC" strokeWidth="1.5"/>
    </svg>
  );
}



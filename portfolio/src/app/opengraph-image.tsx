import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const alt = `${profile.name}: ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#f7f6f3",
          color: "#202225",
        }}
      >
        <div style={{ width: 72, height: 6, background: "#a4501d", marginBottom: 40 }} />
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>{profile.name}</div>
        <div style={{ fontSize: 38, marginTop: 28, color: "#5a5e64" }}>{profile.roles.join("  ·  ")}</div>
      </div>
    ),
    size,
  );
}

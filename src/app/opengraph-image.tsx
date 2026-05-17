import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "space-between",
          background: "#f6f4ef",
          color: "#111111",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 800 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#d52b1e" }}>Москва · СЗАО</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, lineHeight: 1.04, fontWeight: 900, maxWidth: 920 }}>
            Аварийное вскрытие замков
          </div>
          <div style={{ marginTop: 28, fontSize: 34, lineHeight: 1.25, maxWidth: 920 }}>
            Двери, авто, гаражи и сейфы. Проверка права доступа. Цена до начала работ.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              borderRadius: 8,
              background: "#ffd21e",
              color: "#111111",
              padding: "18px 32px",
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            {siteConfig.phone}
          </div>
          <div style={{ fontSize: 28, color: "#6e6a63" }}>{siteConfig.hours}</div>
        </div>
      </div>
    ),
    size,
  );
}

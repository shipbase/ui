type OpenGraphProps = {
  width: number
  height: number
  title: string
  description: string
  logoSrc: string
}

const DEFAULT_COLORS = {
  background: "#000000",
  text: "#ffffff",
  guide: "#1a1a1a",
  cross: "#515356",
  description: "#a8a29e",
} as const

export function OpenGraph({
  width,
  height,
  title,
  description,
  logoSrc,
}: OpenGraphProps) {
  const TITLE_FONT_SIZE = title && title.length > 20 ? 64 : 80
  const LOGO_SIZE = 88

  const GUIDE_INSET = 64
  const GUIDE_THICKNESS = 1
  const CROSS_LENGTH = 48
  const CROSS_THICKNESS = 3
  const CROSS_HALF = CROSS_LENGTH / 2
  const CROSS_HALF_THICKNESS = Math.floor(CROSS_THICKNESS / 2)

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
        display: "flex",
        background: DEFAULT_COLORS.background,
        color: DEFAULT_COLORS.text,
        fontFamily: "Geist,system-ui,sans-serif",
      }}
    >
      {/* Vertical guide left */}
      <div
        style={{
          position: "absolute",
          left: GUIDE_INSET,
          top: 0,
          bottom: 0,
          width: GUIDE_THICKNESS,
          background: DEFAULT_COLORS.guide,
          opacity: 1,
        }}
      />

      {/* Vertical guide right */}
      <div
        style={{
          position: "absolute",
          right: GUIDE_INSET,
          top: 0,
          bottom: 0,
          width: GUIDE_THICKNESS,
          background: DEFAULT_COLORS.guide,
          opacity: 1,
        }}
      />

      {/* Horizontal guide top */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: GUIDE_INSET,
          height: GUIDE_THICKNESS,
          background: DEFAULT_COLORS.guide,
        }}
      />

      {/* Horizontal guide bottom */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: GUIDE_INSET,
          height: GUIDE_THICKNESS,
          background: DEFAULT_COLORS.guide,
        }}
      />

      {/* Cross at top-left intersection */}
      <div
        style={{
          position: "absolute",
          left: GUIDE_INSET - CROSS_HALF,
          top: GUIDE_INSET - CROSS_HALF_THICKNESS,
          width: CROSS_LENGTH,
          height: CROSS_THICKNESS,
          background: DEFAULT_COLORS.cross,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: GUIDE_INSET - CROSS_HALF_THICKNESS,
          top: GUIDE_INSET - CROSS_HALF,
          width: CROSS_THICKNESS,
          height: CROSS_LENGTH,
          background: DEFAULT_COLORS.cross,
        }}
      />

      {/* Cross at bottom-right intersection */}
      <div
        style={{
          position: "absolute",
          right: GUIDE_INSET - CROSS_HALF,
          bottom: GUIDE_INSET - CROSS_HALF_THICKNESS,
          width: CROSS_LENGTH,
          height: CROSS_THICKNESS,
          background: DEFAULT_COLORS.cross,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: GUIDE_INSET - CROSS_HALF_THICKNESS,
          bottom: GUIDE_INSET - CROSS_HALF,
          width: CROSS_THICKNESS,
          height: CROSS_LENGTH,
          background: DEFAULT_COLORS.cross,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          left: 128,
          top: 128,
          bottom: 128,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 896,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 32,
            marginBottom: 8,
            width: "100%",
          }}
        >
          {/* Logo */}
          <img
            src={logoSrc}
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            alt="shipbase/ui"
            style={{ display: "block" }}
          />

          {/* Title */}
          <div
            style={{
              fontWeight: 600,
              fontSize: TITLE_FONT_SIZE,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              flex: 1,
              minWidth: 0,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            marginTop: 16,
            fontWeight: 500,
            fontSize: 40,
            lineHeight: 1.5,
            color: DEFAULT_COLORS.description,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}

export type { OpenGraphProps }

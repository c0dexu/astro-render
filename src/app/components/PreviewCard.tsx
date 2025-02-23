"use client";

interface PreviewCardProps {
  title: string;
  description: string;
  imgUrl: string;
  onClick?: () => void;
  routeLink?: string;
}

export function PreviewCard(props: PreviewCardProps) {
  return (
    <div
      style={{
        cursor: "pointer",
        maxWidth: "356px",
        height: "356px",
        backgroundColor: "white",
        boxShadow: " 0px 1px 14px 0px rgba(118, 110, 110, 0.75)",
        borderRadius: "1rem",
        backgroundImage: `url(${props.imgUrl})`,
        backgroundSize: "cover",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          padding: "10px 10px 10px 10px",

          width: "100%",
        }}
      >
        <div style={{ fontSize: "28px", fontWeight: "bold" }}>
          {props.title}
        </div>
        <div style={{ fontSize: "18px" }}>{props.description}</div>
      </div>
    </div>
  );
}

"use client";

export function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "64px",
        backgroundColor: "#2e8de8",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
            bottom: "-20px",
            fontSize: "42px",
            textShadow: "#626663 1px 8px 10px",
            userSelect: "none",
          }}
        >
          ASTROXPLORE
        </div>
      </div>
    </div>
  );
}

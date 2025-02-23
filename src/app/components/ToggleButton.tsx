"use client";

import { useEffect, useRef, useState } from "react";

interface ToggleButtonProps {
  onToggle: (event: boolean) => void;
}

export function ToggleButton(props: ToggleButtonProps) {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      style={{
        cursor: "pointer",
        borderRadius: "1rem",
        backgroundColor: "#ced5db",
        width: "56px",
        height: "25px",
        padding: "3px 3px 3px 3px",
      }}
      onClick={() => {
        const temp = toggle;
        setToggle(!temp);
        props.onToggle(!temp);
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f5fa",
          borderRadius: "1rem",
          width: "24px",
          height: "24px",
          boxShadow: " 0px 1px 14px 0px rgba(118, 110, 110, 0.75)",
        }}
      ></div>
    </div>
  );
}

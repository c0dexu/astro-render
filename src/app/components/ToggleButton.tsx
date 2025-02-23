"use client";

import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

interface ToggleButtonProps {
  onToggle: (event: boolean) => void;
}

export function ToggleButton(props: ToggleButtonProps) {
  const [toggle, setToggle] = useState(false);
  const stylesCircle = useSpring({ left: toggle ? 30 : 0 });

  return (
    <div
      onClick={() => {
        const temp = toggle;
        setToggle(!temp);
        props.onToggle(!temp);
      }}
    >
      <div
        style={{
          cursor: "pointer",
          borderRadius: "1rem",
          backgroundColor: toggle ? "#6bb57f" : "#ced5db",
          width: "56px",
          height: "25px",
          padding: "3px 3px 3px 3px",
        }}
      >
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <animated.div
            style={{
              position: "absolute",
              backgroundColor: "#f0f5fa",
              borderRadius: "1rem",
              width: "24px",
              height: "24px",
              boxShadow: " 0px 1px 14px 0px rgba(118, 110, 110, 0.75)",
              ...stylesCircle,
            }}
          />
        </div>
      </div>
    </div>
  );
}

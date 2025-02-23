"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

interface ButtonProps {
  text?: string;
  size?: string;
  type?: string;
  onClick?: () => void;
}

const btnPrimary: CSSProperties = {
  cursor: "pointer",
  borderRadius: "8px",
  backgroundColor: "#2e8de8",
  color: "white",

  border: "0px",
  padding: ".25rem .25rem .25rem .25rem",
  width: "150px",
  height: "50px",
  fontSize: "16px",
};

const btnSecondary: CSSProperties = {
  cursor: "pointer",
  borderRadius: "8px",
  color: "#2e8de8",

  border: "1px solid #2e8de8",
  padding: ".25rem .25rem .25rem .25rem",
  width: "150px",
  height: "50px",
  fontSize: "16px",
  backgroundColor: "unset",
};

const btnDanger: CSSProperties = {
  cursor: "pointer",
  borderRadius: "8px",
  color: "#b56b86",

  border: "1px solid #b56b86",
  padding: ".25rem .25rem .25rem .25rem",
  width: "150px",
  height: "50px",
  fontSize: "16px",
  backgroundColor: "unset",
};

export function Button(props: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [btn, setBtn] = useState({});
  const btnRef = useRef({});

  useEffect(() => {
    switch (props.type) {
      case "primary":
        setBtn({ ...btnPrimary });
        btnRef.current = btnPrimary;
        break;
      case "secondary":
        setBtn({ ...btnSecondary });
        btnRef.current = btnSecondary;
        break;
      case "danger":
        setBtn({ ...btnDanger });
        btnRef.current = btnDanger;
        break;
    }
  }, [props.type]);

  useEffect(() => {
    if (hover && !isMouseDown) {
      switch (props.type) {
        case "primary":
          setBtn({ ...btnRef.current, backgroundColor: "#4196e8" });
          break;
      }
    }
    if (!hover && !isMouseDown) {
      switch (props.type) {
        case "primary":
          setBtn({ ...btnRef.current, backgroundColor: "#2e8de8" });
          break;
      }
    }

    if (hover && isMouseDown) {
      switch (props.type) {
        case "primary":
          setBtn({ ...btnRef.current, backgroundColor: "#3881c7" });
          break;
      }
    }
  }, [hover, isMouseDown, props.type]);

  return (
    <button
      style={btn}
      onClick={props.onClick}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        setIsMouseDown(false);
      }}
      onMouseDown={() => {
        setIsMouseDown(true);
      }}
      onMouseUp={() => {
        setIsMouseDown(false);
      }}
    >
      {props.text}
    </button>
  );
}

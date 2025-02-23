"use client";

import Image from "next/image";
import { Button } from "./components/Button";
import { ToggleButton } from "./components/ToggleButton";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <ToggleButton
        onToggle={(event) => {
          console.log(event);
        }}
      ></ToggleButton>
      <Button
        onClick={() => {
          console.log("Saved succesfully!");
        }}
        type="primary"
        text="Save"
      ></Button>
      <Button
        onClick={() => {
          console.log("Cancelled!");
        }}
        type="secondary"
        text="Discard"
      ></Button>
    </div>
  );
}

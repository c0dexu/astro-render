"use client";

import Image from "next/image";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
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

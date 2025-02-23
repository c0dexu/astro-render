"use client";

import Image from "next/image";
import { Button } from "./components/Button";
import { ToggleButton } from "./components/ToggleButton";
import { Navbar } from "./components/Navbar";
import { PreviewCard } from "./components/PreviewCard";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "356px 356px",
          gap: "64px",
          justifyContent: "center",
          padding: "3rem 3rem 3rem 3rem",
        }}
      >
        <PreviewCard
          title="Solar System Explorer"
          description="View, search and compare various astronomical objects from our solar system"
          imgUrl="solar-system.jpg"
        ></PreviewCard>
        <PreviewCard
          title="Exoplanets Explorer"
          description="Do you prefer going beyond our star? This is the right place."
          imgUrl="exoplanets.jpg"
        ></PreviewCard>
      </div>
    </div>
  );
}

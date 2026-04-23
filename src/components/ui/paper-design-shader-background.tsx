"use client";

import { GrainGradient } from "@paper-design/shaders-react";

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(22, 40%, 4%)"
        softness={0.88}
        intensity={0.28}
        noise={0.06}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1.2}
        rotation={0}
        speed={0.6}
        colors={["hsl(38, 91%, 42%)", "hsl(26, 100%, 38%)", "hsl(20, 60%, 18%)"]}
      />
    </div>
  );
}

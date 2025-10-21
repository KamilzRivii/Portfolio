// components/ShinyText.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  speedSec?: number;
};

export const ShinyText: React.FC<Props> = ({ children, className = "", speedSec = 3 }) => {
  return (
    <span
      className={`bg-gradient-to-r from-[#A1C4D7] to-[#E2E8F0] text-transparent bg-clip-text ${className}`}
      style={{
        backgroundSize: "200% auto",
        animation: `shine ${speedSec}s linear infinite`,
      }}
    >
      {children}
    </span>
  );
};


export default ShinyText;

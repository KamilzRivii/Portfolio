import React, { useEffect, useState } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number; // czas w ms między kolejnymi krokami
  className?: string;
}

const chars = "!@#$%^&*()_+-=<>?/[]{}abcdefghijklmnopqrstuvwxyz0123456789".split("");

const DecryptedText: React.FC<DecryptedTextProps> = ({ text, speed = 50, className }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        // część odszyfrowana
        const revealed = text.slice(0, i);
        // część jeszcze losowa
        const scrambled = text
          .slice(i)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("");
        setDisplayed(revealed + scrambled);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
};

export default DecryptedText;

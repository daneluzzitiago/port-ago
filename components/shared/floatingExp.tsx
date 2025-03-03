import { Box, keyframes } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { TypographyV2 } from "./typographyV2";

const floatUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

type FloatingExpProps = {
  children: ReactNode;
  index: number;
  totalItems: number;
};

export function FloatingExp({ children, index, totalItems }: FloatingExpProps) {
  const [showExp, setShowExp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * totalItems);
      if (randomIndex === index) {
        setShowExp(true);
        setTimeout(() => setShowExp(false), 1500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index, totalItems]);

  return (
    <Box position="relative">
      {children}
      {showExp && (
        <Box
          sx={{
            position: "absolute",
            top: -20,
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: "bold",
            fontSize: "0.875rem",
            animation: `${floatUp} 1.5s ease-out`,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          <TypographyV2 sx={{color: "green"}} variant={"body"}>+EXP</TypographyV2>
        </Box>
      )}
    </Box>
  );
}

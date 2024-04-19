import { ReactNode } from "react";

interface Props {
  width: string;
  height: string;
  padding: string;
  margin: string;
  bgColor: string;
  children: ReactNode;
}

export const Card = ({width, height, bgColor, children, padding, margin}:Props) => {
  return (
    <div style={{ backgroundColor: bgColor, width, height, padding, margin }}>
      {children}
    </div>
  );
}
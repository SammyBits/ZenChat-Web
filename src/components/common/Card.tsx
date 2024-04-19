import { ReactNode } from "react";
import '../../styles/common/Card.css'
interface Props {
  children: ReactNode;
  className?: string;
}

export const Card = ({children, className}:Props) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
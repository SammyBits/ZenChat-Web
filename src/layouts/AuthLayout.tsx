import { ReactNode } from "react";
import '../styles/layouts/AuthLayout.css'
interface Props {
    children: ReactNode;

}
export const AuthLayout = ({children}: Props) => {
  return (
    <div className="content">{children}</div>
  )
}

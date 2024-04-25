import { HTMLInputTypeAttribute } from "react";

interface Props {
    id: string;
    className?: string;
    typeInput: HTMLInputTypeAttribute | string;
    onChange: (e: any) => void;
  }
  
export const Input = ({id,typeInput, className, onChange}:Props) => {
  return (
    <input className={className} type={typeInput} id={id} onChange={onChange}/>
  )
}

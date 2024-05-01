import { cn } from "../../lib"
import { ButtonProps } from "./types"

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button 
      {...props}
      className={cn(
        "bg-blue-700 px-10 py-1.5 rounded-xl text-white",
        className
      )}
    >
      {children}
    </button>
  )
}
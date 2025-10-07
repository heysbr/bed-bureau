import { ReactNode } from "react";

export default function FormContainer({children}) {
  return (
    <div className="w-100 bg-light p-5">{children}</div>
  )
}
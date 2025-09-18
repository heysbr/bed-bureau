import { ReactNode } from "react"

type PrimaryButtonProps = {
children ?: ReactNode
label ?: string;
href ?: string
}
export default function PrimaryButton({children, label, href}:PrimaryButtonProps) {
  return (
    <button type="button" className="btn btn-primary app-primary btn-primary-shadow  border-0 py-2 fw-bold fs-14">{label}</button>
  )
}                                    
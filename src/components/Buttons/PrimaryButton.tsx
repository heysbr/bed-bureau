import { ReactNode } from "react";

type PrimaryButtonProps = {
  children?: ReactNode;
  label?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
};
export default function PrimaryButton({ label, type = "button" }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className="btn btn-primary app-primary btn-primary-shadow  border-0 py-2 fw-bold fs-14"
    >
      {label}
    </button>
  );
}

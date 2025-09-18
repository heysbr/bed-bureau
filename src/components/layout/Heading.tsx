import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};
export default function Heading({children}:HeadingProps) {
  return (
    <h3 className="w-100 fw-bold fs-1">{children}</h3>
  )
}
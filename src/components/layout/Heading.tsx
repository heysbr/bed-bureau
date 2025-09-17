import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};
export default function Heading({children}:HeadingProps) {
  return (
    <div className="w-100 bg-light p-5 display-3">{children}</div>
  )
}
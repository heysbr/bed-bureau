import { ReactNode } from "react";

type SubHeadingProps = {
  children: ReactNode;
};
export default function SubHeading({children}:SubHeadingProps) {
  return (
    <div className="w-100 bg-light p-5 display-6">{children}</div>
  )
}
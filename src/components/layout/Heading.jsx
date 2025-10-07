export default function Heading({children,className}) {
  return (
    <h3 className={`w-full font-bold text-4xl ${className}`}>{children}</h3>
  )
}
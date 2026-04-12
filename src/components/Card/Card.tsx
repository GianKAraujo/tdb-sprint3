import type { ReactNode } from "react"

type CardProps = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <>
      <div className={`bg-white border-2 border-[#70C1B3] rounded-lg p-6 shadow-md hover:shadow-lg hover:border-[#F28F3B] transition ${className}`}>
        {children}
      </div>
    </>
  )
}

export default Card

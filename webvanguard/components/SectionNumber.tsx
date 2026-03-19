'use client'

interface SectionNumberProps {
  number: string
}

export default function SectionNumber({ number }: SectionNumberProps) {
  return (
    <div className="section-number">
      {number}
    </div>
  )
}
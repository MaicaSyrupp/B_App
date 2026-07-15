import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-neutral-border bg-neutral-surfaceCard p-4 ${className}`}
      {...props}
    />
  )
}

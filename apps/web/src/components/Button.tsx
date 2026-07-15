import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-accent-soft text-primary hover:bg-primary-selected',
  ghost: 'bg-transparent text-neutral-label hover:bg-neutral-surface',
  danger: 'bg-error text-white hover:bg-error/90',
}

export function Button({
  variant = 'primary',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:border disabled:border-neutral-borderDisabled disabled:bg-neutral-surface disabled:text-neutral-textSecondary ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...props}
    />
  )
}

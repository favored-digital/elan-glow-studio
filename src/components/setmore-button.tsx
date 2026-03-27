const BOOKING_URL = "https://favoreddigital.setmore.com"

interface SetmoreButtonProps {
  className?: string
  variant?: "default" | "outline" | "light"
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export function SetmoreButton({
  className = "",
  variant = "default",
  children = "Book Appointment",
  onClick,
}: SetmoreButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer"

  const variantStyles = {
    default:
      "bg-foreground text-background border-none px-6 py-3 hover:bg-foreground/90",
    outline:
      "bg-transparent text-foreground border border-foreground px-6 py-2.5 hover:bg-foreground hover:text-background",
    light:
      "bg-background text-foreground border-none px-8 py-4 hover:bg-background/90",
  }

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`anywhere-book-now-button ${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

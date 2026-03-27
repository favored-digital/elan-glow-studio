import { useEffect, useId } from "react"

interface SetmoreButtonProps {
  className?: string
  variant?: "default" | "outline" | "light"
  children?: React.ReactNode
}

export function SetmoreButton({
  className = "",
  variant = "default",
  children = "Book Appointment",
}: SetmoreButtonProps) {
  const uniqueId = useId()

  useEffect(() => {
    // Re-initialize Setmore bindings after React renders
    const script = document.getElementById("anywhere_book_now_script") as HTMLScriptElement
    if (script) {
      const newScript = document.createElement("script")
      newScript.type = "text/javascript"
      newScript.src = script.src
      newScript.id = "anywhere_book_now_reload_" + uniqueId.replace(/:/g, "")
      document.body.appendChild(newScript)
      return () => {
        newScript.remove()
      }
    }
  }, [uniqueId])

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
      href="https://favoreddigital.setmore.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

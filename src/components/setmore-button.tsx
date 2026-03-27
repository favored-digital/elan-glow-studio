"use client"

import { useEffect } from "react"

const SCRIPT_ID = "anywhere_book_now_script"
const SCRIPT_SRC =
  "https://assets.setmore.com/integration/book-now/live/v1/anywhere-book-now.js"

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
  useEffect(() => {
    const existingScript = document.getElementById(SCRIPT_ID)
    if (existingScript) {
      existingScript.remove()
    }

    const script = document.createElement("script")
    script.id = SCRIPT_ID
    script.type = "text/javascript"
    script.src = SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

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
    <button
      type="button"
      id="Anywhere_button_iframe"
      className={`anywhere-book-now-button ${baseStyles} ${variantStyles[variant]} ${className}`}
      data-booking-url="https://favoreddigital.setmore.com"
      data-new-tab="false"
    >
      {children}
    </button>
  )
}

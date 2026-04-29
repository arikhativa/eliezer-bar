import type { ComponentPropsWithoutRef } from "react"

export function ExternalLink(props: ComponentPropsWithoutRef<"a">) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

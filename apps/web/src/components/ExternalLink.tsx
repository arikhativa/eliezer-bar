import type { ComponentPropsWithoutRef } from "react";

export function ExternalLink(props: ComponentPropsWithoutRef<"a">) {
  return (
    <a {...props} rel="noopener noreferrer" target="_blank">
      {props.children}
    </a>
  );
}

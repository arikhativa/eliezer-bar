import { TypographyH2 } from "@workspace/ui/components/TypographyH2"
import img from "@/assets/event-image.jpeg"
import { HOME_STRING } from "@/lib/strings/home"

export function CurrentEvent() {
  return (
    <div className="flex w-full max-w-3xl items-start justify-between">
      <TypographyH2>{HOME_STRING.currentEvent.title}</TypographyH2>
      <div className="w-100 overflow-hidden rounded-2xl bg-amber-100">
        <img alt="event flayer" className="object-contain" src={img} />
      </div>
    </div>
  )
}

import img from "@/assets/event-image.jpeg"

export function CurrentEvent() {
  return (
    <div className="w-130 overflow-hidden rounded-2xl bg-amber-100">
      <img alt="event flayer" className="object-contain" src={img} />
    </div>
  )
}

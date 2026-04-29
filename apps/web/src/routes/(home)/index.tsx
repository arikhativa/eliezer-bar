import { HOME_STRING } from "@/lib/strings/home"
import { DataCard } from "@/routes/(home)/-DataCard"
import { createFileRoute } from "@tanstack/react-router"
import { TypographyH1 } from "@workspace/ui/components/TypographyH1"
import { TypographyH2 } from "@workspace/ui/components/TypographyH2"

export const Route = createFileRoute("/(home)/")({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-20">
      <TypographyH1>{HOME_STRING.title}</TypographyH1>
      <TypographyH2>{HOME_STRING.subtitle}</TypographyH2>
      <DataCard />
    </div>
  )
}

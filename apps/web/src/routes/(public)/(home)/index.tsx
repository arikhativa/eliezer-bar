import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent } from "@workspace/ui/components/card"
import { TypographyH1 } from "@workspace/ui/components/TypographyH1"
import { TypographyH2 } from "@workspace/ui/components/TypographyH2"
import { HOME_STRING } from "@/lib/strings/home"
import { CurrentEvent } from "@/routes/(public)/(home)/-CurrentEvent"
import { DataCard } from "@/routes/(public)/(home)/-DataCard"
import { EOISection } from "@/routes/(public)/(home)/-EOISection"
import { FQADropdown } from "@/routes/(public)/(home)/-FQADropdown"
import { SolutionSection } from "@/routes/(public)/(home)/-SolutionSection"
import { WhySection } from "@/routes/(public)/(home)/-WhySection"

export const Route = createFileRoute("/(public)/(home)/")({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 pt-20 pb-30">
      <Card>
        <CardContent className="space-y-4">
          <TypographyH1>{HOME_STRING.title}</TypographyH1>
          <TypographyH2>{HOME_STRING.subtitle}</TypographyH2>
        </CardContent>
      </Card>
      <EOISection />
      <CurrentEvent />
      <DataCard />
      <WhySection />
      {/* <MainIssueCard /> */}
      <FQADropdown />
      <SolutionSection />
    </div>
  )
}

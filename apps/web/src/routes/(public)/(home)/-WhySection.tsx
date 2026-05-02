import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { TypographyH2 } from "@workspace/ui/components/TypographyH2"
import { HOME_STRING } from "@/lib/strings/home"

function Section({ a, b }: { a: string; b: string }) {
  return (
    <div>
      <p className="font-bold text-base">{a}</p>
      <p className="text-base">{b}</p>
    </div>
  )
}

export function WhySection() {
  return (
    <Card>
      <CardHeader>
        <TypographyH2>{HOME_STRING.why.title}</TypographyH2>
        <p className="text-lg">{HOME_STRING.why.subtitle}</p>
      </CardHeader>
      <CardContent>
        <p className="py-4 font-bold text-xl">{HOME_STRING.why.imported}</p>
        <div className="flex flex-col gap-6">
          <Section {...HOME_STRING.why.point1} />
          <Section {...HOME_STRING.why.point2} />
          <Section {...HOME_STRING.why.point3} />
          <Section {...HOME_STRING.why.point4} />
        </div>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { Item, ItemContent } from "@workspace/ui/components/item"
import { TypographyH2 } from "@workspace/ui/components/TypographyH2"
import { Heart, type LucideIcon, Store, TrendingUp, Users } from "lucide-react"
import { HOME_STRING } from "@/lib/strings/home"

function IntoItem({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string
  subtitle: string
  icon: LucideIcon
}) {
  return (
    <Item className="flex-1 bg-background">
      <ItemContent className="flex flex-col items-center justify-center gap-2">
        <div className="flex aspect-square w-16 items-center justify-center rounded-full border-2 bg-background">
          <Icon className="text-primary" size={30} />
        </div>
        <p className="text-center font-bold text-xl">{title}</p>
        <p className="text-center text-muted-foreground">{subtitle}</p>
      </ItemContent>
    </Item>
  )
}

export function SolutionSection() {
  return (
    <Card className="max-w-5xl">
      <CardHeader className="flex items-center justify-center">
        <TypographyH2>{HOME_STRING.solution.title}</TypographyH2>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-8">
          <IntoItem icon={Users} {...HOME_STRING.solution.unite} />
          <IntoItem icon={Store} {...HOME_STRING.solution.buy} />
          <IntoItem icon={TrendingUp} {...HOME_STRING.solution.manage} />
          <IntoItem icon={Heart} {...HOME_STRING.solution.effect} />
        </div>
      </CardContent>
    </Card>
  )
}

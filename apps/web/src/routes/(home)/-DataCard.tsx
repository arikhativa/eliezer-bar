import { HOME_STRING } from "@/lib/strings/home"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"
import { Item, ItemContent, ItemTitle } from "@workspace/ui/components/item"

const STOCKS = 24 as const
const PROGRESS_PRE_CENT = STOCKS / 2
const GOAL = 200 as const

function IntoItem({ text, value }: { text: string; value: string | number }) {
  return (
    <Item className="bg-background">
      <ItemContent>
        <ItemTitle className="text-sm text-muted-foreground">{text}</ItemTitle>
        <p className="text-2xl">{value}</p>
      </ItemContent>
    </Item>
  )
}

export function DataCard() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle>{HOME_STRING.card.title}</CardTitle>
          <CardDescription>{HOME_STRING.card.subtitle}</CardDescription>
        </div>
        <p className="text-2xl font-bold">{`${PROGRESS_PRE_CENT}%`}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <Progress className="rtl:rotate-180" value={PROGRESS_PRE_CENT} />
        <div className="flex justify-between">
          <span>{PROGRESS_PRE_CENT / 2}</span>
          <span>{GOAL}</span>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        <IntoItem text={HOME_STRING.card.items.stock.title} value={STOCKS} />
        <IntoItem
          text={HOME_STRING.card.items.loan.title}
          value={`₪${HOME_STRING.card.items.loan.value}`}
        />
        <IntoItem
          text={HOME_STRING.card.items.investor.title}
          value={HOME_STRING.card.items.investor.value}
        />
        <IntoItem
          text={HOME_STRING.card.items.members.title}
          value={HOME_STRING.card.items.members.value}
        />
      </CardFooter>
    </Card>
  )
}

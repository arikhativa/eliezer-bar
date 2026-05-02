import { useSuspenseQuery } from "@tanstack/react-query"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Item, ItemContent, ItemTitle } from "@workspace/ui/components/item"
import { Progress } from "@workspace/ui/components/progress"
import { homepageQO } from "@/lib/queryOptions/homepage"
import { HOME_STRING } from "@/lib/strings/home"

const STOCK_PRICE = 500 as const
const GOAL = 200_000 as const

function IntoItem({ text, value }: { text: string; value: string | number }) {
  return (
    <Item className="bg-background">
      <ItemContent>
        <ItemTitle className="text-muted-foreground text-sm">{text}</ItemTitle>
        <p className="text-2xl">{value}</p>
      </ItemContent>
    </Item>
  )
}

export function DataCard() {
  const { data } = useSuspenseQuery(homepageQO())

  const shareSum = data.memberCount * STOCK_PRICE
  const currentFunds = shareSum + data.loanSum
  const currentFundsPercent = (currentFunds / GOAL) * 100

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle>{HOME_STRING.card.title}</CardTitle>
          <CardDescription>{HOME_STRING.card.subtitle}</CardDescription>
        </div>
        <p className="font-bold text-2xl">{`${currentFundsPercent}%`}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <Progress className="rtl:rotate-180" value={currentFundsPercent} />
        <div className="flex justify-between">
          <span>{`₪${currentFunds.toLocaleString()}`}</span>
          <span>{`₪${GOAL.toLocaleString()}`}</span>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        <IntoItem
          text={HOME_STRING.card.items.investor.title}
          value={data.investorCount}
        />
        <IntoItem
          text={HOME_STRING.card.items.loan.title}
          value={`₪${data.loanSum.toLocaleString()}`}
        />
        <IntoItem
          text={HOME_STRING.card.items.members.title}
          value={data?.memberCount}
        />
        <IntoItem
          text={HOME_STRING.card.items.share.title}
          value={`₪${shareSum.toLocaleString()}`}
        />
      </CardFooter>
    </Card>
  )
}

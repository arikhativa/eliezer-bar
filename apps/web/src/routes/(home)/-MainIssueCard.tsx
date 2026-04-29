import { HOME_STRING } from "@/lib/strings/home"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Item, ItemContent, ItemTitle } from "@workspace/ui/components/item"
import { TypographyH2 } from "@workspace/ui/components/TypographyH2"
import { Quote } from "lucide-react"

export function MainIssueCard() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex items-center justify-center">
        <CardTitle>
          <TypographyH2>{HOME_STRING.issueCard.title}</TypographyH2>
          <p className="">{HOME_STRING.issueCard.subtitle}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Item className="bg-background">
          <ItemContent className="relative space-y-2 p-8">
            <Quote className="absolute top-0 right-0" />
            <ItemTitle className="text-sm text-muted-foreground">
              <p className="text-center text-xl text-foreground">{`"${HOME_STRING.issueCard.quote}"`}</p>
            </ItemTitle>
            <p className="text-center text-lg">
              {HOME_STRING.issueCard.quoteName}
            </p>
          </ItemContent>
        </Item>
      </CardContent>
    </Card>
  )
}

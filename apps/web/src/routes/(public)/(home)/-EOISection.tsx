import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { TypographyH2 } from "@workspace/ui/components/TypographyH2"
import { ExternalLink } from "@/components/ExternalLink"
import { HOME_STRING } from "@/lib/strings/home"

export function EOISection() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <TypographyH2>{HOME_STRING.eoi.title}</TypographyH2>
        <Button>
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSdAaqJjM-DxnFaqK6_wGIra06X9uuzHScviKLxjl-V-us2dBw/viewform">
            <p className="p-4 text-lg">{HOME_STRING.eoi.subtitle}</p>
          </ExternalLink>
        </Button>
        <Button variant={"link"}>
          <ExternalLink href="https://chat.whatsapp.com/G7dc7aC3qrH8iJ9knyGmD7">
            <p className="p-4 text-lg">{HOME_STRING.eoi.whatsapp}</p>
          </ExternalLink>
        </Button>
      </CardContent>
    </Card>
  )
}

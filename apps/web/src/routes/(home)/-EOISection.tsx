import { ExternalLink } from "@/components/ExternalLink"
import { HOME_STRING } from "@/lib/strings/home"
import { Button } from "@workspace/ui/components/button"
import { TypographyH2 } from "@workspace/ui/components/TypographyH2"

export function EOISection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TypographyH2>{HOME_STRING.eoi.title}</TypographyH2>
      <p className="text-lg">
        {HOME_STRING.eoi.subtitle}

        <Button variant={"link"}>
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSdAaqJjM-DxnFaqK6_wGIra06X9uuzHScviKLxjl-V-us2dBw/viewform">
            Google Form
          </ExternalLink>
        </Button>
      </p>
    </div>
  )
}

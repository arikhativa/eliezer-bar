import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { FQA } from "@/lib/strings/home"

export function FQADropdown() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>
          <p className="font-bold text-2xl">{FQA.title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion collapsible defaultValue="" type="single">
          {FQA.list.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>
                <p className="text-lg">{item.trigger}</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="whitespace-pre-line text-lg text-slate-300 leading-relaxed">
                  {item.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

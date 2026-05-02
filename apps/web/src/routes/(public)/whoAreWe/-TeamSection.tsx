import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import female from "@/assets/female.svg"
import male from "@/assets/male.svg"

interface PersonProps {
  age?: number
  fullName: string
  isMale?: boolean
  pic?: string
}

function Pearson({ isMale, fullName, age, pic }: PersonProps) {
  return (
    <Card className="w-46">
      <CardHeader className="flex items-center justify-center">
        <div className="aspect-square w-26 rounded-full border-2 border-background bg-accent">
          {pic ? (
            <img alt={fullName} className="object-contain" src={pic} />
          ) : (
            <img
              alt={fullName}
              className="object-contain p-4 opacity-50"
              src={isMale ? male : female}
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        {age ? <p>{`${fullName}, ${age}`}</p> : <p>{fullName}</p>}
      </CardContent>
    </Card>
  )
}

export interface TeamProps {
  list: PersonProps[]
  teamName: string
}

export function TeamSection({ teamName, list }: TeamProps) {
  return (
    <div className="flex w-full max-w-4xl flex-col gap-4">
      <p className="text-2xl">{teamName}</p>
      <div className="flex flex-wrap gap-4">
        {list.map((e) => (
          <Pearson key={e.fullName} {...e} />
        ))}
      </div>
    </div>
  )
}

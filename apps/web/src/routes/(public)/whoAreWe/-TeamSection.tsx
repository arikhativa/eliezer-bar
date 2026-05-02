import { Item, ItemContent } from "@workspace/ui/components/item"
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
    <Item className="w-46 bg-background">
      <ItemContent className="flex items-center justify-center">
        <div className="aspect-square w-26 rounded-full border-2 bg-accent">
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
        {age ? <p>{`${fullName}, ${age}`}</p> : <p>{fullName}</p>}
      </ItemContent>
    </Item>
  )
}

export interface TeamProps {
  list: PersonProps[]
  teamName: string
}

export function TeamSection({ teamName, list }: TeamProps) {
  return (
    <div className="flex w-full max-w-4xl flex-col gap-4">
      <p className="font-bold text-xl">{teamName}</p>
      <div className="flex flex-wrap gap-4">
        {list.map((e) => (
          <Pearson key={e.fullName} {...e} />
        ))}
      </div>
    </div>
  )
}

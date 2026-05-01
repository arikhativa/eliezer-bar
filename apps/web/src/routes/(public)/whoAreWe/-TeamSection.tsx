import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";

interface PersonProps {
  age?: number;
  fullName: string;
  pic?: string;
}

function Pearson({ fullName, age, pic }: PersonProps) {
  return (
    <Card className="w-46">
      <CardHeader>
        <div className="aspect-square w-36 rounded-full">
          {pic ? (
            <img alt={fullName} className="object-contain" src={pic} />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-full bg-background">
              <p className="text-center">...</p>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {age ? <p>{`${fullName}, ${age}`}</p> : <p>{fullName}</p>}
      </CardContent>
    </Card>
  );
}

export interface TeamProps {
  list: PersonProps[];
  teamName: string;
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
  );
}

import { Card, CardContent } from "@workspace/ui/components/card";
import { TypographyH2 } from "@workspace/ui/components/TypographyH2";
import { Heart, type LucideIcon, Store, TrendingUp, Users } from "lucide-react";
import { HOME_STRING } from "@/lib/strings/home";

function IntoItem({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="flex-1">
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <div className="flex aspect-square w-16 items-center justify-center rounded-full border-2 bg-background">
          <Icon className="text-primary" size={30} />
        </div>
        <p className="text-center font-bold text-xl">{title}</p>
        <p className="text-center text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

export function SolutionSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-20">
      <TypographyH2>{HOME_STRING.solution.title}</TypographyH2>
      <div className="flex gap-8">
        <IntoItem icon={Users} {...HOME_STRING.solution.unite} />
        <IntoItem icon={Store} {...HOME_STRING.solution.buy} />
        <IntoItem icon={TrendingUp} {...HOME_STRING.solution.manage} />
        <IntoItem icon={Heart} {...HOME_STRING.solution.effect} />
      </div>
    </div>
  );
}

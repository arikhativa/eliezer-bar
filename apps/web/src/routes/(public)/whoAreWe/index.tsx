import { createFileRoute } from "@tanstack/react-router";
import { TypographyH1 } from "@workspace/ui/components/TypographyH1";
import { TypographyH2 } from "@workspace/ui/components/TypographyH2";
import {
  SUPPORTS_FROM_CITY,
  TEAM_BIZ_DEV,
  TEAM_MANAGEMENT,
  TEAM_REAL_ESTATE,
  TEAM_SOCIAL,
  WHO_ARE_WE_STRINGS,
} from "@/lib/strings/whoAreWe";
import { TeamSection } from "@/routes/(public)/whoAreWe/-TeamSection";

export const Route = createFileRoute("/(public)/whoAreWe/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 py-20">
      <div className="flex flex-col items-center justify-center">
        <TypographyH1>{WHO_ARE_WE_STRINGS.title}</TypographyH1>
        <TypographyH2>{WHO_ARE_WE_STRINGS.subtitle}</TypographyH2>
      </div>
      <p className="text-xl">{WHO_ARE_WE_STRINGS.details}</p>
      <TeamSection {...TEAM_MANAGEMENT} />
      <TeamSection {...TEAM_REAL_ESTATE} />
      <TeamSection {...TEAM_SOCIAL} />
      <TeamSection {...TEAM_BIZ_DEV} />
      <TeamSection {...SUPPORTS_FROM_CITY} />
    </div>
  );
}

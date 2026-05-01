import { createFileRoute } from "@tanstack/react-router";
import { UpdatePasswordForm } from "@/routes/(public)/(auth)/update-password/-UpdatePasswordForm";

export const Route = createFileRoute("/(public)/(auth)/update-password/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UpdatePasswordForm />;
}

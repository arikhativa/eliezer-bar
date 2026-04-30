import { createFileRoute } from "@tanstack/react-router";
import { UpdatePasswordForm } from "@/routes/(auth)/update-password/-UpdatePasswordForm";

export const Route = createFileRoute("/(auth)/update-password/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UpdatePasswordForm />;
}

import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/routes/(auth)/login/-LoginForm";

export const Route = createFileRoute("/(auth)/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginForm />;
}

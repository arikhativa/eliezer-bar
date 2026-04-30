import { createFileRoute } from "@tanstack/react-router";
import { SignUpForm } from "@/routes/(auth)/sign-up/-SignUpForm";

export const Route = createFileRoute("/(auth)/sign-up/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignUpForm />;
}
